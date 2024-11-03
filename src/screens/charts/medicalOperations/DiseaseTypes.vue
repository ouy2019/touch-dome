<!--
 * @Description: 年度病种数量排行(HIS)
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.diseaseTypes || {});
</script>

<template>
  <div class="disease-types">
    <card-module title="年度病种数量排行(HIS)">
      <div class="disease-types-content">开发内容</div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.disease-types {
  height: 342px;
  margin-top: 35px;
  width: 410px;
  pointer-events: all;
  .disease-types-content {
  }
}
</style>
