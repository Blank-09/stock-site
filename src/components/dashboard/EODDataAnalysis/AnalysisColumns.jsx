// MUI
import Typography from '@mui/material/Typography'

// Components
import AnalysisChip from '../../ui/AnalysisChip'

// Others
import { getCallInterpretation, getCallTrend, getPutInterpretation, getPutTrend } from '../../../utils/analysis'

const trendWidth = 100
const interpretationWidth = 150
const oiWidth = 80
const oiChangeWidth = 100
const closePriceWidth = 130
const strikeWidth = 150

export const AnalysisColumns = [
  {
    field: 'CETrend',
    headerName: 'Trend',
    width: trendWidth,
    renderCell: (params) => {
      const value = params.value
      const { Icon, chipColor } = getCallTrend(value)

      return <AnalysisChip label={value} color={chipColor} icon={<Icon />} />
    },
  },

  {
    field: 'CEInterpretation',
    headerName: 'Interpretation',
    width: interpretationWidth,
    renderCell: (params) => {
      const value = params.value
      const { Icon, chipColor } = getCallInterpretation(value)

      return <AnalysisChip label={value} color={chipColor} icon={<Icon />} />
    },
  },

  {
    field: 'CEOI',
    headerName: 'OI',
    width: oiWidth,
  },
  {
    field: 'CEOIChange',
    headerName: 'OI Change',
    width: oiChangeWidth,
  },
  {
    field: 'CEClosePrice',
    headerName: 'Close Price',
    width: closePriceWidth,
  },
  {
    field: 'Strike',
    headerName: 'Strike',
    width: strikeWidth,
    headerAlign: 'center',

    renderCell: (params) => {
      return (
        <Typography
          variant="body2"
          color="primary"
          height="100%"
          fontWeight="bold"
          sx={{ display: 'grid', placeItems: 'center' }}
        >
          {params.value}
        </Typography>
      )
    },
  },
  {
    field: 'PEClosePrice',
    headerName: 'Close Price',
    width: closePriceWidth,
  },
  {
    field: 'PEOIChange',
    headerName: 'OI Change',
    width: oiChangeWidth,
  },
  {
    field: 'PEOI',
    headerName: 'OI',
    width: oiWidth,
  },
  {
    field: 'PEInterpretation',
    headerName: 'Interpretation',
    width: interpretationWidth,
    renderCell: (params) => {
      const value = params.value
      const { Icon, chipColor } = getPutInterpretation(value)

      return <AnalysisChip label={value} color={chipColor} icon={<Icon />} />
    },
  },
  {
    field: 'PETrend',
    headerName: 'Trend',
    width: trendWidth,
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
