<!--
 * @Description: 返聘情况统计
-->

<script lang="ts" setup>
import { humanResourcesTypeStore } from '@/store/humanResources';

const humanResourcesType = humanResourcesTypeStore();
const colorList = ['#17B0FF', '#037FFF', '#2DFAD1', '#11BFFF', '#F9B14B'];

/** 本组件所需数据都在这 */
const data = computed(() => humanResourcesType.data.afterRetirement || {});
</script>

<template>
  <div class="after-retirement">
    <card-module title="返聘情况统计">
      <div class="after-retirement-content">
        <div class="box">
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box3"></div>
          <div class="box4"></div>
        </div>
        <div class="list">
          <div class="item" v-for="(item, index) in data" :key="index">
            <p class="title">
              <span class="icon" :style="{ background: colorList[index] }"></span>{{ item.title }}
            </p>
            <p class="value">
              {{ item.value }}<span class="unit">{{ item.unit }}</span>
            </p>
            <p class="ratio" :class="item.state">{{ item.ratio }}</p>
          </div>
        </div>
      </div>
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
    @include flex(center, center, row);
    height: 290px;
    .box {
      @include flex(center, center, column);
    }
    .box1 {
      width: 80px;
      height: 51px;
      background: linear-gradient(00deg, #083f65, #29b6ff);
      clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    }
    .box2 {
      width: 154px;
      height: 50px;
      background: linear-gradient(00deg, #083f65, #006fe1);
      clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
    }
    .box3 {
      width: 170px;
      height: 50px;
      background: linear-gradient(00deg, #106e5b, #30f1ca);
      clip-path: polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%);
    }
    .box4 {
      width: 170px;
      height: 50px;
      background: linear-gradient(00deg, #0c455b, #29c5ff);
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
    .list {
      margin-top: 20px;
      margin-left: -10px;
      .item {
        background: url('@/assets/img/background/humanResources/after-retirement.png') center center
          no-repeat;
        background-size: 100% 100%;
        width: 228px;
        height: 32px;
        @include flex(flex-start, center, row);
        margin-bottom: 20px;
        .title {
          width: 92px;
          @include flex(flex-end, center, row);
          font-family: OPPOSans;
          font-weight: 400;
          font-size: 14px;
          color: #ffffff;
          .icon {
            width: 6px;
            height: 6px;
            margin-right: 6px;
          }
        }
        .value {
          font-family: DIN;
          font-weight: 500;
          font-size: 16px;
          color: #ffffff;
          width: 70px;
          text-align: right;
          @include flex(flex-end, center, row);
          .unit {
            font-size: 12px;
            padding-left: 2px;
            opacity: 0.8;
          }
        }
        .ratio {
          width: 50px;
          text-align: right;
          &.down {
            color: #36ff8b;
          }
        }
      }
    }
  }
}
</style>
