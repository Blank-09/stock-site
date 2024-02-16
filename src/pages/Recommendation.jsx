import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import { DataGrid } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Button, Tooltip, Dialog, DialogTitle, DialogContent, TextField, MenuItem } from '@mui/material'
import { scriptNames } from '../constants/option-analysis'
import { getRecommendation } from '../utils/api'

const styles = `
.custom-status-box {
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-size: 0.8125rem;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 24px;
  color: #000;
  background-color: #81c784;
  border-radius: 16px;
  white-space: nowrap;
  -webkit-transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: unset;
  outline: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: 0;
  padding: 0;
  vertical-align: middle;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  #price {
    width: 100%;
  }
}
`

const columns = [
  { field: 'id', headerName: '#', width: 70, sortable: false },
  { field: 'Script', headerName: 'Script', width: 150, sortable: false },
  { field: 'Date', headerName: 'Recommanded Date', width: 150, sortable: false },
  { field: 'Price', headerName: 'Price', width: 150, sortable: false },
  {
    field: 'Duration',
    headerName: 'Duration',
    width: 150,
    sortable: false,
  },
  {
    field: 'Target',
    headerName: 'Target',
    width: 150,
    sortable: false,
  },
  // {
  //   field: 'Change',
  //   headerName: 'Change',
  //   width: 200,
  //   sortable: false,
  //   renderCell: (params) => {
  //     const ltp = parseFloat(params.row.LTP)
  //     const price = parseFloat(params.row.Price)
  //     const difference = ltp - price
  //     const percentageChange = ((difference / price) * 100).toFixed(2)

  //     return (
  //       <div>
  //         <div style={{ color: difference >= 0 ? 'green' : 'red' }}>
  //           {difference.toFixed(2)} ({percentageChange}%)
  //         </div>
  //       </div>
  //     )
  //   },
  // },
  { field: 'StopLoss', headerName: 'StopLoss', width: 150, sortable: false },
  {
    field: 'Status',
    headerName: 'Status',
    width: 150,
    sortable: false,
    renderCell: (params) => {
      let statusColor = ''
      let statusText = params.row.Status
      let textColor = '#000'

      switch (statusText) {
        case 'Active':
          statusColor = '#007bff'
          break
        case 'Invalid':
          statusColor = '#ffc107'
          break
        case 'Target Achieved':
          statusColor = '#28a745'
          break
        case 'Sl Hit':
          statusColor = '#dc3545'
          break
        default:
          statusColor = 'inherit'
          break
      }

      return (
        <div className="custom-status-box" style={{ backgroundColor: statusColor, color: textColor }}>
          {statusText}
        </div>
      )
    },
  },
  { field: 'View', headerName: 'View', width: 150, sortable: false },
].map((column, index) => ({
  ...column,
  headerAlign: 'center',
  align: 'center',
  sortable: false,
  cellClassName: index && 'borderCell',
}))

export default function Recommendation() {
  const [rows, setRows] = useState([])
  const [openRecommendDialog, setOpenRecommendDialog] = useState(false)
  const [recommendationForm, setRecommendationForm] = useState({
    script: '',
    price: '',
    buySell: '',
    view: '',
    comment: '',
  })

  const [tooltipContent, setTooltipContent] = useState(null)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })

  const handleRecommend = () => {
    setOpenRecommendDialog(true)
  }

  const handleCloseRecommendDialog = () => {
    setOpenRecommendDialog(false)
  }

  const handleRowClick = (params, event) => {
    const selectedRow = rows.find((row) => row.id === params.id)

    setTooltipContent(selectedRow)

    // Adjust the left position to be relative to the DataGrid
    const dataGridRect = document.querySelector('.MuiDataGrid-root').getBoundingClientRect()
    const tooltipLeft = event.pageX - dataGridRect.left

    // Adjust the top position to be near the selected row
    const tooltipTop = dataGridRect.top + params.rowIndex * 32 // assuming 32 is the row height

    setTooltipPosition({
      top: tooltipTop,
      left: tooltipLeft,
    })
  }

  const handleTooltipClose = () => {
    setTooltipContent(null)
  }

  const generateJsonData = () => {
    // Generate JSON data based on form inputs
    const jsonData = {
      script: recommendationForm.script,
      price: recommendationForm.price,
      buySell: recommendationForm.buySell,
      view: recommendationForm.view,
      comment: recommendationForm.comment,
    }

    // Send to server
    console.log(jsonData)
  }

  useEffect(() => {
    getRecommendation().then((res) => {
      const updatedRows = res.map((row, index) => ({ ...row, id: index + 1 }))
      setRows(updatedRows)
    })
    // axios.get('/api/recommendation.json').then((res) => {
    //   const updatedRows = res.data.map((row, index) => {
    //     row.id = index + 1
    //     return row
    //   })

    //   setRows(updatedRows)
    // })
  }, [])

  return (
    <Container
      maxWidth="xl"
      style={{ width: '100%', height: '100%' }}
      sx={{ flexGrow: 1, p: 3, maxWidth: '1320px!important' }}
    >
      <style>{styles}</style>
      <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'flex-end', position: 'relative' }}>
        {tooltipContent && (
          <Tooltip
            open={!!tooltipContent}
            onClose={handleTooltipClose}
            title={
              tooltipContent ? (
                <div>
                  {Object.keys(tooltipContent).map((key) => (
                    <div key={key}>
                      {key}: {tooltipContent[key]}
                    </div>
                  ))}
                </div>
              ) : (
                ''
              )
            }
            style={{ top: tooltipPosition.top, left: tooltipPosition.left, position: 'absolute', zIndex: 1 }}
          ></Tooltip>
        )}

        <Tooltip title="Recommend" arrow>
          <Button sx={{ mb: 3 }} variant="contained" color="primary" onClick={handleRecommend}>
            Recommend
          </Button>
        </Tooltip>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '5px',
          bgcolor: 'background.paper',
        }}
      >
        <DataGrid
          sx={{ height: '100%' }}
          rows={rows}
          rowHeight={25}
          columns={columns}
          pageSizeOptions={[25]}
          onRowClick={handleRowClick}
          initialState={{
            pagination: { paginationModel: { pageSize: 25 } },
          }}
        />
      </Box>

      <Dialog
        open={openRecommendDialog}
        onClose={handleCloseRecommendDialog}
        fullWidth
        maxWidth="lg"
        sx={{
          '& .MuiDialog-paper': {
            width: '70%',
            maxHeight: '70%',
          },
        }}
      >
        <DialogTitle>Recommendation Form</DialogTitle>
        <DialogContent>
          <form>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, marginBottom: 2 }}>
              <FormControl fullWidth sx={{ width: 200 }}>
                <TextField
                  id="script"
                  label="Script"
                  margin="normal"
                  variant="outlined"
                  select
                  value={recommendationForm.script}
                  onChange={(e) => setRecommendationForm({ ...recommendationForm, script: e.target.value })}
                >
                  {scriptNames.map((script, index) => (
                    <MenuItem key={index} value={script}>
                      {script}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>

              <TextField
                id="price"
                label="Price"
                margin="normal"
                variant="outlined"
                type="number"
                value={recommendationForm.price}
                onChange={(e) => setRecommendationForm({ ...recommendationForm, price: e.target.value })}
                sx={{ width: 200 }}
              />

              <FormControl fullWidth sx={{ width: 200 }}>
                <TextField
                  id="buySell"
                  label="Buy/Sell"
                  margin="normal"
                  variant="outlined"
                  select
                  value={recommendationForm.buySell}
                  onChange={(e) => setRecommendationForm({ ...recommendationForm, buySell: e.target.value })}
                >
                  <MenuItem value="Buy">Buy</MenuItem>
                  <MenuItem value="Sell">Sell</MenuItem>
                </TextField>
              </FormControl>

              <FormControl fullWidth sx={{ width: 200 }}>
                <TextField
                  id="view"
                  label="View"
                  margin="normal"
                  variant="outlined"
                  select
                  value={recommendationForm.view}
                  onChange={(e) => setRecommendationForm({ ...recommendationForm, view: e.target.value })}
                >
                  <MenuItem value="short-term">Short Term</MenuItem>
                  <MenuItem value="long-term">Long Term</MenuItem>
                </TextField>
              </FormControl>
            </Box>

            <TextField
              id="comments"
              label="Comments"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={recommendationForm.comment}
              onChange={(e) => setRecommendationForm({ ...recommendationForm, comment: e.target.value })}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleCloseRecommendDialog()
                  generateJsonData()
                }}
              >
                Place
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  )
}
