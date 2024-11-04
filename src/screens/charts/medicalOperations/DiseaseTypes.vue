<!--
 * @Description: 年度病种数量排行(HIS)
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';
import { formatNumberWithCommas } from '../../../utils/tool';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.diseaseTypes || {});
const currentData = computed(() => data?.value?.list || {});

const colorList = ['#DD4444', '#F7A05A', '#52F29D', '#3D9EFF', '#3D9EFF'];
const line = ref([0, 10, 20, 30, 40, 50]);

const modal = ref(false);

/** tab选项卡 */
const select = ref('');
const tabList = computed(() => {
  select.value = currentData?.value?.[0]?.title;
  return currentData?.value?.map?.((item) => {
    return {
      title: item.title,
      key: item.title,
    };
  });
});

const currentDataNew = computed(() =>
  currentData?.value?.find?.((item) => item.title == select.value)
);
</script>

<template>
  <div class="disease-types">
    <card-module title="年度病种数量排行(HIS)">
      <template #right>
        <div class="more" @click="modal = true">更多&gt;</div>
      </template>
      <div class="disease-types-content">
        <tab-toggle class="tab-toggle-com" v-model:select="select" :dataList="tabList" />
        <div class="list">
          <div class="item" v-for="(item, index) in currentDataNew?.children" :key="index">
            <div class="top">
              <p class="title">{{ item.title }}</p>
              <div class="right">
                <p class="value">{{ formatNumberWithCommas(item.value) }}{{ item.unit }}</p>
              </div>
            </div>
            <div class="process">
              <div
                class="process-box"
                :style="{ width: item.process + '%', background: colorList[index] }"
              ></div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="item" :class="'item' + index" v-for="(item, index) in line" :key="index">
            <p class="title">{{ item }}</p>
          </div>
        </div>
        <div class="modal" v-if="modal">
          <div class="header">
            <p class="title">{{ data?.more?.title }}</p>
            <p class="close" @click="modal = false"></p>
          </div>
          <div class="list">
            <div class="item" v-for="(item, index) in data?.more?.children" :key="index">
              <div class="top">
                <p class="title">{{ item.title }}</p>
                <div class="right">
                  <p class="value">{{ formatNumberWithCommas(item.value) }}{{ item.unit }}</p>
                </div>
              </div>
              <div class="process">
                <div
                  class="process-box"
                  :style="{
                    width: item.process + '%',
                    background: colorList?.[index] || '#3D9EFF',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.disease-types {
  height: 342px;
  margin-top: 35px;
  width: 410px;
  pointer-events: all;
  position: relative;
  .modal {
    width: 443px;
    height: 326px;
    background: url('@/assets/img/background/medicalOperations/disease-types.png') center center
      no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: -230%;
    top: -60px;
    .header {
      @include flex(space-between, center, row);
      height: 30px;
      margin-top: 18px;
      padding: 0 38px;
      .title {
        font-family: OPPOSans;
        font-weight: 500;
        font-size: 20px;
        color: #dffdfe;
      }
      .close {
        width: 12px;
        height: 12px;
        background: url('@/assets/img/background/medicalOperations/close.png') center center
          no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
      }
    }
    .list {
      overflow: auto;
      height: 250px;
      margin-left: 30px;
      margin-top: 10px;
      padding-right: 20px;
      .item {
        width: 366px;
        margin-top: 18px !important;
      }
    }
  }
  .more {
    font-family: OPPOSans;
    font-weight: 400;
    font-size: 14px;
    color: #2b9fff;
    cursor: pointer;
  }
  .disease-types-content {
    .tab-toggle-com {
      height: 28px;
      @include flex(flex-end, center, row);
      margin-top: 12px;
      margin-right: 0;
    }
    .list {
      padding: 0 6px;
      position: absolute;
      // height: 210px;
      overflow: auto;
      &::-webkit-scrollbar-track-piece {
        background: rgba(14, 46, 48, 1);
        // background: red;
      }

      &::-webkit-scrollbar {
        width: 4px;
        height: 0;
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.6);
        border-radius: 10px;
      }
      .item {
        margin-top: 22px;
        .top {
          @include flex(space-between, center, row);
          .title {
            font-family: OPPOSans;
            font-weight: 400;
            font-size: 14px;
            color: #ffffff;
          }
          .right {
            @include flex(space-between, center, row);
            font-family: OPPOSans;
            font-weight: 500;
            font-size: 14px;
            color: #ffffff;
            .value {
              margin-right: 8px;
            }
          }
        }
        .process {
          width: 405px;
          height: 8px;
          background: rgba(218, 242, 255, 0.2);
          margin-top: 5px;
          .process-box {
            height: 100%;
            background: #3d9eff;
          }
        }
      }
    }
    .line {
      @include flex(flex-start, center, row);
      position: relative;
      margin-left: 4px;
      .item {
        height: 250px;
        margin-top: 10px;
        border-left: 1px solid rgba(140, 200, 255, 0.2);
        width: 76px;
        position: absolute;
        left: 20%;
        top: 1px;
        &.item0 {
          left: 0%;
        }
        &.item1 {
          left: 20%;
        }
        &.item2 {
          left: 40%;
        }
        &.item3 {
          left: 60%;
        }
        &.item4 {
          left: 80%;
        }
        &.item5 {
          left: 100%;
        }
        .title {
          font-family: DIN Light;
          font-weight: 400;
          font-size: 12px;
          color: #7b9dbe;
          position: absolute;
          bottom: -16px;
          left: -6px;
        }
      }
    }
  }
}
</style>
