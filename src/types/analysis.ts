export type TrendType = 'Bullish' | 'Neutral' | 'Bearish'
export type InterpretationType = 'Short builtup' | 'Short Covering' | 'Long buildup' | 'Long Unwinding'

export interface OptionAnalysisData {
  Symbol: string
  Expiry: string
  Strike: string
  OptionType: 'CE' | 'PE'
  ClosePrice: string
  OIChange: string
  OI: string
  Trend: TrendType
  Interpretation: InterpretationType
}

export interface CombinedOptionAnalysisData {
  id: number
  Symbol: string
  Strike: string
  Expiry: string
  CE: Options
  PE: Options
}

interface Options {
  OptionType: string
  ClosePrice: string
  OI: string
  OIChange: string
  Interpretation: string
  Trend: string
}
