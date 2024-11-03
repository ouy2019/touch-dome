<!--
 * @Description: 年龄分布
-->

<script lang="ts" setup>
import { humanResourcesTypeStore } from '@/store/humanResources';

const humanResourcesType = humanResourcesTypeStore();

/** 本组件所需数据都在这 */
const data = computed(() => humanResourcesType.data.ageDistribution || {});
</script>

<template>
  <div class="age-distribution">
    <card-module title="年龄分布">
      <div class="age-distribution-content">开发内容</div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.age-distribution {
  height: 287px;
  width: 410px;
  pointer-events: all;
  .age-distribution-content {
  }
}
</style>
