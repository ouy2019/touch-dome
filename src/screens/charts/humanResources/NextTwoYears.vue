<!--
 * @Description: 未来两年退休人员数
-->

<script lang="ts" setup>
import { humanResourcesTypeStore } from '@/store/humanResources';
import { hexToRgba } from '@/utils/common';
import { LineSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';

const humanResourcesType = humanResourcesTypeStore();

/** 本组件所需数据都在这 */
const data = computed(() => humanResourcesType.data.nextTwoYears || {});
const colorList = ['#10F1FF', '#F9DA4B', '#4BF3F9', '#A3D8FF', '#F9B14B'];

const xAxisData = computed(() => data.value?.xData || []);

const eChartsOption = computed(() => {
  const series: LineSeriesOption[] = [data.value]?.map?.((item, idx) => {
    return {
      name: `${item.title}`,
      type: 'line',
      showSymbol: true,
      smooth: true,
      symbol: 'circle',
      symbolSize: 10,
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
        show: true,
        fontSize: 12,
        color: '#fff',
      },
      itemStyle: {
        color: colorList[idx],
        borderWidth: 1,
        borderColor: '#fff', // 设置标记符号的边框颜色
        borderWidth: 2, // 设置标记符号的边框宽度
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
      top: '10%',
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
  <div class="next-two-years">
    <card-module title="未来两年退休人员数">
      <div class="next-two-years-content">
        <base-chart class="chart" :option="eChartsOption" />
      </div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.next-two-years {
  height: 300px;
  width: 410px;
  pointer-events: all;
  margin-top: 35px;
  .next-two-years-content {
    .chart {
      width: 100%;
      height: 230px;
      margin-top: 14px;
    }
  }
}
</style>
