<!--
 * @Description: 医疗运营
-->
<template>
  <div class="medical-operations">
    <side-bar>
      <template #left>
        <revenue-analysis />
        <cost-analysis />
        <situation-analysis />
      </template>

      <template #bottom> </template>

      <template #right>
        <business-volume />
        <disease-types />
        <undergoing-surgery />
        <!-- <experience-situation /> -->
      </template>
    </side-bar>
  </div>
</template>

<script lang="ts">
import { toRef } from 'vue';
import { useAppStore } from '@/store';
import { overviewHospitalStore } from '@/store/overviewHospital';
import { autoRequest } from '@/request/autoRequest';
import { OverviewHospital } from '@/request/overviewHospital';
import { medicalOperationsStore } from '../store/medicalOperations';

export default {
  name: 'MedicalOperations',
  screenConfig: {
    width: 1920,
    height: 1080,
    layout: 'expand',
    title: '医疗运营',
  },
  setup() {
    const store = useAppStore();
    store.routerSetMenu();
    const medicalOperations = medicalOperationsStore();
    autoRequest<OverviewHospital[]>(
      {
        url: '/medicalOperations',
        data: {
          ssdp: 'echarts',
        },
      },
      (res) => {
        console.log(res, '医疗运营主题数据');
        medicalOperations.setData(res);
      },
      () => null,
      'overviewHospital'
    );
    // return {
    //   activeMenu,
    //   useThingStore,
    // };
  },
};
</script>

<style scoped lang="scss">
.medical-operations {
  width: 100vw;
  height: 100vh;
  color: #fff;
  position: relative;
  z-index: 1;
}
</style>
