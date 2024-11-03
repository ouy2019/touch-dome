<!--
 * @Description: 收入分析(HIS)
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.revenueAnalysis || {});

const tabList = ref(window?.config?.tab?.tab1);
const select = ref('day');
</script>

<template>
  <div class="revenue-analysis">
    <card-module title="收入分析(HIS)">
      <template #right>
        <tab-toggle class="tab-toggle-com" v-model:select="select" :dataList="tabList" />
      </template>
      <div class="revenue-analysis-content">开发内容</div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.revenue-analysis {
  height: 304px;
  width: 410px;
  pointer-events: all;
  .revenue-analysis-content {
  }
}
</style>
