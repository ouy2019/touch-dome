<!--
 * @Description: 职工种类分布
-->

<script lang="ts" setup>
import { humanResourcesTypeStore } from '@/store/humanResources';

const humanResourcesType = humanResourcesTypeStore();

/** 本组件所需数据都在这 */
const data = computed(() => humanResourcesType.data.employeeTypes || {});
</script>

<template>
  <div class="employee-types">
    <card-module title="职工种类分布">
      <div class="employee-types-content">开发内容</div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.employee-types {
  height: 232px;
  width: 410px;
  pointer-events: all;
  .employee-types-content {
  }
}
</style>
