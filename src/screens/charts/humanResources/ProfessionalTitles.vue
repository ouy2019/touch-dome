<!--
 * @Description: 职称分布
-->

<script lang="ts" setup>
import { humanResourcesTypeStore } from '@/store/humanResources';
import { hexToRgba } from '@/utils/common';
import { LineSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';

const humanResourcesType = humanResourcesTypeStore();

/** 本组件所需数据都在这 */
const data = computed(() => humanResourcesType.data.professionalTitles || {});

const colorList = ['#4BAFF9', '#F9DA4B', '#4BF3F9', '#A3D8FF', '#F9B14B'];

const yAxisData = computed(() => data.value?.line || []);
const xAxisData = computed(() => data.value?.xData || []);

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
      show: false,
      // icon: 'rect',
      top: 2,
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
      bottom: '5%',
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
  <div class="professional-titles">
    <card-module title="职称分布">
      <div class="professional-titles-content">
        <div class="list">
          <div class="item" v-for="(item, index) in data.titles" :key="index">
            <p class="title">
              <span class="icon" :style="{ background: colorList[index] }"></span>{{ item.title }}
            </p>
            <p class="value">{{ item?.value }}</p>
          </div>
        </div>
        <p class="sub-title">{{ data?.title }}</p>
        <base-chart class="chart" :option="eChartsOption" />
      </div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.professional-titles {
  height: 339px;
  width: 410px;
  pointer-events: all;
  margin-top: 35px;
  .professional-titles-content {
    .list {
      @include flex(center, center, row);
      margin: 17px 0;
      margin-right: -30px;
      .item {
        width: 19%;
      }
      .title {
        @include flex(flex-start, center, row);
        font-family: OPPOSans;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
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
        padding-top: 4px;
      }
    }
    .sub-title {
      border-left: 3px solid #3d9eff;
      font-family: Source Han Sans SC;
      font-weight: 400;
      font-size: 14px;
      color: #e2f1ff;
      padding-left: 9px;
    }
    .chart {
      width: 100%;
      height: 180px;
      margin-top: 12px;
    }
  }
}
</style>
