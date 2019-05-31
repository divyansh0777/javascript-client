import React from 'react';
import { TextField, Paragraph } from '../../components';
import TextFieldStyleDemo from './TextFieldStyleDemo';

export function TextFieldDemo() {
  const { mainDiv } = TextFieldStyleDemo;
  return (
    <div style={mainDiv}>
      <Paragraph message="This is a Disabled Input" />
      <TextField name="disabledInput" type="textField" disabled placeHolder="Disabled Input" isError={false} />

      <Paragraph message="A Valid Input" />
      <TextField name="validInput" type="textField" placeHolder="Enter any Text" isError={false} />

      <Paragraph message="An Input with errors" />
      <TextField name="errorInput" type="number" value="101" placeHolder="Enter only number not less than 100" isError />
    </div>
  );
}
