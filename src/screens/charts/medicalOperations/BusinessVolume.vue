<!--
 * @Description: 门诊业务量
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.businessVolume || {});

const tabList = ref(window?.config?.tab?.tab1);
const select = ref('day');
</script>

<template>
  <div class="business-volume">
    <card-module title="门诊业务量">
      <template #right>
        <tab-toggle class="tab-toggle-com" v-model:select="select" :dataList="tabList" />
      </template>
      <div class="business-volume-content">开发内容</div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.business-volume {
  height: 274px;
  width: 410px;
  pointer-events: all;
  .business-volume-content {
  }
}
</style>
