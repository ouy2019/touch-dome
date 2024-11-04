<!--
 * @Description: 患者手术占比
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';
import { PieSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.undergoingSurgery || {});

/** tab选项卡 */
const select = ref('');
const tabList = computed(() => {
  select.value = data?.value[0]?.title;
  return data?.value?.map?.((item) => {
    return {
      title: item.title,
      key: item.title,
    };
  });
});

const current = computed(() => data?.value?.find?.((item) => item.title === select.value));

const seriesData = computed(() => {
  return current.value?.children?.map((item) => {
    return {
      name: item.name,
      ...item,
    };
  });
});

const colorList = ['#FFC74F', '#F06B29', '#53F1D6', '#59B6FF'];

const eChartsOption = computed(() => {
  const eChartsOption: ComposeOption<PieSeriesOption> = {
    legend: {
      show: false,
    },
    colorList,
    grid: {
      top: '0%',
      left: '0%',
      right: '0',
      bottom: '0',
      containLabel: true,
    },
    series: [
      {
        type: 'pie',

        startAngle: 20,
        // center: [computeToRealSize(67), computeToRealSize(68)],
        radius: ['65%', '90%'],
        itemStyle: {
          color(params) {
            return colorList[params.dataIndex];
          },
          borderRadius: 0,
          borderColor: '#05152c',
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        data: seriesData.value,
      },
    ],
  };
  return eChartsOption;
});
</script>

<template>
  <div class="undergoing-surgery">
    <card-module title="患者手术占比">
      <div class="undergoing-surgery-content">
        <tab-toggle class="tab-toggle-com" v-model:select="select" :dataList="tabList" />
        <div class="asset-statistics-chart">
          <base-chart class="chart" :option="eChartsOption" />
          <div class="total-number">
            <span>{{ current?.total }}</span> <br />
            <span class="total-number-label">{{ current?.subTitle }}</span>
          </div>
        </div>
        <div class="list">
          <div
            class="item"
            :class="{ ['item' + [index]]: true }"
            v-for="(item, index) in seriesData"
            :key="index"
          >
            <p class="title">
              <span class="icon" :style="{ background: colorList[index] }"></span>{{ item.title }}
            </p>
            <div class="value-box">
              <p class="value">
                {{ item.value || 0 }}<span>{{ item.unit }}</span>
              </p>
              <span class="percent">{{ item.ratio }}</span>
            </div>
          </div>
        </div>
      </div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.undergoing-surgery {
  height: 265px;
  margin-top: 35px;
  width: 410px;
  pointer-events: all;
  .undergoing-surgery-content {
    .tab-toggle-com {
      height: 28px;
      @include flex(flex-end, center, row);
      margin-top: 16px;
      :deep(.btn-item) {
        padding: 5px 14px;
      }
    }
    .asset-statistics-chart {
      position: relative;
      width: 158px;
      height: 158px;
      margin: 0 auto;
      transform: translateX(-1px);
      margin-top: -14px;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('@/assets/img/background/humanResources/employee-types.png') center center
          no-repeat;
        background-size: 100% 100%;
      }

      .total-number {
        position: absolute;
        left: 0;
        top: 58px;
        width: 158px;
        font-size: 24px;
        font-family: DINPro;
        font-weight: 500;
        color: #ffffff;
        text-align: center;
      }

      .total-number-label {
        font-size: 14px;
        font-family: OPPOSans;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.5);
        position: relative;
        top: -8px;
      }

      .chart {
        width: 158px;
        height: 158px;
        margin: 0 auto;
        margin-top: 30px;
        :deep(div) {
          width: 100% !important;
          height: 100% !important;
          canvas {
            width: 100% !important;
            height: 100% !important;
          }
        }
        :after {
          content: '';
          position: absolute;
          width: 125px;
          height: 125px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          left: 50%;
          top: 50%;
          margin: 0 auto;
          transform: translate(-50%, -50%);
        }
      }
    }
    .list {
      @include flex(space-between, center, row);
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      flex-wrap: wrap;
      .item {
        padding-left: 12px;
        width: 30%;
        padding-right: 12px;
        position: absolute;
        &.item0 {
          top: -20px;
        }
        &.item1 {
          top: -20px;
          right: 0px;
        }
        &.item2 {
          top: 66px;
        }
        &.item3 {
          top: 66px;
          right: 0px;
        }
        .title {
          font-size: 14px;
          font-family: OPPOSans;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          @include flex(flex-start, center, row);
          .icon {
            width: 8px;
            height: 8px;
            margin-right: 5px;
          }
        }
        .value-box {
          margin-top: 8px;
          @include flex(flex-start, center, row);
          padding-left: 12px;
          .value {
            font-family: DINPro;
            font-weight: 400;
            font-size: 20px;
            color: #ffffff;
            width: 50%;
            span {
              font-size: 13px;
              padding-left: 1px;
            }
          }
          .percent {
            font-size: 16px;
            font-family: DINPro;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }
  }
}
</style>
