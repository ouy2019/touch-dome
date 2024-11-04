<!--
 * @Description: 数字增加或减少
 * @Author: xiaojun.xiong
 * @Date: 2023-08-28 10:59:11
 * @LastEditTime: 2023-08-28 10:59:11
-->

<script lang="ts" setup>
defineProps<{
  value: number;
  state: string;
  reversal: boolean;
}>();
</script>

<template>
  <div
    class="totals-rate-wrap"
    :class="{
      'totals-rate-decrease': state == 'down',
      'totals-rate-increase': state == 'up',
      'totals-rate': !['down', 'up']?.includes(state),
      reversal: reversal,
    }"
  >
    <p class="totals-rate">
      <span v-num-rolling="`${value}`?.replace('-', '')?.replace('%', '')"></span>%
    </p>
    <div class="totals-rate-icon" v-if="value != 0"></div>
  </div>
</template>

<style lang="scss" scoped>
.totals-rate {
  font-size: 14px;
  font-family: DINPro-Regular;
  font-weight: 400;
}

.totals-rate-icon {
  width: 9px;
  height: 12px;
  margin-left: 6px;
  margin-top: 2px;
}

// 增加
.totals-rate-wrap {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: -2px;

  &.totals-rate-increase {
    .totals-rate {
      color: #ff5f5f;
    }
    .totals-rate-icon {
      background-image: url('@/assets/img/home/up-icon.png');
      background-size: cover;
    }
    &.reversal {
      .totals-rate-icon {
        width: 10px;
        height: 13px;
        background-image: url('@/assets/img/home/reduce-icon.png');
        background-size: 100%;
        background-size: 100%;
      }
    }
  }

  &.totals-rate-decrease {
    .totals-rate {
      color: #5fff94;
    }

    .totals-rate-icon {
      background-image: url('@/assets/img/home/down-icon.png');
      background-size: cover;
    }
    &.reversal {
      .totals-rate-icon {
        width: 10px;
        height: 13px;
        background-image: url('@/assets/img/home/increase-icon.png');
        background-size: 100%;
        background-size: 100%;
      }
    }
  }
  &.totals-rate {
    .totals-rate {
      color: #ccc;
    }
  }
}
</style>
