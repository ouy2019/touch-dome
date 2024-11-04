<template>
  <div class="btn-list">
    <div
      class="btn-item"
      :class="{ active: item.key == props.select }"
      v-for="(item, index) in props?.dataList"
      :key="index"
      @click="change(item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  dataList: any[];
  select: string;
}>();

const emit = defineEmits(['update:select']);
const change = (item) => {
  emit('update:select', item.key);
};
</script>

<style lang="scss" scoped>
.btn-list {
  @include flex(flex-start, center, row);
  .btn-item {
    padding: 5px 14px;
    text-align: center;
    background: url('@/assets/img/tab/tab-default.png') center center no-repeat;
    background-size: 100% 100%;
    margin-left: 6px;
    cursor: pointer;
    pointer-events: all;
    color: #6a9bbf;
    font-size: 12px;
    font-family: OPPOSans;
    font-weight: 400;
    font-size: 14px;
    &.active {
      background: url('@/assets/img/tab/tab-select.png') center center no-repeat;
      background-size: 100% 100%;
      color: #fff;
    }
  }
}
</style>
