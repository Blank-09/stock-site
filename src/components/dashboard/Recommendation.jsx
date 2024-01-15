// MUI
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { DataGrid } from '@mui/x-data-grid'

import { useEffect, useState } from 'react'
import axios from 'axios'

const columns = [
  { field: 'id', headerName: '#', width: 70, sortable: false },
  { field: 'Script', headerName: 'Script', width: 150, sortable: false },
  { field: 'Recommanded Date', headerName: 'Recommanded Date', width: 150, sortable: false },
  { field: 'Price', headerName: 'Price', width: 150, sortable: false },
  {
    field: 'LTP',
    headerName: 'LTP',
    width: 150,
    sortable: false,
  },
  {
    field: 'Buy/Sell',
    headerName: 'Buy/Sell',
    width: 150,
    sortable: false,
  },
  {
    field: 'Change',
    headerName: 'Change',
    width: 200,
    sortable: false,
    renderCell: (params) => {
      const ltp = parseFloat(params.row.LTP)
      const price = parseFloat(params.row.Price)
      const difference = ltp - price
      const percentageChange = ((difference / price) * 100).toFixed(2)

      return (
        <div>
          <div style={{ color: difference >= 0 ? 'green' : 'red' }}>
            {difference.toFixed(2)} ({percentageChange}%)
          </div>
        </div>
      )
    },
  },
  { field: 'StopLoss', headerName: 'StopLoss', width: 150, sortable: false },
  { field: 'Status', headerName: 'Status', width: 150, sortable: false },
  { field: 'Comment', headerName: 'Comment', width: 150, sortable: false },

  /*
  {
    field: 'Trend',
    headerName: 'Trend',
    width: 100,
    renderCell: (params) => {
      let chipColor, Icon
      switch (params.row.Trend) {
        case 'Bullish':
          chipColor = 'success'
          Icon = ArrowUpwardIcon
          break
        case 'Neutral':
          chipColor = 'warning'
          Icon = RemoveIcon
          break
        case 'Bearish':
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
          label={params.row.Trend}
          color={chipColor}
          icon={<Icon />}
        />
      )
    },
  },*/
]

/*
  Short builtup - dark redn
  Short Covering - dark green
  Long buildup - light green
  Long unwinding - light red
*/

// const createRowData = (id) => {
//   return {
//     id: id,
//     Symbol: 'BANKNIFTY',
//     Expiry: '10-Aug-2023',
//     Strike: '38500',
//     OptionType: 'CE',
//     ClosePrice: '6160.25',
//     OI: '150',
//     OIChange: '15',
//     Interpretation: 'Short builtup',
//     Trend: ['Bullish', 'Neutral', 'Bearish'][Math.floor(Math.random() * 3)],
//   };
// };

// const rows = Array.from({ length: 100 }, (_, i) => createRowData(i + 1));

export default function Recommendation() {
  const [rows, setRows] = useState([])
  const [scriptNames, setScriptNames] = useState([])

  const [filter, setFilter] = useState({
    indices: 'Select',
    scriptName: 'Select',
  })

  const handleChange = (event) => {
    const name = event.target.name
    setFilter({
      ...filter,
      [name]: event.target.value,
    })
  }

  useEffect(() => {
    axios.get('/recommendation.json').then((res) => {
      res.data.map((row, index) => {
        row['id'] = index + 1
        return row
      })
      setRows(res.data)
    })
  }, [])

  return (
    <Box style={{ width: '100%', height: '100%', background: '#f5f5f5' }} sx={{ flexGrow: 1, p: 3 }}>
      <Box sx={{ mb: 2 }}>
        <FormControl width={10} sx={{ minWidth: 120 }}>
          <InputLabel id="indicies-label">Indicies</InputLabel>
          <Select
            labelId="indicies-label"
            id="indicies-select"
            autoWidth
            value={filter.indices}
            name="indices"
            label="Indicies"
            onChange={handleChange}
          >
            {['Select', 'NIFTY', 'FINNIFTY', 'BANKNIFTY', 'MIDCPNIFTY'].map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>

        <FormControl sx={{ ml: 2, minWidth: 120 }}>
          <InputLabel id="script-name">Script Name</InputLabel>
          <Select
            labelId="script-name"
            id="script-name-select"
            name="scriptName"
            autoWidth
            value={filter.scriptName}
            label="Script Name"
            onChange={handleChange}
          >
            {scriptNames.map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Box>

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
