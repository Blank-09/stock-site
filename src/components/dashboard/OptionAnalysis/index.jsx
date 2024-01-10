import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// Components
import AnalysisTable from './AnalysisTable'
import AnalysisChip from '../../ui/AnalysisChip'

// Others
import axios from 'axios'
import { scriptNames } from '../../../constants/option-analysis'
import {
  combineRows,
  getInterpretation,
  getTrend,
} from '../../../utils/analysis'

let columns = [
  {
    field: 'Trend',
    headerName: 'Trend',
    width: 100,
    renderCell: (params) => {
      const value = params.row.CE?.Trend
      const { Icon, chipColor } = getTrend(value)

      return <AnalysisChip label={value} color={chipColor} icon={<Icon />} />
    },
  },
  {
    field: 'Interpretation',
    headerName: 'Interpretation',
    width: 150,
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
    width: 70,
  },
  {
    field: 'OIChange',
    headerName: 'OI Change',
    valueGetter: (params) => params.row.CE?.OIChange,
    width: 100,
  },
  {
    field: 'ClosePrice',
    headerName: 'Close Price',
    valueGetter: (params) => params.row.CE?.ClosePrice,
    width: 125,
  },
  {
    field: 'Strike',
    headerName: 'Strike',
    width: 150,
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
    width: 125,
  },
  {
    field: 'OIChange2',
    headerName: 'OI Change',
    valueGetter: (params) => params.row.PE?.OIChange,
    width: 100,
  },
  {
    field: 'OI2',
    headerName: 'OI',
    valueGetter: (params) => params.row.PE?.OI,
    width: 100,
  },
  {
    field: 'Interpretation2',
    headerName: 'Interpretation',
    width: 150,
    renderCell: (params) => {
      const value = params.row.PE?.Interpretation
      const { Icon, chipColor } = getInterpretation(value)

      return <AnalysisChip label={value} color={chipColor} icon={<Icon />} />
    },
  },
  {
    field: 'Trend2',
    headerName: 'Trend',
    width: 100,
    renderCell: (params) => {
      const value = params.row.PE?.Trend
      const { Icon, chipColor } = getTrend(value)

      return <AnalysisChip label={value} color={chipColor} icon={<Icon />} />
    },
  },
]

columns = columns.map((col, index) => ({
  ...col,
  headerAlign: 'center',
  align: 'center',
  sortable: false,
  // applying border to cell except first column
  cellClassName: index && 'borderCell',
}))

export default function OptionAnalysis() {
  const [rows, setRows] = useState([])
  const [expiryDates, setExpiryDates] = useState(['Select'])
  const [searchParams, setSearchParams] = useSearchParams()

  const navigator = useNavigate()

  // Used useMemo to avoid re-rendering of the table
  const data = useMemo(() => {
    if (searchParams.size === 0) {
      return rows
    }

    // Filtering rows based on search params
    return rows.filter((row) => {
      if (searchParams.get('indices')) {
        return row.Symbol === searchParams.get('indices')
      } else if (searchParams.get('scriptName')) {
        return row.Symbol === searchParams.get('scriptName')
      } else if (searchParams.get('expiryDate')) {
        return row.Expiry === searchParams.get('expiryDate')
      }

      return row
    })
  }, [rows, searchParams])

  console.log(data)

  const handleChange = (event) => {
    setSearchParams({
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    axios.get('/option-analysis.json').then((res) => {
      const combinedRows = combineRows(res.data)

      const set = new Set()
      combinedRows.forEach((row) => {
        set.add(row.Expiry)
      })

      const expiryDates = [...set].sort((a, b) => new Date(a) - new Date(b))

      setExpiryDates(expiryDates)
      setRows(combinedRows)
    })

    if (
      window.location.pathname === '/dashboard/option-analysis' &&
      window.location.search === ''
    ) {
      navigator('/dashboard/option-analysis?indices=NIFTY')
    }
  }, [])

  return (
    <Container
      maxWidth="xl"
      style={{ width: '100%', height: '100%' }}
      sx={{ flexGrow: 1, p: 3, maxWidth: '1320px!important' }}
    >
      <Box sx={{ mb: 2, display: 'flex' }}>
        <FormControl width={10} sx={{ minWidth: 120 }}>
          <InputLabel id="indicies-label">Indicies</InputLabel>
          <Select
            labelId="indicies-label"
            id="indicies-select"
            autoWidth
            value={searchParams.get('indices') || 'Select'}
            name="indices"
            label="Indicies"
            onChange={handleChange}
          >
            {['Select', 'NIFTY', 'FINNIFTY', 'BANKNIFTY', 'MIDCPNIFTY'].map(
              (item, index) => {
                return (
                  <MenuItem selected={index === 0} key={index} value={item}>
                    {item}
                  </MenuItem>
                )
              }
            )}
          </Select>
        </FormControl>

        <Typography component="span" sx={{ ml: 2, my: 'auto' }}>
          OR
        </Typography>

        <FormControl sx={{ ml: 2, minWidth: 120 }}>
          <InputLabel id="script-name">Script Name</InputLabel>
          <Select
            labelId="script-name"
            id="script-name-select"
            name="scriptName"
            autoWidth
            value={searchParams.get('scriptName') || 'Select'}
            label="Script Name"
            onChange={handleChange}
          >
            {scriptNames.map((item, index) => {
              return (
                <MenuItem
                  selected={index === 0}
                  disabled={index === 0}
                  key={index}
                  value={item}
                >
                  {item}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>

        <FormControl sx={{ ml: 2, minWidth: 120 }}>
          <InputLabel id="expiry-date">Expiry Date</InputLabel>
          <Select
            labelId="expiry-date"
            id="expiry-date-select"
            name="expiryDate"
            autoWidth
            value={searchParams.get('expiryDate') || expiryDates[0] || 'Select'}
            label="Expiry Date"
            onChange={handleChange}
          >
            {expiryDates.map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '5px',
          bgcolor: 'background.paper',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            p: '1rem 1.5rem',
          }}
        >
          <Typography variant="h6" sx={{ my: 'auto' }}>
            Call
          </Typography>
          <Typography variant="h6" sx={{ my: 'auto' }}>
            Put
          </Typography>
        </Box>
        <DataGrid
          sx={{ height: '100%' }}
          rows={data}
          rowHeight={25}
          columns={columns}
          pageSizeOptions={[25]}
          initialState={{
            pagination: { paginationModel: { pageSize: 25 } },
          }}
          // autoPageSize
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <AnalysisTable label="Call" data={data} />
      </Box>
    </Container>
  )
}
