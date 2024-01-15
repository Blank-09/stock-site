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
      chipColor = 'lightGreen'
      Icon = KeyboardDoubleArrowDownIcon
      break
    case 'Short Covering':
      chipColor = 'lightRed'
      Icon = KeyboardDoubleArrowUpIcon
      break
    case 'Long buildup':
      chipColor = 'error'
      Icon = KeyboardArrowUpIcon
      break
    case 'Long Unwinding':
      chipColor = 'success'
      Icon = KeyboardArrowDownIcon
      break
    default:
      chipColor = 'default'
  }

  return { chipColor, Icon }
}

/**
 * Combine the rows with same strike and symbol
 * @param {import('../types/analysis').OptionAnalysisData[]} data
 * @returns {import('../types/analysis').CombinedOptionAnalysisData[]}
 */

export function combineRows(data) {
  return data.reduce((acc, row) => {
    const existingRow = acc.find((r) => r.Strike === row.Strike && r.Symbol === row.Symbol)

    if (existingRow) {
      existingRow[row.OptionType] = row
    } else {
      acc.push({
        id: acc.length + 1,
        Symbol: row.Symbol,
        Strike: row.Strike,
        Expiry: row.Expiry,
        [row.OptionType]: row,
      })
    }

    return acc
  }, [])
}
