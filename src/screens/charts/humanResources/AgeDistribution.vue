<!--
 * @Description: 年龄分布
-->

<script lang="ts" setup>
import { humanResourcesTypeStore } from '@/store/humanResources';
import { BarSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';

const humanResourcesType = humanResourcesTypeStore();

/** 本组件所需数据都在这 */
const data = computed(() => humanResourcesType.data.ageDistribution || {});

const yAxisData = computed(() => data.value?.yData);
const xAxisData = computed(() => data.value?.xData);
const maxValue = computed(() => {
  let max = Math.max(...(yAxisData.value || []));
  return max + max / 2;
});

const eChartsOption = computed(() => {
  const series: BarSeriesOption = {
    name: ``,
    type: 'bar',
    stack: 'Total',
    label: {
      show: false,
      position: 'top',
      color: '#fff',
      fontSize: 10,
    },
    z: '-2',
    barWidth: 70 / (yAxisData?.value?.length || 0),
    // barCategoryGap: '10%', // 同一系列的柱间距离
    smooth: true,
    // showBackground: true,
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 1,
            color: 'rgba(94, 79, 12, 1)',
          },
          {
            offset: 0,
            color: 'rgba(249, 218, 75, 0.9)',
          },
        ],
        global: false,
      },
    },
    data: yAxisData.value,
  };

  const eChartsOption: ComposeOption<BarSeriesOption> = {
    tooltip: {
      showContent: true,
      trigger: 'axis',
      backgroundColor: 'rgba(15, 25, 39, 0.8)',
      borderColor: 'rgba(145, 161, 180, 0.8)',
      textStyle: {
        color: '#fff',
      },
    },

    grid: {
      top: '22%',
      left: '3%',
      right: '0%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: xAxisData.value,
      axisLabel: {
        interval: 0,
        fontSize: 11,
        padding: [0, 0, 0, 0],
        fontFamily: 'DINPro-Regular',
        color: 'rgba(123, 157, 190, 1)',
      },
      axisTick: { show: false },
      axisLine: { show: false },
    },
    yAxis: {
      type: 'value',
      name: '单位: ' + data.value?.unit,
      max: maxValue.value,
      axisLabel: {
        padding: [0, 6, 0, 0],
        fontSize: 12,
        fontFamily: 'DINPro-Regular',
        color: 'rgba(123, 157, 190, 1)',
      },
      nameTextStyle: {
        padding: [0, -14, 0, 10],
        align: 'right',
        color: 'rgba(123, 157, 190, 1)',
        fontSize: 12,
        fontFamily: 'DINPro-Regular',
      },
      splitLine: {
        lineStyle: {
          width: 1,
          color: 'rgba(123, 157, 190, 0.3)',
        },
      },
    },
    series: [
      series,
      {
        type: 'bar',
        tooltip: { show: false }, // 提示框
        // stack: 'Total',
        itemStyle: {
          color: 'rgba(191, 222, 255, 0.05)', // rgba第四个参数可设置透明度
        },
        z: '-3',
        barGap: '-140%',
        // barMaxWidth: '50',
        barWidth: 124 / (yAxisData?.value?.length || 0),
        smooth: true,
        data: [
          maxValue.value,
          maxValue.value,
          maxValue.value,
          maxValue.value,
          maxValue.value,
          maxValue.value,
        ],
      },
    ],
  };
  return eChartsOption;
});
</script>

<template>
  <div class="age-distribution">
    <card-module title="年龄分布">
      <div class="age-distribution-content">
        <base-chart class="chart" :option="eChartsOption" />
      </div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.age-distribution {
  height: 287px;
  width: 410px;
  pointer-events: all;
  .age-distribution-content {
    .chart {
      width: 100%;
      height: 260px;
    }
  }
}
</style>
