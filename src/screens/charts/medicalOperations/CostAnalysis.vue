<!--
 * @Description: 成本情况分析(HIS)
-->

<script lang="ts" setup>
import { medicalOperationsStore } from '@/store/medicalOperations';
import { formatNumberWithCommas } from '../../../utils/tool';

const medicalOperations = medicalOperationsStore();

/** 本组件所需数据都在这 */
const data = computed(() => medicalOperations.data.costAnalysis || {});
const colorList = ['#4BAFF9', '#F9DA4B', '#4BF3F9', '#A3D8FF', '#F9B14B'];

const tabList = ref(window?.config?.tab?.tab1);
const select = ref('day');

const currentData = computed(() => data.value[select.value]);
</script>

<template>
  <div class="cost-analysis">
    <card-module title="成本情况分析(HIS)">
      <template #right>
        <tab-toggle class="tab-toggle-com" v-model:select="select" :dataList="tabList" />
      </template>
      <div class="cost-analysis-content">
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
      </div>
    </card-module>
  </div>
</template>

<style lang="scss" scoped>
.cost-analysis {
  height: 230px;
  width: 410px;
  pointer-events: all;
  margin-top: 35px;
  .cost-analysis-content {
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
  }
}
</style>
