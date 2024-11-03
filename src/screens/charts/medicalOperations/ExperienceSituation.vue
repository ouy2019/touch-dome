<!--
 * @Description: 体检情况分析
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.experienceSituation || {});
</script>

<template>
  <div class="experience-situation">
    <card-module title="体检情况分析">
      <div class="experience-situation-content">开发内容</div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.experience-situation {
  height: 265px;
  margin-top: 35px;
  width: 410px;
  pointer-events: all;
  .experience-situation-content {
  }
}
</style>
