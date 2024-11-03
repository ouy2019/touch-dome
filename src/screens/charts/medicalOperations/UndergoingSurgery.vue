<!--
 * @Description: 患者手术占比
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.undergoingSurgery || {});
</script>

<template>
  <div class="undergoing-surgery">
    <card-module title="患者手术占比">
      <div class="undergoing-surgery-content">开发内容</div>
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
  }
}
</style>
