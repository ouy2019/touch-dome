<!--
 * @Description: 门诊业务量
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';
import { hexToRgba } from '@/utils/common';
import { LineSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';
import { formatNumberWithCommas } from '../../../utils/tool';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.businessVolume || {});

const tabList = ref(window?.config?.tab?.tab1);
const select = ref('day');

const currentData = computed(() => data.value[select.value]);

const colorList = ['#4BAFF9', '#F9DA4B', '#4BF3F9', '#A3D8FF', '#F9B14B'];

const yAxisData = computed(() => currentData.value?.line || []);
const xAxisData = computed(() => currentData.value?.xData || []);

const eChartsOption = computed(() => {
  const series: LineSeriesOption[] = yAxisData.value.map((item, idx) => {
    return {
      name: `${item.title}`,
      type: 'line',
      showSymbol: false,
      smooth: true,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: hexToRgba(colorList[idx], 0.4),
            },
            {
              offset: 1,
              color: hexToRgba(colorList[idx], 0),
            },
          ],
          global: false,
        },
      },

      label: {
        show: false,
      },
      itemStyle: {
        color: colorList[idx],
        borderWidth: 1,
      },
      data: item.yData,
    };
  });

  const eChartsOption: ComposeOption<LineSeriesOption> = {
    tooltip: {
      showContent: true,
      trigger: 'axis',
      backgroundColor: 'rgba(15, 25, 39, 0.8)',
      borderColor: 'rgba(145, 161, 180, 0.8)',
      textStyle: {
        color: '#fff',
      },
    },
    legend: {
      show: true,
      // icon: 'rect',
      bottom: 0,
      // right: computeToRealSize(70),
      itemGap: 45,
      itemWidth: 12,
      itemHeight: 4,
      textStyle: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'OPPOSans',
        fontWeight: 400,
        padding: [0, 0, 0, 0],
      },
    },
    grid: {
      top: '5%',
      left: '1%',
      right: '0.5%',
      bottom: '18%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: xAxisData.value,
      // min: -0.5,
      // max: 3.5,
      axisLabel: {
        fontSize: 12,
        padding: [0, 0, 0, 0],
        fontFamily: 'DINPro',
        color: '#7B9DBE',
      },
      axisTick: { show: true },
      axisLine: { show: false },
    },
    yAxis: {
      type: 'value',
      name: '',
      // nameGap: 30,
      // interval: 5,
      axisLabel: {
        padding: [0, 0, 0, 0],
        fontSize: 12,
        fontFamily: 'DINPro',
        color: '#7B9DBE',
      },
      splitLine: {
        lineStyle: {
          width: 1,
          color: 'rgba(123, 157, 190, 0.3)',
        },
      },
    },

    series,
  };
  return eChartsOption;
});
</script>

<template>
  <div class="business-volume">
    <card-module title="门诊业务量">
      <template #right>
        <tab-toggle class="tab-toggle-com" v-model:select="select" :dataList="tabList" />
      </template>
      <div class="business-volume-content">
        <div class="list">
          <div class="item" v-for="(item, index) in currentData?.titles" :key="index">
            <p class="title">{{ item.title }}</p>
            <div class="bottom">
              <p class="value">{{ formatNumberWithCommas(item.value) }}{{ item.unit }}</p>
              <p class="percentage">
                <rate-number-new :state="item.state" :value="item.ratio" :reversal="true" />
              </p>
            </div>
          </div>
        </div>
        <base-chart class="chart" :option="eChartsOption" />
      </div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.business-volume {
  height: 274px;
  width: 410px;
  pointer-events: all;
  .business-volume-content {
    .list {
      @include flex(space-around, center, row);
      flex-wrap: wrap;
      padding: 10px 0 0 0;
      .item {
        width: 30%;
        margin-bottom: 20px;
        .title {
          font-family: OPPOSans;
          font-weight: 400;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }
        .bottom {
          @include flex(flex-start, center, row);
          padding-top: 7px;
          .value {
            font-family: DIN;
            font-weight: 500;
            font-size: 14px;
            color: #ffffff;
          }
          .percentage {
            margin-left: 13px;
          }
        }
      }
    }
    .chart {
      width: 100%;
      height: 200px;
      margin-top: -4px;
    }
  }
}
</style>
