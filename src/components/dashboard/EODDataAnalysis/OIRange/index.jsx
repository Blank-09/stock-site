import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'

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
import { AnalysisColumns } from './AnalysisColumns'

// Others
import { indices, scriptNames } from '../../../../constants/option-analysis'

export default function OptionAnalysis() {
  const loaderData = useLoaderData()

  const [rows, setRows] = useState([])
  const [expiryDates, setExpiryDates] = useState(['Select'])
  const [searchParams, setSearchParams] = useSearchParams()

  function handleSearchParamChange(key, value) {
    setSearchParams((prev) => {
      let newParams = new URLSearchParams(prev)
      newParams.set(key, value)
      return newParams
    })
  }

  // Used useMemo to avoid re-rendering of the table
  const data = useMemo(() => {
    if (searchParams.size === 0) {
      return rows
    }

    // Filtering rows based on search params
    const filteredRows = rows.filter((row) => {
      let res = true

      if (searchParams.get('indices')) {
        res = res && row.Symbol === searchParams.get('indices')
      } else if (searchParams.get('scriptName')) {
        res = res && row.Symbol === searchParams.get('scriptName')
      }

      return res
    })

    const set = new Set()
    filteredRows.forEach((row) => set.add(row.Expiry))

    const expiryDates = ['Select', ...set].sort((a, b) => new Date(a) - new Date(b))
    setExpiryDates(expiryDates)

    return filteredRows.filter((row) => {
      let res = true

      if (searchParams.get('expiryDate')) {
        res = res && row.Expiry === searchParams.get('expiryDate')
      }

      return res
    })
  }, [rows, searchParams])

  // Updates expiry date when indices or script name is changed
  useEffect(() => {
    if (expiryDates.length > 1) {
      handleSearchParamChange('expiryDate', expiryDates[1])
    }
  }, [expiryDates])

  const handleChange = (event) => {
    const { name, value } = event.target

    // Logic to output either indices or script name
    setSearchParams((prev) => {
      let newParams = new URLSearchParams(prev)

      if (name === 'indices' || name === 'scriptName') {
        newParams.delete('indices')
        newParams.delete('scriptName')

        // Since expiry date is dependent on indices or script name
        newParams.set('expiryDate', 'Select') // expiryDates[0]
      }

      // If nothing is selected
      if (!prev.get('indices') && !prev.get('scriptName')) {
        newParams.set('indices', 'NIFTY')
      }

      // Finally, update search params (from input - handleChange)
      newParams.set(name, value)

      return newParams
    })
  }

  useEffect(() => {
    axios.get(loaderData.url).then((res) => {
      setRows(res.data.map((row, i) => ({ ...row, id: i })))

      // Setting default search params (if not provided)
      if (!searchParams.get('indices') && !searchParams.get('scriptName')) {
        setSearchParams({ indices: 'NIFTY' })
      }
    })
  }, [])

  return (
    <Container
      maxWidth="xl"
      style={{ width: '100%', height: '100%' }}
      sx={{ flexGrow: 1, p: 3, maxWidth: '1320px!important' }}
    >
      <Box sx={{ display: 'flex' }}>
        <FormControl width={10} sx={{ minWidth: 120 }}>
          <InputLabel id="indicies-label">Indicies</InputLabel>
          <Select
            autoWidth
            labelId="indicies-label"
            id="indicies-select"
            value={searchParams.get('indices') || 'Select'}
            name="indices"
            label="Indicies"
            onChange={handleChange}
          >
            {indices.map((item, index) => {
              return (
                <MenuItem disabled={index === 0} selected={index === 0} key={index} value={item}>
                  {item}
                </MenuItem>
              )
            })}
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
                <MenuItem selected={index === 0} disabled={index === 0} key={index} value={item}>
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
            value={searchParams.get('expiryDate') || 'Select'}
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
          mt: 2,
        }}
      >
        <DataGrid
          rows={rows}
          rowHeight={25}
          columns={AnalysisColumns}
          pageSizeOptions={[25]}
          initialState={{ pagination: { paginationModel: { pageSize: 25 } } }}
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <AnalysisTable label="Call" data={data} />
      </Box>
    </Container>
  )
}
