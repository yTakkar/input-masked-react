import React from 'react'
import ReactDOM from 'react-dom'
import MaskedInput from '../src'

const App: React.FC = props => {
  return (
    <div>
      <h1>DOB Example!!</h1>
      <MaskedInput
        numInputs={8}
        onChange={console.log}
        inputStyle={{
          border: 0,
          borderBottom: '1px solid #DFE0E3',
          width: 20,
          height: 30,
        }}
        separator={<span>&nbsp;&nbsp;&nbsp;</span>}
        inputPropsMap={{
          0: { placeholder: 'D' },
          1: { placeholder: 'D' },
          2: { placeholder: 'M' },
          3: { placeholder: 'M' },
          4: { placeholder: 'Y' },
          5: { placeholder: 'Y' },
          6: { placeholder: 'Y' },
          7: { placeholder: 'Y' },
        }}
        groupSeparatorPositions={[1, 3]}
        groupSeparator={<div style={{ width: 15 }} />}
        focusStyle={{
          borderBottom: '2px solid blue',
          outline: 0,
        }}
        valueEnteredStyle={{
          borderBottom: '2px solid blue',
          outline: 0,
        }}
        isNumeric={true}
        // isDisabled={true}
        // disabledStyle={{
        //   cursor: 'not-allowed',
        // }}
        // defaultValues={'09091998'.split('')}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('demo-app'))
