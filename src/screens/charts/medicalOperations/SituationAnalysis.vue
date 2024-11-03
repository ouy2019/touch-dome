<!--
 * @Description: 患者情况分析(HIS)
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.situationAnalysis || {});

const tabList = ref(window?.config?.tab?.tab1);
const select = ref('day');
</script>

<template>
  <div class="situation-analysis">
    <card-module title="患者情况分析(HIS)">
      <template #right>
        <tab-toggle class="tab-toggle-com" v-model:select="select" :dataList="tabList" />
      </template>
      <div class="situation-analysis-content">开发内容</div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.situation-analysis {
  height: 360px;
  width: 410px;
  pointer-events: all;
  margin-top: 35px;
  .situation-analysis-content {
  }
}
</style>
