/** 医疗运营数据 */

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
            situationAnalysis: {
              day: {
                titles: [
                  {
                    title: '入院人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '出院人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '在院人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '住院平均住院日',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '床位使用率',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '入院与出院诊断符合率',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                ],
                line: [
                  {
                    title: '入院人次',
                    yData: [123, 456, 789, 123, 456],
                  },
                  {
                    title: '出院人次',
                    yData: [233, 566, 899, 233, 566],
                  },
                  {
                    title: '在院人次',
                    yData: [343, 676, 919, 343, 676],
                  },
                ],
                xData: ['2020', '2021', '2022', '2023', '2024'],
              },
              yesterday: {
                titles: [
                  {
                    title: '入院人次',
                    value: 13456,
                    unit: '万',
                    ratio: '1.30%',
                    state: 'down',
                  },
                  {
                    title: '出院人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '在院人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '住院平均住院日',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '床位使用率',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '入院与出院诊断符合率',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                ],
                line: [
                  {
                    title: '入院人次',
                    yData: [123, 456, 789, 123, 456],
                  },
                  {
                    title: '出院人次',
                    yData: [133, 466, 799, 133, 466],
                  },
                  {
                    title: '在院人次',
                    yData: [143, 476, 819, 143, 476],
                  },
                ],
                xData: ['2020', '2021', '2022', '2023', '2024'],
              },
              year: {
                titles: [
                  {
                    title: '入院人次',
                    value: 13456,
                    unit: '万',
                    ratio: '2.30%',
                    state: 'down',
                  },
                  {
                    title: '出院人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '在院人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '住院平均住院日',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '床位使用率',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '入院与出院诊断符合率',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                ],
                line: [
                  {
                    title: '入院人次',
                    yData: [123, 456, 789, 123, 456],
                  },
                  {
                    title: '出院人次',
                    yData: [133, 466, 799, 133, 466],
                  },
                  {
                    title: '在院人次',
                    yData: [143, 476, 819, 143, 476],
                  },
                ],
                xData: ['2020', '2021', '2022', '2023', '2024'],
              },
            },
            businessVolume: {
              day: {
                titles: [
                  {
                    title: '专家人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '普通门诊人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                ],
                line: [
                  {
                    title: '门诊',
                    yData: [123, 456, 789, 123, 456],
                  },
                  {
                    title: '急诊',
                    yData: [133, 466, 799, 133, 466],
                  },
                ],
                xData: ['2020', '2021', '2022', '2023', '2024'],
              },
              yesterday: {
                titles: [
                  {
                    title: '专家人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '普通门诊人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                ],
                line: [
                  {
                    title: '门诊',
                    yData: [123, 456, 789, 123, 456],
                  },
                  {
                    title: '急诊',
                    yData: [233, 566, 899, 233, 566],
                  },
                ],
                xData: ['2020', '2021', '2022', '2023', '2024'],
              },
              year: {
                titles: [
                  {
                    title: '专家人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '普通门诊人次',
                    value: 13456,
                    unit: '万',
                    ratio: '0.30%',
                    state: 'down',
                  },
                ],
                line: [
                  {
                    title: '门诊',
                    yData: [123, 456, 789, 123, 456],
                  },
                  {
                    title: '急诊',
                    yData: [133, 466, 799, 133, 466],
                  },
                ],
                xData: ['2020', '2021', '2022', '2023', '2024'],
              },
            },
            diseaseTypes: {
              list: [
                {
                  title: '住院',
                  children: [
                    {
                      title: '心脏病',
                      value: 45,
                      process: 80,
                    },
                    {
                      title: '糖尿病',
                      value: 30,
                      process: 60,
                    },
                    {
                      title: '高血压',
                      value: 20,
                      process: 50,
                    },
                    {
                      title: '胃病',
                      value: 16,
                      process: 40,
                    },
                    {
                      title: '妇科病',
                      value: 15,
                      process: 30,
                    },
                  ],
                },
                {
                  title: '门诊',
                  children: [
                    {
                      title: '心脏病',
                      value: 45,
                      process: 80,
                    },
                    {
                      title: '糖尿病',
                      value: 30,
                      process: 60,
                    },
                    {
                      title: '高血压',
                      value: 20,
                      process: 50,
                    },
                    {
                      title: '胃病',
                      value: 16,
                      process: 40,
                    },
                    {
                      title: '妇科病',
                      value: 15,
                      process: 30,
                    },
                  ],
                },
                {
                  title: '急诊',
                  children: [
                    {
                      title: '心脏病',
                      value: 45,
                      process: 80,
                    },
                    {
                      title: '糖尿病',
                      value: 30,
                      process: 60,
                    },
                    {
                      title: '高血压',
                      value: 20,
                      process: 50,
                    },
                    {
                      title: '胃病',
                      value: 16,
                      process: 40,
                    },
                    {
                      title: '妇科病',
                      value: 15,
                      process: 30,
                    },
                  ],
                },
              ],
              more: {
                title: '病种数量排行',
                children: [
                  {
                    title: '心脏病',
                    value: 45,
                    process: 80,
                  },
                  {
                    title: '糖尿病',
                    value: 30,
                    process: 60,
                  },
                  {
                    title: '高血压',
                    value: 20,
                    process: 50,
                  },
                  {
                    title: '胃病',
                    value: 16,
                    process: 40,
                  },
                  {
                    title: '妇科病',
                    value: 15,
                    process: 30,
                  },
                  {
                    title: '糖尿病',
                    value: 30,
                    process: 60,
                  },
                  {
                    title: '高血压',
                    value: 20,
                    process: 50,
                  },
                  {
                    title: '胃病',
                    value: 16,
                    process: 40,
                  },
                ],
              },
            },
            undergoingSurgery: [
              {
                title: '住院',
                total: 80,
                subTitle: '总数',
                children: [
                  {
                    title: '四级手术人次',
                    value: 3,
                    unit: '次',
                    ratio: '30%',
                  },
                  {
                    title: '三级手术人次',
                    value: 15,
                    unit: '次',
                    ratio: '30%',
                  },
                  {
                    title: '二级手术人次',
                    value: 30,
                    unit: '次',
                    ratio: '30%',
                  },
                  {
                    title: '一级手术人次',
                    value: 40,
                    unit: '次',
                    ratio: '30%',
                  },
                ],
              },
              {
                title: '门诊',
                total: 81,
                subTitle: '总数',
                children: [
                  {
                    title: '四级手术人次',
                    value: 4,
                    unit: '次',
                    ratio: '30%',
                  },
                  {
                    title: '三级手术人次',
                    value: 15,
                    unit: '次',
                    ratio: '30%',
                  },
                  {
                    title: '二级手术人次',
                    value: 30,
                    unit: '次',
                    ratio: '30%',
                  },
                  {
                    title: '一级手术人次',
                    value: 40,
                    unit: '次',
                    ratio: '30%',
                  },
                ],
              },
            ],
            experienceSituation: {
              day: {
                titles: [
                  {
                    title: '体验预约人数',
                    value: 298,
                    unit: '人',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '到检人数',
                    value: 126,
                    unit: '人',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '未完成人数',
                    value: 56,
                    unit: '人',
                    ratio: '0.30%',
                    state: 'down',
                  },
                ],
                line: [
                  {
                    title: '到检人数',
                    yData: [123, 456, 789, 123, 456],
                  },
                  {
                    title: '预约人数',
                    yData: [133, 466, 799, 133, 466],
                  },
                  {
                    title: '完成人数',
                    yData: [143, 476, 819, 143, 476],
                  },
                ],
                xData: ['2020', '2021', '2022', '2023', '2024'],
              },
              yesterday: {
                titles: [
                  {
                    title: '体验预约人数',
                    value: 298,
                    unit: '人',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '到检人数',
                    value: 126,
                    unit: '人',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '未完成人数',
                    value: 56,
                    unit: '人',
                    ratio: '0.30%',
                    state: 'down',
                  },
                ],
                line: [
                  {
                    title: '到检人数',
                    yData: [123, 456, 789, 123, 456],
                  },
                  {
                    title: '预约人数',
                    yData: [133, 466, 799, 133, 466],
                  },
                  {
                    title: '完成人数',
                    yData: [143, 476, 819, 143, 476],
                  },
                ],
                xData: ['2020', '2021', '2022', '2023', '2024'],
              },
              year: {
                titles: [
                  {
                    title: '体验预约人数',
                    value: 298,
                    unit: '人',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '到检人数',
                    value: 126,
                    unit: '人',
                    ratio: '0.30%',
                    state: 'down',
                  },
                  {
                    title: '未完成人数',
                    value: 56,
                    unit: '人',
                    ratio: '0.30%',
                    state: 'down',
                  },
                ],
                line: [
                  {
                    title: '到检人数',
                    yData: [123, 456, 789, 123, 456],
                  },
                  {
                    title: '预约人数',
                    yData: [133, 466, 799, 133, 466],
                  },
                  {
                    title: '完成人数',
                    yData: [143, 476, 819, 143, 476],
                  },
                ],
                xData: ['2020', '2021', '2022', '2023', '2024'],
              },
            },
          };
        }
      },
    },
  };
})(this);
