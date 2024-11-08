<!--
 * @Description: 人力资源
-->
<template>
  <div class="human-resources">
    <side-bar>
      <template #left>
        <employee-types />
        <professional-titles />
        <degree-distribution />
      </template>

      <template #bottom> </template>

      <template #right>
        <age-distribution />
        <after-retirement />
        <next-two-years />
      </template>
    </side-bar>
  </div>
</template>

<script lang="ts">
import { toRef } from 'vue';
import { useAppStore } from '@/store';
import { autoRequest } from '@/request/autoRequest';
import { humanResourcesTypeStore } from '../store/humanResources';
import { HumanResources } from '@/request/humanResources';

export default {
  name: 'HumanResources',
  screenConfig: {
    width: 1920,
    height: 1080,
    layout: 'expand',
    title: '人力资源',
  },
  setup() {
    const store = useAppStore();
    store.routerSetMenu();
    const humanResourcesType = humanResourcesTypeStore();

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
      autoRequest<HumanResources>(
        {
          url: '/humanResources',
          data: {
            ssdp: 'echarts',
            building: getBuilding.value,
            classId: store.department,
          },
        },
        (res) => {
          console.log(res, '人力资源主题数据');
          humanResourcesType.setData(res);
        },
        () => null,
        'humanResources'
      );
      // return {
      //   activeMenu,
      //   useThingStore,
      // };
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
  },
};
</script>

<style scoped lang="scss">
.human-resources {
  width: 100vw;
  height: 100vh;
  color: #fff;
  position: relative;
  z-index: 1;
}
</style>
