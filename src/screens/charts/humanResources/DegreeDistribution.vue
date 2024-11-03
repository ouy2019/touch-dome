<!--
 * @Description: 学位分布
-->

<script lang="ts" setup>
import { humanResourcesTypeStore } from '@/store/humanResources';

const humanResourcesType = humanResourcesTypeStore();

/** 本组件所需数据都在这 */
const data = computed(() => humanResourcesType.data.degreeDistribution || {});
</script>

<template>
  <div class="degree-distribution">
    <card-module title="学位分布">
      <div class="degree-distribution-content">开发内容</div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.degree-distribution {
  height: 345px;
  width: 410px;
  pointer-events: all;
  margin-top: 35px;
  .degree-distribution-content {
  }
}
</style>
