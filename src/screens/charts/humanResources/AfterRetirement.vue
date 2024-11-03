<!--
 * @Description: 返聘情况统计
-->

<script lang="ts" setup>
import { humanResourcesTypeStore } from '@/store/humanResources';

const humanResourcesType = humanResourcesTypeStore();

/** 本组件所需数据都在这 */
const data = computed(() => humanResourcesType.data.afterRetirement || {});
</script>

<template>
  <div class="after-retirement">
    <card-module title="返聘情况统计">
      <div class="after-retirement-content">开发内容</div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.after-retirement {
  height: 308px;
  width: 410px;
  pointer-events: all;
  margin-top: 35px;
  .after-retirement-content {
  }
}
</style>
