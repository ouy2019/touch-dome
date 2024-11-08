<!--
 * @Description: 成本情况分析(HIS)
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';
import { hexToRgba } from '@/utils/common';
import { PieSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';
import { formatNumberWithCommas } from '../../../utils/tool';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.costAnalysis || {});
const colorList = ['#4BAFF9', '#F9DA4B', '#4BF3F9', '#A3D8FF', '#F9B14B'];
const colorList2 = ['#53F1D6', '#1890FF', '#4BF3F9', '#A3D8FF', '#F9B14B'];

const tabList = ref(window?.config?.tab?.tab1);
const select = ref('day');

const currentData = computed(() => data.value[select.value]);

const seriesData = computed(() => {
  return currentData?.value?.list?.map((item) => {
    return {
      name: item.title,
      ...item,
    };
  });
});

const eChartsOption = computed(() => {
  let sum = 0;
  seriesData?.value?.forEach((item) => {
    sum += item.value * 1; // *1保证sum值为数值
  });
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
        startAngle: 180,
        // center: [computeToRealSize(67), computeToRealSize(68)],
        radius: ['60%', '95%'],
        z: 100,
        itemStyle: {
          color(params) {
            return hexToRgba(colorList2[params.dataIndex], 0.3);
          },
          borderRadius: 0,
          borderColor: '#23364e',
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        data: [
          ...(seriesData.value || []),
          {
            name: '11',
            value: sum,
            itemStyle: {
              color: 'rgba(0, 0, 0, 0)',
              borderRadius: 0,
              borderColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 2,
            },
          },
        ],
      },
      {
        type: 'pie',
        startAngle: 180,
        // center: [computeToRealSize(67), computeToRealSize(68)],
        radius: ['60%', '75%'],
        itemStyle: {
          color(params) {
            return colorList2[params.dataIndex];
          },
          borderRadius: 0,
          borderColor: '#23364e',
          borderWidth: 2,
          borderCap: 'square  ',
        },
        label: {
          show: false,
        },
        data: [
          ...(seriesData.value || []),
          {
            name: '11',
            value: sum,
            itemStyle: {
              color: 'rgba(0, 0, 0, 0)',
              borderRadius: 0,
              borderColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 2,
            },
          },
        ],
      },
    ],
  };
  return eChartsOption;
});
</script>

<template>
  <div class="cost-analysis">
    <card-module title="成本情况分析(HIS)">
      <template #right>
        <tab-toggle class="tab-toggle-com" v-model:select="select" :dataList="tabList" />
      </template>
      <div class="cost-analysis-content">
        <div class="titles">
          <div class="item" v-for="(item, index) in currentData?.titles" :key="index">
            <p class="title">
              <span class="icon" :style="{ backgroundColor: colorList[index] }"></span>
              {{ item.title }}
            </p>
            <p class="value">{{ formatNumberWithCommas(item.value) }}{{ item.unit }}</p>
            <div class="bottom">
              同比
              <p class="percentage">
                <rate-number-new :state="item.state" :value="item.ratio" :reversal="true" />
              </p>
            </div>
          </div>
        </div>
        <div class="render">
          <base-chart class="chart" :option="eChartsOption" />
          <div class="render-list">
            <div class="item" v-for="(item, index) in currentData?.list" :key="index">
              <p class="title">
                <span class="icon" :style="{ backgroundColor: colorList2[index] }"></span>
                {{ item.title }}
              </p>
              <p class="value">{{ formatNumberWithCommas(item.value) }}{{ item.unit }}</p>
              <div class="bottom" :style="{ color: colorList2[index] }">
                {{ item.ratio }}{{ item.ratioUnit }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.cost-analysis {
  height: 230px;
  width: 410px;
  pointer-events: all;
  margin-top: 35px;
  .cost-analysis-content {
    .titles {
      margin: 20px -20px 0 10px;
      @include flex(space-around, center, row);
      .item {
        width: 30%;
        .title {
          font-family: OPPOSans;
          font-weight: 400;
          font-size: 12px;
          color: #ffffff;
          @include flex(flex-start, center, row);
          .icon {
            width: 6px;
            height: 6px;
            margin-right: 6px;
          }
        }
        .value {
          font-family: DIN;
          font-weight: 500;
          font-size: 18px;
          color: #ffffff;
          padding-left: 10px;
          margin-top: 4px;
        }
        .bottom {
          margin-top: 4px;
          padding-left: 10px;
          font-family: OPPOSans;
          font-weight: 400;
          font-size: 14px;
          color: #c3c3c3;
          @include flex(flex-start, center, row);
          .percentage {
            margin-left: 4px;
          }
        }
      }
    }
    .render {
      position: relative;
      width: 410px;
      margin-top: -10px;
      .render-list {
        position: absolute;
        top: 20px;
        left: 0;
        width: 100%;
        @include flex(space-between, center, row);
        margin-left: 16px;
        .item {
          width: 31%;
          .title {
            font-family: OPPOSans;
            font-weight: 400;
            font-size: 12px;
            @include flex(flex-start, center, row);
            font-family: OPPOSans;
            font-weight: 400;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
            .icon {
              width: 6px;
              height: 6px;
              margin-right: 6px;
            }
          }
          .value {
            font-family: DIN;
            font-weight: 500;
            font-size: 18px;
            color: #ffffff;
            padding-left: 10px;
            margin-top: 8px;
          }
          .bottom {
            margin-top: 8px;
            padding-left: 10px;
            font-family: OPPOSans;
            font-weight: 400;
            font-size: 14px;
            color: #c3c3c3;
            font-family: DIN;
            font-weight: 500;
            font-size: 16px;
          }
        }
      }
    }
    .chart {
      width: 190px;
      height: 190px;
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
        width: 122px;
        height: 52px;
        border-radius: 50%;
        // background: rgba(0, 0, 0, 0.5);
        background: url('@/assets/img/background/medicalOperations/cost-analysis.png') center center
          no-repeat;
        background-size: 100% 100%;
        left: 50%;
        top: 39%;
        margin: 0 auto;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>
