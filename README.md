# input-masked-react

A fully customizable masked input component for the web built with React.
Inspired by [devfolioco/react-otp-input](https://github.com/devfolioco/react-otp-input)

![Date-Of-Birth](https://i.ibb.co/7C4jMFM/dob-2.gif)

![OTP](https://i.ibb.co/QXXXCqR/otp.gif)

## Installation

```
yarn add input-masked-react
```

#### Basic usage:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    separator={<span>&nbsp;&nbsp;</span>}
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/qk7y39z2r4)


##### With styles applied to each input:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/3045z708q1)

##### When inputs are disabled:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    isDisabled
    disabledStyle={{
      background: 'red'
    }}
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/82vxoqp4pl)

##### Add styles when inputs are focused:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    focusStyle={{
      outline: 0
    }}
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/x2jyx9xrxo)

##### With placeholder for each input:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    placeholder='Y'
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/ykmyy1pjn9)

##### With group separation:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={8}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    placeholder='Y'
    groupSeparatorPositions={[1, 3]}
    groupSeparator={<div style={{ width: 15 }} />}
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/zz9zw4zv8m)

##### With individual input props:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={8}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    inputPropsMap={{
      0: { placeholder: "D", style: { width: 30 } },
      1: { placeholder: "D" },
      2: { placeholder: "M" },
      3: { placeholder: "M" },
      4: { placeholder: "Y" },
      5: { placeholder: "Y" },
      6: { placeholder: "Y" },
      7: { placeholder: "Y" },
    }}
    groupSeparatorPositions={[1, 3]}
    groupSeparator={<div style={{ width: 15 }} />}
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/2k75z124j)

##### With error:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    error
    errorText={
      <div style={{ color: "red", marginTop: 10 }}>
        An error has occured!
      </div>
    }
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/m4jjzw0vj)

##### With defaultValues:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    defaultValues='1000'.split('')
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/m4jjzw0vj)

##### With valueEnteredStyle:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    valueEnteredStyle={{
      borderBottom: '2px solid blue'
    }}
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/m4jjzw0vj)


### Use cases

##### For Date Of Birth:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={8}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    inputPropsMap={{
      0: { placeholder: "D" },
      1: { placeholder: "D" },
      2: { placeholder: "M" },
      3: { placeholder: "M" },
      4: { placeholder: "Y" },
      5: { placeholder: "Y" },
      6: { placeholder: "Y" },
      7: { placeholder: "Y" }
    }}
    groupSeparatorPositions={[1, 3]}
    groupSeparator={<div style={{ width: 15 }} />}
    onChange={data => console.log(data)}
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/61w3y3764z)

##### For OTP:

```jsx
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    separator={<span>&nbsp;&nbsp;&nbsp;</span>}
    placeholder={"•"}
    onChange={data => console.log(data)}
  />
```
[Edit on CodeSandbox](https://codesandbox.io/s/zq9pkz976x)

## API

<table>
  <tr>
    <th>Name<br></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>numInputs</td>
    <td>number</td>
    <td><strong>true</strong></td>
    <td>4</td>
    <td>Number of OTP inputs to be rendered.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>function</td>
    <td><strong>true</strong></td>
    <td>console.log</td>
    <td>Returns OTP code typed in inputs.</td>
  </tr>
  <tr>
    <td>separator</td>
    <td>component<br></td>
    <td>false</td>
    <td>[space]</td>
    <td>Provide a custom separator between inputs by passing a component. For instance, <code>&lt;span&gt;-&lt;/span&gt;</code> would add <code>-</code> between each input</td>
  </tr>
  <tr>
    <td>containerStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to container of inputs.</td>
  </tr>
  <tr>
    <td>inputStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to each input.</td>
  </tr>
  <tr>
    <td>focusStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to inputs on focus.</td>
  </tr>
  <tr>
    <td>isDisabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Disables all the inputs.</td>
  </tr>
  <tr>
    <td>disabledStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to each input when disabled.</td>
  </tr>
  <tr>
    <td>error</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Indicates there is an error in the inputs.</td>
  </tr>
  <tr>
    <td>errorStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to each input when errored.</td>
  </tr>
  <tr>
    <td>shouldAutoFocus</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Auto focuses input on inital page load.</td>
  </tr>
  <tr>
    <td>isInputNum</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Restrict input to only numbers.</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>false</td>
    <td>none</td>
    <td>Placeholder for each input</td>
  </tr>
  <tr>
    <td>errorText</td>
    <td>ReactNode</td>
    <td>false</td>
    <td>none</td>
    <td>Error message to show</td>
  </tr>
  <tr>
    <td>groupSeparator</td>
    <td>ReactNode</td>
    <td>false</td>
    <td>none</td>
    <td>React element to show at groupSeparatorPositions</td>
  </tr>
  <tr>
    <td>groupSeparatorPositions</td>
    <td>Object</td>
    <td>false</td>
    <td>{}</td>
    <td>Positions when to show groupSeparator</td>
  </tr>
  <tr>
    <td>inputPropsMap</td>
    <td>Object</td>
    <td>false</td>
    <td>{}</td>
    <td>An object with props specifically for individual inputs</td>
  </tr>
  <tr>
    <td>defaultValues</td>
    <td>Array</td>
    <td>false</td>
    <td>[]</td>
    <td>An array of default values for inputs</td>
  </tr>
  <tr>
    <td>valueEnteredStyle</td>
    <td>Object</td>
    <td>false</td>
    <td>{}</td>
    <td>Styles applied on value-entered inputs</td>
  </tr>
</table>
