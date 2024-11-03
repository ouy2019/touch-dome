/**
 * @author: xiexiangquan
 * @Date: 2023-04-21 15:00:54
 * 医疗运营主题数据状态管理
 */
import { defineStore } from 'pinia';
import { MedicalOperations } from '@/request/medicalOperations';
export interface MedicalOperationsType {
  data: MedicalOperations;
}

interface MedicalOperationsGetters {
  [propName: string]: any;
}

interface MedicalOperationsAction {
  /** 保存数据及处理数据 */
  setData: (data: any) => void;
}

/** 视频巡检功能 */
export const medicalOperationsStore = defineStore<
  string,
  MedicalOperationsType,
  MedicalOperationsGetters,
  MedicalOperationsAction
>('MedicalOperationsStore', {
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
      console.log(data, '医疗运营图表接口数据');
    },
  },
});
