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
        <undergoing-surgery v-if="['Building', 'Floor', 'Room']?.includes(store.level?.level)" />
        <experience-situation v-else />
      </template>
    </side-bar>
  </div>
</template>

<script lang="ts">
import { toRef, watch } from 'vue';
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

    const getBuilding = computed(() => {
      let building = '';
      if (store?.level?.level == 'Building') {
        building = store?.level?.current?.id;
      }
      if (store?.level?.parent?.type == 'Building') {
        building = store?.level?.parent?.id;
      }
      return building;
    });
    let timer: any;

    const handle = () => {
      timer?.request?.destroy && timer?.request?.destroy();
      timer = autoRequest<OverviewHospital[]>(
        {
          url: '/medicalOperations',
          data: {
            ssdp: 'echarts',
            building: getBuilding.value,
            classId: store.department,
          },
        },
        (res) => {
          console.log(res, '医疗运营主题数据');
          medicalOperations.setData(res);
        },
        () => null,
        'medicalOperations'
      );
    };
    handle();

    watch(getBuilding, () => {
      if (store?.level?.level == 'Building') {
        handle();
      }
    });

    watch(
      () => store.department,
      () => {
        handle();
      }
    );

    return {
      store,
    };
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
