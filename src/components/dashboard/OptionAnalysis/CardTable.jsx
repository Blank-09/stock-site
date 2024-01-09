import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

const CardTable = ({ label, rows }) => {
  return (
    <TableContainer component={Paper} variant="outlined">
      <Typography variant="h5" sx={{ p: 2 }}>
        {label}
      </Typography>
      <Table aria-label={label + ' table'}>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row[0]}
              sx={{ '&:last-child td &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                sx={{ color: row[2], fontWeight: 'semibold' }}
                scope="row"
              >
                {row[0]}
              </TableCell>
              <TableCell align="right">{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CardTable
