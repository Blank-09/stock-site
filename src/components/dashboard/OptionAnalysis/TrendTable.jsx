import { useMemo } from 'react'
import CardTable from './CardTable'

const TrendTable = ({ data }) => {
  const rowsTable = useMemo(() => {
    let bullish = 0
    let bearish = 0
    let neutral = 0

    data.forEach((item) => {
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

    return [
      ['Bullish', bullish, 'green'],
      ['Bearish', bearish, 'red'],
      ['Neutral', neutral],
    ]
  }, [data])

  return <CardTable label="Trend" rows={rowsTable} />
}

export default TrendTable
