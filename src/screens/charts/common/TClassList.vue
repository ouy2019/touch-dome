<!--
 * @Version: 1.0
 * @Autor: yls
 * @Date: 2023-02-28 13:59:34
 * @LastEditors: jiangzhikun
 * @LastEditTime: 2023-03-03 09:20:39
-->
<template>
  <div class="class-list">
    <div class="vertical-nav">
      <button class="prev" @click="scrollToPrevious"></button>
      <button class="next" @click="scrollToNext"></button>
      <div ref="navContainer" class="nav-container">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="['nav-item', { selected: store.department === item.id }]"
          @click="selectItem(item.id)"
          :title="item.name"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store';
// import InitMenuTwins from "@/utils/twins/initTwins";
import router from '@/routers';
import { bussinessActive, lightFloors } from '@/utils/thingjsx';

const store = useAppStore();
const list = window?.config.classType;

const current = computed(() => {
  return list?.find((item) => item.VisualizationId === store.level?.current?.id);
});

const items = computed(() => {
  console.log(current?.value, store?.level, '可是--------');
  return current?.value?.children?.map((item) => {
    return {
      name: item.descrip,
      id: item.VisualizationId,
    };
  });
});

const navContainer = ref<HTMLElement | null>(null);

const selectItem = (index: string) => {
  if (store.department == index) {
    index = '';
  }
  lightFloors(index);
  store.department = index;
};

const getPx = () => {
  return navContainer.value?.children?.[0].clientHeight || 0;
};

const scrollToPrevious = () => {
  if (navContainer.value) {
    navContainer.value.scrollTop -= getPx() + 20; // 每次滚动 50px
  }
};

const scrollToNext = () => {
  getPx();
  if (navContainer.value) {
    navContainer.value.scrollTop += getPx() + 20; // 每次滚动 50px
  }
};

onUnmounted(() => {
  store.department = '';
});
</script>

<style scoped lang="scss">
.class-list {
  position: absolute;
  top: 8vh;
  right: 40vh;
  // transform: translateX(-50%);
  pointer-events: all;
  z-index: 1;
  @include flex(center, center, row);
  height: 472px;
  .vertical-nav {
    width: 140px;
    padding: 10px;
    padding-bottom: 10px;
    overflow-y: hidden;
    height: 100%;
    &::after {
      right: 16px;
      top: -14px;
      position: absolute;
      content: '';
      width: 4px;
      height: 472px;
      background: url('@/assets/img/background/medicalOperations/p-bg.png') center center no-repeat;
      background-size: 100% 100%;
    }
  }

  .prev,
  .next {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 31px;
    height: 31px;
    border: none;
    cursor: pointer;
  }
  .prev {
    top: -22px;
    background: url('@/assets/img/background/medicalOperations/p-prev.png') center center no-repeat;
    background-size: 100% 100%;
  }
  .next {
    bottom: 4px;
    background: url('@/assets/img/background/medicalOperations/p-next.png') center center no-repeat;
    background-size: 100% 100%;
  }

  .nav-container {
    max-height: 94%;
    overflow-y: auto;
    padding: 5px;
    :nth-last-child(1) {
      margin-bottom: 0;
    }
    &::-webkit-scrollbar-track-piece {
      background: rgba(14, 46, 48, 1);
      // background: red;
    }

    &::-webkit-scrollbar {
      width: 0px;
      height: 0;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.6);
      border-radius: 10px;
    }
  }

  .nav-item {
    width: 109px;
    height: 36px;
    line-height: 32px;
    padding-left: 16px;
    cursor: pointer;
    background: url('@/assets/img/background/medicalOperations/p-item-default.png') center center
      no-repeat;
    background-size: 100% 100%;
    margin-bottom: 19px;
    @include text-overflow;
    padding-right: 0px;
    text-align: center;
  }

  .nav-item.selected {
    background: url('@/assets/img/background/medicalOperations/p-item-select.png') center center
      no-repeat;
    background-size: 100% 100%;
  }
}
</style>
