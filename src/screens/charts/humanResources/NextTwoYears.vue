<!--
 * @Description: 未来两年退休人员数
-->

<script lang="ts" setup>
import { humanResourcesTypeStore } from '@/store/humanResources';

const humanResourcesType = humanResourcesTypeStore();

/** 本组件所需数据都在这 */
const data = computed(() => humanResourcesType.data.nextTwoYears || {});
</script>

<template>
  <div class="next-two-years">
    <card-module title="返聘情况统计">
      <div class="next-two-years-content">开发内容</div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.next-two-years {
  height: 300px;
  width: 410px;
  pointer-events: all;
  margin-top: 35px;
  .next-two-years-content {
  }
}
</style>
