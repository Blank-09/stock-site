import Chip from '@mui/material/Chip'

/**
 * Custom chip component for AnalysisTable
 * @param {{ label: string; color: string; icon: JSX.Element }} props
 */

const AnalysisChip = (props) => {
  return (
    <Chip {...props} size="small" sx={{ borderRadius: '5px', width: '100%' }} />
  )
}

export default AnalysisChip
