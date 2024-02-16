export type TrendType = 'Bullish' | 'Neutral' | 'Bearish'
export type InterpretationType = 'Short builtup' | 'Short Covering' | 'Long buildup' | 'Long Unwinding'
export type OptionType = 'CE' | 'PE'

export interface OptionAnalysis {
  CETrend: TrendType
  CEInterpretation: InterpretationType
  CEOIChange: string
  CEOI: string
  CEClosePrice: string
  CEOptionType: OptionType
  Strike: string
  PEOptionType: OptionType
  PEClosePrice: string
  PEOI: string
  PEOIChange: string
  PEInterpretation: InterpretationType
  PETrend: TrendType
  ExpiryDate: string
}

export interface Recommendations {
  Ids: number
  Script: string
  Date: string
  Price: string
  Status: string
  Duration: string
  Target: string
  StopLoss: string
  Comment: string
}
