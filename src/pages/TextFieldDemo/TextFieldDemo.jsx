import React from 'react';
import { TextField, Paragraph } from '../../components';
import TextFieldStyleDemo from './TextFieldStyleDemo';

export function TextFieldDemo() {
  const { mainDiv, textBoxStyle } = TextFieldStyleDemo;
  return (
    <div style={mainDiv}>
      <Paragraph text="This is a Disabled Input" />
      <TextField style={textBoxStyle} name="disabledInput" type="textField" disabled placeholder="Disabled Input" isError={false} />

      <Paragraph text="A Valid Input" />
      <TextField style={textBoxStyle} name="validInput" type="textField" placeholder="Enter any Text" isError={false} />

      <Paragraph text="An Input with errors" />
      <TextField style={textBoxStyle} name="errorInput" type="number" disabled defaultValue="101" placeholder="Enter only number not less than 100" isError />
    </div>
  );
}
