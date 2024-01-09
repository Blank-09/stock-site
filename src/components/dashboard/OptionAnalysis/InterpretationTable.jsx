import CardTable from './CardTable'

const rowsTable = [
  ['Long buildup', 1234],
  ['Long Unwinding', 1234],
  ['Short builtup', 1234],
  ['Short Covering', 1234],
]

const InterpretationTable = () => {
  return <CardTable label="Interpretation" rows={rowsTable} />
}

export default InterpretationTable
