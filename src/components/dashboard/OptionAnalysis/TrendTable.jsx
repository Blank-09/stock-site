import CardTable from './CardTable'

const rowsTable = [
  ['Bullish', 1234, 'green'],
  ['Bearish', 1234, 'red'],
  ['Neutral', 1234],
]

const TrendTable = () => {
  return <CardTable label="Trend" rows={rowsTable} />
}

export default TrendTable
