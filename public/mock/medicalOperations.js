/** 登录模拟数据 */

(function (global) {
  global.requestMockData = {
    ...(global.requestMockData || {}),
    '/medicalOperations': {
      method: 'POST',
      staticData: true,
      time: 1000 * 10000000000,
      proxyUrl: config.requestUrl,
      request: (query) => {
        if (query.ssdp == 'echarts') {
          return {
            revenueAnalysis: {
              day: {
                titles: [
                  {
                    title: '住院收入',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                  {
                    title: '急诊收入',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'up',
                    ratioTitle: '同比',
                  },
                  {
                    title: '门诊收入',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                ],
                list: [
                  {
                    title: '检查化验',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 80,
                  },
                  {
                    title: '卫生材料',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 50,
                  },
                  {
                    title: '药品',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 55,
                  },
                  {
                    title: '医疗服务收入',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 40,
                  },
                ],
              },
              yesterday: {
                titles: [
                  {
                    title: '住院收入',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                  {
                    title: '急诊收入',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'up',
                    ratioTitle: '同比',
                  },
                  {
                    title: '门诊收入',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                ],
                list: [
                  {
                    title: '检查化验',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 80,
                  },
                  {
                    title: '卫生材料',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 50,
                  },
                  {
                    title: '药品',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 55,
                  },
                  {
                    title: '医疗服务收入',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 40,
                  },
                ],
              },
              year: {
                titles: [
                  {
                    title: '住院收入',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                  {
                    title: '急诊收入',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'up',
                    ratioTitle: '同比',
                  },
                  {
                    title: '门诊收入',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                ],
                list: [
                  {
                    title: '检查化验',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 80,
                  },
                  {
                    title: '卫生材料',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 50,
                  },
                  {
                    title: '药品',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 55,
                  },
                  {
                    title: '医疗服务收入',
                    value: 13456,
                    unit: '万',
                    ratio: '25%',
                    process: 40,
                  },
                ],
              },
            },
            costAnalysis: {
              day: {
                titles: [
                  {
                    title: '住院成本',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                  {
                    title: '急诊成本',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'up',
                    ratioTitle: '同比',
                  },
                  {
                    title: '门诊成本',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                ],
                list: [
                  {
                    title: '卫生手术占比',
                    value: 13456,
                    unit: '万',
                    ratio: 50,
                    ratioUnit: '%',
                  },
                  {
                    title: '卫生2手术占比',
                    value: 13456,
                    unit: '万',
                    ratio: 50,
                    ratioUnit: '%',
                  },
                ],
              },
              yesterday: {
                titles: [
                  {
                    title: '住院成本',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                  {
                    title: '急诊成本',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'up',
                    ratioTitle: '同比',
                  },
                  {
                    title: '门诊成本',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                ],
                list: [
                  {
                    title: '卫生手术占比',
                    value: 13456,
                    unit: '万',
                    ratio: 50,
                    ratioUnit: '%',
                  },
                  {
                    title: '卫生2手术占比',
                    value: 13456,
                    unit: '万',
                    ratio: 50,
                    ratioUnit: '%',
                  },
                ],
              },
              year: {
                titles: [
                  {
                    title: '住院成本',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                  {
                    title: '急诊成本',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'up',
                    ratioTitle: '同比',
                  },
                  {
                    title: '门诊成本',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                    ratioTitle: '同比',
                  },
                ],
                list: [
                  {
                    title: '卫生手术占比',
                    value: 13456,
                    unit: '万',
                    ratio: 50,
                    ratioUnit: '%',
                  },
                  {
                    title: '卫生2手术占比',
                    value: 13456,
                    unit: '万',
                    ratio: 50,
                    ratioUnit: '%',
                  },
                ],
              },
            },
            situationAnalysis: {},
            businessVolume: {},
            diseaseTypes: {},
            undergoingSurgery: {},
          };
        }
      },
    },
  };
})(this);
