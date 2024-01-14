import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useMemo } from 'react'

const AnalysisTable = ({ label, data }) => {
  const tableData = useMemo(() => {
    let longBuildup = 0
    let shortCovering = 0
    let longUnwinding = 0
    let shortBuiltup = 0
    let bullish = 0
    let bearish = 0
    let neutral = 0

    data.forEach((item) => {
      if (item.CE?.Interpretation === 'Long buildup') {
        longBuildup += 1
      } else if (item.CE?.Interpretation === 'Short covering') {
        shortCovering += 1
      } else if (item.CE?.Interpretation === 'Long unwinding') {
        longUnwinding += 1
      } else if (item.CE?.Interpretation === 'Short builtup') {
        shortBuiltup += 1
      }

      if (item.PE?.Interpretation === 'Long buildup') {
        longBuildup += 1
      } else if (item.PE?.Interpretation === 'Short Covering') {
        shortCovering += 1
      } else if (item.PE?.Interpretation === 'Long Unwinding') {
        longUnwinding += 1
      } else if (item.PE?.Interpretation === 'Short builtup') {
        shortBuiltup += 1
      }

      if (item.CE?.Trend === 'Bullish') {
        bullish += 1
      } else if (item.CE?.Trend === 'Bearish') {
        bearish += 1
      } else if (item.CE?.Trend === 'Neutral') {
        neutral += 1
      }

      if (item.PE?.Trend === 'Bullish') {
        bullish += 1
      } else if (item.PE?.Trend === 'Bearish') {
        bearish += 1
      } else if (item.PE?.Trend === 'Neutral') {
        neutral += 1
      }
    })

    // prettier-ignore
    return { longBuildup, shortCovering, longUnwinding, shortBuiltup, bullish, bearish, neutral }
  }, [data])

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table size="small" sx={{ '& *': { textAlign: 'center!important' } }}>
        <TableHead>
          <TableRow
            sx={{
              '& > *:not(:last-child)': {
                borderRight: '1px solid #dedede',
              },
            }}
          >
            <TableCell colSpan={2}>Call Trend</TableCell>
            <TableCell colSpan={4}>Call Interpretation</TableCell>
            <TableCell colSpan={2}>Put Trend</TableCell>
            <TableCell colSpan={4}>Put Interpretation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{
              '& > *:not(:last-child)': {
                borderRight: '1px solid #dedede',
              },
            }}
          >
            <TableCell sx={{ color: 'lightGreen.main' }}>Bullish</TableCell>
            <TableCell sx={{ color: 'error.main' }}>Bearish</TableCell>
            <TableCell sx={{ color: 'lightGreen.main' }}>
              Long Buildup
            </TableCell>
            <TableCell sx={{ color: 'success.main' }}>Short Covering</TableCell>
            <TableCell sx={{ color: 'lightRed.main' }}>
              Long Unwinding
            </TableCell>
            <TableCell sx={{ color: 'error.main' }}>Short Builtup</TableCell>
            <TableCell sx={{ color: 'lightGreen.main' }}>Bullish</TableCell>
            <TableCell sx={{ color: 'error.main' }}>Bearish</TableCell>
            <TableCell sx={{ color: 'lightGreen.main' }}>
              Long Buildup
            </TableCell>
            <TableCell sx={{ color: 'success.main' }}>Short Covering</TableCell>
            <TableCell sx={{ color: 'lightRed.main' }}>
              Long Unwinding
            </TableCell>
            <TableCell sx={{ color: 'error.main' }}>Short Builtup</TableCell>
          </TableRow>
          <TableRow
            sx={{
              '& > *:not(:last-child)': {
                borderRight: '1px solid #dedede',
              },
              '& > *': {
                fontWeight: 'bold',
              },
            }}
          >
            <TableCell>{tableData.bullish}</TableCell>
            <TableCell>{tableData.bearish}</TableCell>
            <TableCell>{tableData.longBuildup}</TableCell>
            <TableCell>{tableData.shortCovering}</TableCell>
            <TableCell>{tableData.longUnwinding}</TableCell>
            <TableCell>{tableData.shortBuiltup}</TableCell>
            <TableCell>{tableData.bullish}</TableCell>
            <TableCell>{tableData.bearish}</TableCell>
            <TableCell>{tableData.longBuildup}</TableCell>
            <TableCell>{tableData.shortCovering}</TableCell>
            <TableCell>{tableData.longUnwinding}</TableCell>
            <TableCell>{tableData.shortBuiltup}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AnalysisTable
