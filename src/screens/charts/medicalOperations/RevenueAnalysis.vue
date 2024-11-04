<!--
 * @Description: 收入分析(HIS)
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';
import { formatNumberWithCommas } from '@/utils/tool';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.revenueAnalysis || {});
const colorList = ['#4BAFF9', '#F9DA4B', '#4BF3F9', '#A3D8FF', '#F9B14B'];

const tabList = ref(window?.config?.tab?.tab1);
const select = ref('day');

const currentData = computed(() => data.value[select.value]);
</script>

<template>
  <div class="revenue-analysis">
    <card-module title="收入分析(HIS)">
      <template #right>
        <tab-toggle class="tab-toggle-com" v-model:select="select" :dataList="tabList" />
      </template>
      <div class="revenue-analysis-content">
        <div class="titles">
          <div class="item" v-for="(item, index) in currentData?.titles" :key="index">
            <p class="title">
              <span class="icon" :style="{ backgroundColor: colorList[index] }"></span>
              {{ item.title }}
            </p>
            <p class="value">{{ formatNumberWithCommas(item.value) }}{{ item.unit }}</p>
            <div class="bottom">
              同比
              <p class="percentage">
                <rate-number-new :state="item.state" :value="item.ratio" :reversal="true" />
              </p>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="item" v-for="(item, index) in currentData?.list" :key="index">
            <div class="top">
              <p class="title">{{ item.title }}</p>
              <div class="right">
                <p class="value">{{ formatNumberWithCommas(item.value) }}{{ item.unit }}</p>
                /
                <p class="ratio">{{ item.ratio }}</p>
              </div>
            </div>
            <div class="process">
              <div class="process-box" :style="{ width: item.process + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.revenue-analysis {
  height: 304px;
  width: 410px;
  pointer-events: all;
  .revenue-analysis-content {
    .titles {
      margin: 10px -20px 0 10px;
      @include flex(space-around, center, row);
      .item {
        width: 30%;
        .title {
          font-family: OPPOSans;
          font-weight: 400;
          font-size: 12px;
          color: #ffffff;
          @include flex(flex-start, center, row);
          .icon {
            width: 6px;
            height: 6px;
            margin-right: 6px;
          }
        }
        .value {
          font-family: DIN;
          font-weight: 500;
          font-size: 18px;
          color: #ffffff;
          padding-left: 10px;
          margin-top: 4px;
        }
        .bottom {
          margin-top: 4px;
          padding-left: 10px;
          font-family: OPPOSans;
          font-weight: 400;
          font-size: 14px;
          color: #c3c3c3;
          @include flex(flex-start, center, row);
          .percentage {
            margin-left: 4px;
          }
        }
      }
    }
    .list {
      padding: 0 6px;
      height: 210px;
      overflow: auto;
      &::-webkit-scrollbar-track-piece {
        background: rgba(14, 46, 48, 1);
        // background: red;
      }

      &::-webkit-scrollbar {
        width: 4px;
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
            .ratio {
              margin-left: 8px;
            }
          }
        }
        .process {
          width: 396px;
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
  }
}
</style>
