/**
 * 医疗运营
 */
export interface MedicalOperations {
  /**
   * 门诊业务量
   */
  businessVolume: BusinessVolume;
  /**
   * 成本情况分析
   */
  costAnalysis: CostAnalysis;
  /**
   * 年度病种数量排行
   */
  diseaseTypes: DiseaseTypes;
  /**
   * 体检情况分析
   */
  experienceSituation: ExperienceSituation;
  /**
   * 收入分析
   */
  revenueAnalysis: RevenueAnalysis;
  /**
   * 患者情况分析
   */
  situationAnalysis: SituationAnalysis;
  /**
   * 患者手术占比
   */
  undergoingSurgery: UndergoingSurgery[];
  [property: string]: any;
}

/**
 * 门诊业务量
 */
export interface BusinessVolume {
  /**
   * 今日
   */
  day: BusinessVolumeDay;
  /**
   * 年度
   */
  year: BusinessVolumeYear;
  /**
   * 昨日
   */
  yesterday: BusinessVolumeYesterday;
  [property: string]: any;
}

/**
 * 今日
 */
export interface BusinessVolumeDay {
  /**
   * 折线图数据
   */
  line: PurpleLine[];
  /**
   * 标题列表
   */
  titles: PurpleTitle[];
  /**
   * x轴的标题
   */
  xData: string[];
  [property: string]: any;
}

export interface PurpleLine {
  /**
   * 标题
   */
  title: string;
  /**
   * 数值
   */
  yData: number[];
  [property: string]: any;
}

export interface PurpleTitle {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 年度
 */
export interface BusinessVolumeYear {
  /**
   * 折线图数据
   */
  line: FluffyLine[];
  /**
   * 标题列表
   */
  titles: FluffyTitle[];
  /**
   * x轴的标题
   */
  xData: string[];
  [property: string]: any;
}

export interface FluffyLine {
  /**
   * 标题
   */
  title: string;
  /**
   * 数值
   */
  yData: number[];
  [property: string]: any;
}

export interface FluffyTitle {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 昨日
 */
export interface BusinessVolumeYesterday {
  /**
   * 折线图数据
   */
  line: TentacledLine[];
  /**
   * 标题列表
   */
  titles: TentacledTitle[];
  /**
   * x轴的标题
   */
  xData: string[];
  [property: string]: any;
}

export interface TentacledLine {
  /**
   * 标题
   */
  title: string;
  /**
   * 数值
   */
  yData: number[];
  [property: string]: any;
}

export interface TentacledTitle {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 成本情况分析
 */
export interface CostAnalysis {
  /**
   * 今日
   */
  day: CostAnalysisDay;
  /**
   * 年度
   */
  year: CostAnalysisYear;
  /**
   * 昨日
   */
  yesterday: CostAnalysisYesterday;
  [property: string]: any;
}

/**
 * 今日
 */
export interface CostAnalysisDay {
  /**
   * 列表数据
   */
  list: PurpleList[];
  /**
   * 标题列表
   */
  titles: StickyTitle[];
  [property: string]: any;
}

export interface PurpleList {
  /**
   * 占比
   */
  ratio: number;
  /**
   * 占比单位
   */
  ratioUnit: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 单位
   */
  unit: string;
  /**
   * 数值
   */
  value: number;
  [property: string]: any;
}

export interface StickyTitle {
  /**
   * 同比
   */
  ratio: string;
  /**
   * 同比标题
   */
  ratioTitle: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 年度
 */
export interface CostAnalysisYear {
  /**
   * 列表数据
   */
  list: FluffyList[];
  /**
   * 标题列表
   */
  titles: IndigoTitle[];
  [property: string]: any;
}

export interface FluffyList {
  /**
   * 占比
   */
  ratio: number;
  /**
   * 占比单位
   */
  ratioUnit: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 单位
   */
  unit: string;
  /**
   * 数值
   */
  value: number;
  [property: string]: any;
}

export interface IndigoTitle {
  /**
   * 同比
   */
  ratio: string;
  /**
   * 同比标题
   */
  ratioTitle: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 昨日
 */
export interface CostAnalysisYesterday {
  /**
   * 列表数据
   */
  list: TentacledList[];
  /**
   * 标题列表
   */
  titles: IndecentTitle[];
  [property: string]: any;
}

export interface TentacledList {
  /**
   * 占比
   */
  ratio: number;
  /**
   * 占比单位
   */
  ratioUnit: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 单位
   */
  unit: string;
  /**
   * 数值
   */
  value: number;
  [property: string]: any;
}

export interface IndecentTitle {
  /**
   * 同比
   */
  ratio: string;
  /**
   * 同比标题
   */
  ratioTitle: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 年度病种数量排行
 */
export interface DiseaseTypes {
  /**
   * 列表
   */
  list: DiseaseTypesList[];
  /**
   * 更多
   */
  more: More;
  [property: string]: any;
}

export interface DiseaseTypesList {
  /**
   * 明细
   */
  children: ListChild[];
  /**
   * 标题
   */
  title: string;
  [property: string]: any;
}

export interface ListChild {
  /**
   * 进度
   */
  process: number;
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

/**
 * 更多
 */
export interface More {
  /**
   * 明细
   */
  children: MoreChild[];
  /**
   * 标题
   */
  title: string;
  [property: string]: any;
}

export interface MoreChild {
  /**
   * 进度
   */
  process: number;
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

/**
 * 体检情况分析
 */
export interface ExperienceSituation {
  /**
   * 今日
   */
  day: ExperienceSituationDay;
  /**
   * 年度
   */
  year: ExperienceSituationYear;
  /**
   * 昨日
   */
  yesterday: ExperienceSituationYesterday;
  [property: string]: any;
}

/**
 * 今日
 */
export interface ExperienceSituationDay {
  /**
   * 折线图数据
   */
  line: StickyLine[];
  /**
   * 标题
   */
  titles: HilariousTitle[];
  /**
   * x轴标题
   */
  xData: string[];
  [property: string]: any;
}

export interface StickyLine {
  /**
   * 标题
   */
  title: string;
  /**
   * 数值
   */
  yData: number[];
  [property: string]: any;
}

export interface HilariousTitle {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 年度
 */
export interface ExperienceSituationYear {
  /**
   * 折线图数据
   */
  line: IndigoLine[];
  /**
   * 标题
   */
  titles: AmbitiousTitle[];
  /**
   * x轴标题
   */
  xData: string[];
  [property: string]: any;
}

export interface IndigoLine {
  /**
   * 标题
   */
  title: string;
  /**
   * 数值
   */
  yData: number[];
  [property: string]: any;
}

export interface AmbitiousTitle {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 昨日
 */
export interface ExperienceSituationYesterday {
  /**
   * 折线图数据
   */
  line: IndecentLine[];
  /**
   * 标题
   */
  titles: CunningTitle[];
  /**
   * x轴标题
   */
  xData: string[];
  [property: string]: any;
}

export interface IndecentLine {
  /**
   * 标题
   */
  title: string;
  /**
   * 数值
   */
  yData: number[];
  [property: string]: any;
}

export interface CunningTitle {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 收入分析
 */
export interface RevenueAnalysis {
  /**
   * 今日
   */
  day: RevenueAnalysisDay;
  /**
   * 年度
   */
  year: RevenueAnalysisYear;
  /**
   * 昨日
   */
  yesterday: RevenueAnalysisYesterday;
  [property: string]: any;
}

/**
 * 今日
 */
export interface RevenueAnalysisDay {
  /**
   * 排行列表
   */
  list: StickyList[];
  /**
   * 标题列表
   */
  titles: MagentaTitle[];
  [property: string]: any;
}

export interface StickyList {
  /**
   * 进度
   */
  process: number;
  /**
   * 占比
   */
  ratio: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 单位
   */
  unit: string;
  /**
   * 数值
   */
  value: number;
  [property: string]: any;
}

export interface MagentaTitle {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 占比标题
   */
  ratioTitle: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 年度
 */
export interface RevenueAnalysisYear {
  /**
   * 排行列表
   */
  list: IndigoList[];
  /**
   * 标题列表
   */
  titles: FriskyTitle[];
  [property: string]: any;
}

export interface IndigoList {
  /**
   * 进度
   */
  process: number;
  /**
   * 占比
   */
  ratio: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 单位
   */
  unit: string;
  /**
   * 数值
   */
  value: number;
  [property: string]: any;
}

export interface FriskyTitle {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 占比标题
   */
  ratioTitle: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 昨日
 */
export interface RevenueAnalysisYesterday {
  /**
   * 排行列表
   */
  list: IndecentList[];
  /**
   * 标题列表
   */
  titles: MischievousTitle[];
  [property: string]: any;
}

export interface IndecentList {
  /**
   * 进度
   */
  process: number;
  /**
   * 占比
   */
  ratio: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 单位
   */
  unit: string;
  /**
   * 数值
   */
  value: number;
  [property: string]: any;
}

export interface MischievousTitle {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 占比标题
   */
  ratioTitle: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 患者情况分析
 */
export interface SituationAnalysis {
  /**
   * 今日
   */
  day: SituationAnalysisDay;
  /**
   * 年度
   */
  year: SituationAnalysisYear;
  /**
   * 昨日
   */
  yesterday: SituationAnalysisYesterday;
  [property: string]: any;
}

/**
 * 今日
 */
export interface SituationAnalysisDay {
  /**
   * 折线图数据
   */
  line: HilariousLine[];
  /**
   * 标题列表
   */
  titles: BraggadociousTitle[];
  /**
   * x轴标题
   */
  xData: string[];
  [property: string]: any;
}

export interface HilariousLine {
  /**
   * 标题
   */
  title: string;
  /**
   * 数值列表
   */
  yData: number[];
  [property: string]: any;
}

export interface BraggadociousTitle {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 年度
 */
export interface SituationAnalysisYear {
  /**
   * 折线图数据
   */
  line: AmbitiousLine[];
  /**
   * 标题列表
   */
  titles: Title1[];
  /**
   * x轴标题
   */
  xData: string[];
  [property: string]: any;
}

export interface AmbitiousLine {
  /**
   * 标题
   */
  title: string;
  /**
   * 数值列表
   */
  yData: number[];
  [property: string]: any;
}

export interface Title1 {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

/**
 * 昨日
 */
export interface SituationAnalysisYesterday {
  /**
   * 折线图数据
   */
  line: CunningLine[];
  /**
   * 标题列表
   */
  titles: Title2[];
  /**
   * x轴标题
   */
  xData: string[];
  [property: string]: any;
}

export interface CunningLine {
  /**
   * 标题
   */
  title: string;
  /**
   * 数值列表
   */
  yData: number[];
  [property: string]: any;
}

export interface Title2 {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 状态down、up
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
   * 数值
   */
  value: number;
  [property: string]: any;
}

export interface UndergoingSurgery {
  /**
   * 明细
   */
  children: UndergoingSurgeryChild[];
  /**
   * 子标题
   */
  subTitle: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 总数
   */
  total: number;
  [property: string]: any;
}

export interface UndergoingSurgeryChild {
  /**
   * 占比
   */
  ratio: string;
  /**
   * 标题
   */
  title: string;
  /**
   * 单位
   */
  unit: string;
  /**
   * 数值
   */
  value: number;
  [property: string]: any;
}
