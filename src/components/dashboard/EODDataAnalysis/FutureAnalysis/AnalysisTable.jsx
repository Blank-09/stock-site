import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useMemo } from 'react'

const AnalysisTable = ({ label, data }) => {
  const { ce } = useMemo(() => {
    let ce = {
      longBuildup: 0,
      shortCovering: 0,
      longUnwinding: 0,
      shortBuiltup: 0,
      bullish: 0,
      bearish: 0,
      neutral: 0,
    }

    data.forEach((item) => {
      if (item.nterpretation === 'Long buildup') ce.longBuildup++
      else if (item.Interpretation === 'Short covering') ce.shortCovering++
      else if (item.Interpretation === 'Long unwinding') ce.longUnwinding++
      else if (item.Interpretation === 'Short builtup') ce.shortBuiltup++

      if (item.Trend === 'Bullish') ce.bullish++
      else if (item.Trend === 'Bearish') ce.bearish++
      else if (item.Trend === 'Neutral') ce.neutral++
    })

    ce.highestValue = Math.max(ce.longBuildup, ce.shortCovering, ce.longUnwinding, ce.shortBuiltup)

    return { ce }
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
            <TableCell sx={{ color: 'lightGreen.main' }}>Long Buildup</TableCell>
            <TableCell sx={{ color: 'success.main' }}>Short Covering</TableCell>
            <TableCell sx={{ color: 'lightRed.main' }}>Long Unwinding</TableCell>
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
            <TableCell sx={{ bgcolor: ce.bullish > ce.bearish && 'lightGreen.main' }}>{ce.bullish}</TableCell>
            <TableCell sx={{ bgcolor: ce.bullish < ce.bearish && 'error.main' }}>{ce.bearish}</TableCell>

            <TableCell sx={{ bgcolor: ce.highestValue && ce.longBuildup === ce.highestValue && 'lightGreen.main' }}>
              {ce.longBuildup}
            </TableCell>
            <TableCell sx={{ bgcolor: ce.highestValue && ce.shortCovering === ce.highestValue && 'success.main' }}>
              {ce.shortCovering}
            </TableCell>
            <TableCell sx={{ bgcolor: ce.highestValue && ce.longUnwinding === ce.highestValue && 'lightRed.main' }}>
              {ce.longUnwinding}
            </TableCell>
            <TableCell sx={{ bgcolor: ce.highestValue && ce.shortBuiltup === ce.highestValue && 'error.main' }}>
              {ce.shortBuiltup}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AnalysisTable
