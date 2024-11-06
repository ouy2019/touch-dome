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
          :class="['nav-item', { selected: selectedIndex === index }]"
          @click="selectItem(index)"
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
import { bussinessActive } from '@/utils/thingjsx';

const store = useAppStore();
const items = ref([
  {
    name: '首页',
  },
  {
    name: '产品',
  },
  {
    name: '服务',
  },
  {
    name: '关于我们',
  },
  {
    name: '联系我们',
  },
  {
    name: '首页2',
  },
  {
    name: '产品2',
  },
  {
    name: '服务2',
  },
  {
    name: '关于我们2',
  },
  {
    name: '联系我们2',
  },
]);
const selectedIndex = ref(0);
const navContainer = ref<HTMLElement | null>(null);

const selectItem = (index: number) => {
  selectedIndex.value = index;
};

const scrollToPrevious = () => {
  if (navContainer.value) {
    navContainer.value.scrollTop -= 50; // 每次滚动 50px
  }
};

const scrollToNext = () => {
  if (navContainer.value) {
    navContainer.value.scrollTop += 50; // 每次滚动 50px
  }
};

onMounted(() => {});
</script>

<style scoped lang="scss">
.class-list {
  position: absolute;
  top: 80px;
  right: 19%;
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
    padding-left: 26px;
    cursor: pointer;
    background: url('@/assets/img/background/medicalOperations/p-item-default.png') center center
      no-repeat;
    background-size: 100% 100%;
    margin-bottom: 19px;
  }

  .nav-item.selected {
    background: url('@/assets/img/background/medicalOperations/p-item-select.png') center center
      no-repeat;
    background-size: 100% 100%;
  }
}
</style>
