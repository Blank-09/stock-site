import { useMemo } from 'react'
import CardTable from './CardTable'

const rowsTable = [
  ['Long Buildup', 1234, 'green'],
  ['Short Covering', 1234, 'green'],
  ['Long Unwinding', 1234, 'red'],
  ['Short Builtup', 1234, 'red'],
]

const InterpretationTable = ({ data }) => {
  const rowsTable = useMemo(() => {
    let longBuildup = 0
    let shortCovering = 0
    let longUnwinding = 0
    let shortBuiltup = 0

    data.forEach((item) => {
      if (item.CE?.Interpretation === 'Long buildup') {
        longBuildup += 1
      } else if (item.CE?.Interpretation === 'Short covering') {
        shortCovering += 1
      } else if (item.CE?.Interpretation === 'Long unwinding') {
        longUnwinding += 1
      } else if (item.CE?.Interpretation === 'Short builtup') {
        shortBuiltup += 1
      }

      if (item.PE?.Interpretation === 'Long buildup') {
        longBuildup += 1
      } else if (item.PE?.Interpretation === 'Short Covering') {
        shortCovering += 1
      } else if (item.PE?.Interpretation === 'Long Unwinding') {
        longUnwinding += 1
      } else if (item.PE?.Interpretation === 'Short builtup') {
        shortBuiltup += 1
      }
    })

    return [
      ['Long buildup', longBuildup, 'green'],
      ['Short Covering', shortCovering, 'green'],
      ['Long Unwinding', longUnwinding, 'red'],
      ['Short builtup', shortBuiltup, 'red'],
    ]
  }, [data])

  return <CardTable label="Interpretation" rows={rowsTable} />
}

export default InterpretationTable
