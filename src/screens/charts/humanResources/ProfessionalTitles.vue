<!--
 * @Description: 职称分布
-->

<script lang="ts" setup>
import { humanResourcesTypeStore } from '@/store/humanResources';

const humanResourcesType = humanResourcesTypeStore();

/** 本组件所需数据都在这 */
const data = computed(() => humanResourcesType.data.professionalTitles || {});
</script>

<template>
  <div class="professional-titles">
    <card-module title="职称分布">
      <div class="professional-titles-content">开发内容</div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.professional-titles {
  height: 339px;
  width: 410px;
  pointer-events: all;
  margin-top: 35px;
  .professional-titles-content {
  }
}
</style>
