import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const AnalysisTable = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
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
                <TableCell>R1</TableCell>
                <TableCell>R2</TableCell>
                <TableCell>R3</TableCell>
                <TableCell>S1</TableCell>
                <TableCell>S2</TableCell>
                <TableCell>S3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
                <TableCell>620.00</TableCell>
                <TableCell>620.00</TableCell>
                <TableCell>620.00</TableCell>
                <TableCell>620.00</TableCell>
                <TableCell>620.00</TableCell>
                <TableCell>620.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={7}>
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
                <TableCell colSpan={3}>Call</TableCell>
                <TableCell colSpan={3}>Put</TableCell>
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
                <TableCell>Total OI</TableCell>
                <TableCell>Total Build</TableCell>
                <TableCell>Total Unwind</TableCell>
                <TableCell>Total OI</TableCell>
                <TableCell>Total Build</TableCell>
                <TableCell>Total Unwind</TableCell>
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
                <TableCell>10,62,620.00</TableCell>
                <TableCell>10,62,620.00</TableCell>
                <TableCell>10,62,620.00</TableCell>
                <TableCell>10,62,620.00</TableCell>
                <TableCell>10,62,620.00</TableCell>
                <TableCell>10,62,620.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default AnalysisTable
