// MUI
import Typography from '@mui/material/Typography'

const strikeWidth = 150
const typeWidth = 120
const ltpWidth = 150
const oiWidth = 175
const oiChangeWidth = 175
const oiValueWidth = 175
const oiChangeValueWidth = 175
const rangeWidth = 150

export const AnalysisColumns = [
  {
    field: 'Strike',
    headerName: 'Strike',
    width: strikeWidth,

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
    field: 'Type',
    headerName: 'Type',
    width: typeWidth,
  },
  {
    field: 'LTP',
    headerName: 'LTP',
    width: ltpWidth,
  },
  {
    field: 'Open-Interest',
    headerName: 'Open-Interest',
    width: oiWidth,
  },
  {
    field: 'OI-Change',
    headerName: 'OI Change',
    width: oiChangeWidth,
  },
  {
    field: 'OI-Value',
    headerName: 'OI Value',
    width: oiValueWidth,
  },
  {
    field: 'OI-Change-Value',
    headerName: 'OI Change Value',
    width: oiChangeValueWidth,
  },
  {
    field: 'Range',
    headerName: 'Range',
    width: rangeWidth,
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
