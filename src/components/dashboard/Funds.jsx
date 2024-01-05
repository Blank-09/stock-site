// MUI
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import { DataGrid } from '@mui/x-data-grid'

// MUI Icons
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import RemoveIcon from '@mui/icons-material/Remove'

// Others
import { faker } from '@faker-js/faker'

const columns = [
  { field: 'id', headerName: '#', width: 70 },
  { field: 'time', headerName: 'Time', width: 150 },
  { field: 'call', headerName: 'Call IO', width: 150 },
  { field: 'total_change', headerName: 'Total IO Change', width: 150 },
  { field: 'strike', headerName: 'Strike', width: 150 },
  {
    field: 'trend',
    headerName: 'Trend',
    width: 100,
    renderCell: (params) => {
      let chipColor, Icon
      switch (params.row.trend) {
        case 'up':
          chipColor = 'success'
          Icon = ArrowUpwardIcon
          break
        case 'mid':
          chipColor = 'warning'
          Icon = RemoveIcon
          break
        case 'down':
          chipColor = 'error'
          Icon = ArrowDownwardIcon
          break
        default:
          chipColor = 'default'
          Icon = RemoveIcon
      }

      return (
        <Chip
          size="small"
          sx={{ borderRadius: '5px', width: '100%' }}
          label={params.row.trend.toUpperCase()}
          color={chipColor}
          icon={<Icon />}
        />
      )
    },
  },
]

const createRowData = (id) => {
  return {
    id: id,
    time: faker.date.recent().toTimeString(),
    call: faker.lorem.word(),
    total_change: faker.finance.amount(),
    strike: faker.number.int({ min: 10_000, max: 1_20_000 }),
    trend: ['up', 'mid', 'down'][Math.floor(Math.random() * 3)],
  }
}

const rows = Array.from({ length: 100 }, (_, i) => createRowData(i + 1))

export default function Funds() {
  return (
    <Box
      style={{ width: '100%', height: '100%', background: '#f5f5f5' }}
      sx={{ flexGrow: 1, p: 3 }}
    >
      <DataGrid
        sx={{ background: 'white' }}
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        // autoPageSize
      />
    </Box>
  )
}
