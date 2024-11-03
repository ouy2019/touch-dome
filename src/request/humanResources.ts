/**
 * Request
 */
export interface HumanResources {
  /**
   * 返聘情况统计
   */
  afterRetirement: AfterRetirement[];
  /**
   * 年龄分布
   */
  ageDistribution: AgeDistribution;
  /**
   * 学位分布
   */
  degreeDistribution: DegreeDistribution;
  /**
   * 职工种类分布
   */
  employeeTypes: EmployeeTypes;
  /**
   * 未来两年退休人员数
   */
  nextTwoYears: NextTwoYears;
  /**
   * 职称分布
   */
  professionalTitles: ProfessionalTitles;
  [property: string]: any;
}

export interface AfterRetirement {
  /**
   * 比例
   */
  ratio: string;
  /**
   * 趋势（down绿色，up红色）预留
   */
  state: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 单位
   */
  unit: string;
  /**
   * 数量
   */
  value: number;
  [property: string]: any;
}

/**
 * 年龄分布
 */
export interface AgeDistribution {
  /**
   * 单位
   */
  unit: string;
  /**
   * x轴的标题
   */
  xData: string[];
  /**
   * 数值
   */
  yData: number[];
  [property: string]: any;
}

/**
 * 学位分布
 */
export interface DegreeDistribution {
  /**
   * 折线图数据
   */
  line: DegreeDistributionLine[];
  /**
   * 趋势图标题
   */
  title: string;
  /**
   * 学位列表
   */
  titles: DegreeDistributionTitle[];
  /**
   * 折线图时间
   */
  xData: string[];
  [property: string]: any;
}

export interface DegreeDistributionLine {
  /**
   * 指标标题
   */
  title?: string;
  /**
   * 数值
   */
  yData?: number[];
  [property: string]: any;
}

export interface DegreeDistributionTitle {
  /**
   * 标题
   */
  title: string;
  /**
   * 数量
   */
  value: number;
  [property: string]: any;
}

/**
 * 职工种类分布
 */
export interface EmployeeTypes {
  /**
   * 列表
   */
  list: List[];
  /**
   * 总人数
   */
  total: number;
  /**
   * 总人数标题
   */
  totalTitle: string;
  [property: string]: any;
}

export interface List {
  /**
   * 比例
   */
  ratio: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 数量
   */
  value: number;
  [property: string]: any;
}

/**
 * 未来两年退休人员数
 */
export interface NextTwoYears {
  /**
   * 标题
   */
  title: string;
  /**
   * x轴的标题
   */
  xData: string[];
  /**
   * 数值
   */
  yData: number[];
  [property: string]: any;
}

/**
 * 职称分布
 */
export interface ProfessionalTitles {
  /**
   * 折线图数据
   */
  line: ProfessionalTitlesLine[];
  /**
   * 趋势图标题
   */
  title: string;
  /**
   * 职称列表
   */
  titles: ProfessionalTitlesTitle[];
  /**
   * 折线图时间
   */
  xData: string[];
  [property: string]: any;
}

export interface ProfessionalTitlesLine {
  /**
   * 指标标题
   */
  title?: string;
  /**
   * 数值
   */
  yData?: number[];
  [property: string]: any;
}

export interface ProfessionalTitlesTitle {
  /**
   * 标题
   */
  title: string;
  /**
   * 数值
   */
  value: number;
  [property: string]: any;
}
