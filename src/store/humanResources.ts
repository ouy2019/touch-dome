/**
 * @author: xiexiangquan
 * @Date: 2023-04-21 15:00:54
 * 人力资源主题数据状态管理
 */
import { defineStore } from 'pinia';
import { HumanResources } from '@/request/humanResources';
export interface HumanResourcesType {
  data: HumanResources;
}

interface HumanResourcesTypeGetters {
  [propName: string]: any;
}

interface HumanResourcesTypeAction {
  /** 保存数据及处理数据 */
  setData: (data: any) => void;
}

/** 视频巡检功能 */
export const humanResourcesTypeStore = defineStore<
  string,
  HumanResourcesType,
  HumanResourcesTypeGetters,
  HumanResourcesTypeAction
>('HumanResourcesTypeStore', {
  state: () => ({
    data: {},
  }),
  getters: {},
  actions: {
    setData(data) {
      this.data = {
        ...this.data,
        ...data,
      };
      console.log(data, '人力资源图表接口数据');
    },
  },
});
