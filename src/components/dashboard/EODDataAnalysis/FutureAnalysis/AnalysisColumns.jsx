// Components
import AnalysisChip from '../../../ui/AnalysisChip'

// Others
import { getPutInterpretation, getPutTrend } from '../../../../utils/analysis'

const scriptWidth = 220
const closePriceWidth = 210
const interpretationWidth = 220
const oiWidth = 200
const oiChangeWidth = 200

export const AnalysisColumns = [
  {
    field: 'Script',
    headerName: 'Script',
    width: scriptWidth,
  },
  {
    field: 'ClosePrice',
    headerName: 'Close Price',
    width: closePriceWidth,
  },
  {
    field: 'OI',
    headerName: 'OI',
    width: oiWidth,
  },
  {
    field: 'OIChange',
    headerName: 'OI Change',
    width: oiChangeWidth,
  },
  {
    field: 'Interpretation',
    headerName: 'Interpretation',
    width: interpretationWidth,
    renderCell: (params) => {
      const value = params.value
      const { Icon, chipColor } = getPutInterpretation(value)

      return <AnalysisChip label={value} color={chipColor} icon={<Icon />} />
    },
  },
  {
    field: 'Trend',
    headerName: 'Trend',
    width: scriptWidth,
    renderCell: (params) => {
      const value = params.value
      const { Icon, chipColor } = getPutTrend(value)

      return <AnalysisChip label={value} color={chipColor} icon={<Icon />} />
    },
  },
].map((col, index) => ({
  // Adds extra attribute in each column
  ...col,
  headerAlign: 'center',
  align: 'center',
  sortable: false,
  // applying border to cell except first column
  cellClassName: index && 'borderCell',
}))
