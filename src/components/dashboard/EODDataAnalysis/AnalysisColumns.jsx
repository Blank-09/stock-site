// MUI
import Typography from '@mui/material/Typography'

// Components
import AnalysisChip from '../../ui/AnalysisChip'

// Others
import { getInterpretation, getTrend } from '../../../utils/analysis'

const trendWidth = 100
const interpretationWidth = 150
const oiWidth = 80
const oiChangeWidth = 100
const closePriceWidth = 130
const strikeWidth = 150

export const AnalysisColumns = [
  {
    field: 'Trend',
    headerName: 'Trend',
    width: trendWidth,
    renderCell: (params) => {
      const value = params.row.CE?.Trend
      const { Icon, chipColor } = getTrend(value)

      return <AnalysisChip label={value} color={chipColor} icon={<Icon />} />
    },
  },
  {
    field: 'Interpretation',
    headerName: 'Interpretation',
    width: interpretationWidth,
    renderCell: (params) => {
      const value = params.row.CE?.Interpretation
      const { Icon, chipColor } = getInterpretation(value)

      return <AnalysisChip label={value} color={chipColor} icon={<Icon />} />
    },
  },

  {
    field: 'OI',
    headerName: 'OI',
    valueGetter: (params) => params.row.CE?.OI,
    width: oiWidth,
  },
  {
    field: 'OIChange',
    headerName: 'OI Change',
    valueGetter: (params) => params.row.CE?.OIChange,
    width: oiChangeWidth,
  },
  {
    field: 'ClosePrice',
    headerName: 'Close Price',
    valueGetter: (params) => params.row.CE?.ClosePrice,
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
    field: 'ClosePrice2',
    headerName: 'Close Price',
    valueGetter: (params) => params.row.PE?.ClosePrice,
    width: closePriceWidth,
  },
  {
    field: 'OIChange2',
    headerName: 'OI Change',
    valueGetter: (params) => params.row.PE?.OIChange,
    width: oiChangeWidth,
  },
  {
    field: 'OI2',
    headerName: 'OI',
    valueGetter: (params) => params.row.PE?.OI,
    width: oiWidth,
  },
  {
    field: 'Interpretation2',
    headerName: 'Interpretation',
    width: interpretationWidth,
    renderCell: (params) => {
      const value = params.row.PE?.Interpretation
      const { Icon, chipColor } = getInterpretation(value)

      return <AnalysisChip label={value} color={chipColor} icon={<Icon />} />
    },
  },
  {
    field: 'Trend2',
    headerName: 'Trend',
    width: trendWidth,
    renderCell: (params) => {
      const value = params.row.PE?.Trend
      const { Icon, chipColor } = getTrend(value)

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
