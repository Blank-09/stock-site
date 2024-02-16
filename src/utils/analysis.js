// MUI Icons
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import RemoveIcon from '@mui/icons-material/Remove'

/**
 * Return the call trend of the value with icon and color
 * @param {string} value
 */

export function getCallTrend(value) {
  let chipColor = 'default'
  let Icon = KeyboardArrowUpIcon

  switch (value) {
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

  return { chipColor, Icon }
}

/**
 * Return the put trend of the value with icon and color
 * @param {string} value
 */

export function getPutTrend(value) {
  let chipColor = 'default'
  let Icon = KeyboardArrowUpIcon

  switch (value) {
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

  return { chipColor, Icon }
}

/**
 * Return the interpretation of the value with icon and color
 * @param {string} value
 */

export function getCallInterpretation(value) {
  let chipColor = 'default'
  let Icon = KeyboardArrowUpIcon

  switch (value) {
    case 'Short builtup':
      chipColor = 'error'
      Icon = KeyboardDoubleArrowDownIcon
      break
    case 'Short Covering':
      chipColor = 'success'
      Icon = KeyboardDoubleArrowUpIcon
      break
    case 'Long buildup':
      chipColor = 'lightGreen'
      Icon = KeyboardArrowUpIcon
      break
    case 'Long Unwinding':
      chipColor = 'lightRed'
      Icon = KeyboardArrowDownIcon
      break
    default:
      chipColor = 'default'
  }

  return { chipColor, Icon }
}

/**
 * Return the interpretation of the value with icon and color
 * @param {string} value
 */

export function getPutInterpretation(value) {
  let chipColor = 'default'
  let Icon = KeyboardArrowUpIcon

  switch (value) {
    case 'Short builtup':
      chipColor = 'success'
      Icon = KeyboardDoubleArrowDownIcon
      break
    case 'Short Covering':
      chipColor = 'error'
      Icon = KeyboardDoubleArrowUpIcon
      break
    case 'Long buildup':
      chipColor = 'lightRed'
      Icon = KeyboardArrowUpIcon
      break
    case 'Long Unwinding':
      chipColor = 'lightGreen'
      Icon = KeyboardArrowDownIcon
      break
    default:
      chipColor = 'default'
  }

  return { chipColor, Icon }
}
