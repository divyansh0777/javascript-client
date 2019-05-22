import React from 'react';
import { TextField, Paragraph } from '../../components'
import styleDemo from './styleDemo';

export function TextFieldDemo() {
    const { divStyle } = styleDemo;
    return ( 
    <div style={divStyle}>
        <Paragraph message="This is a Disabled Input"></Paragraph>
        <TextField name="disabledInput" type="textField" isDisabled="true" placeHolder="Disabled Input" isError={false}></TextField>

        <Paragraph message="A Valid Input"></Paragraph>
        <TextField name="validInput" type="textField" placeHolder="Enter any Text" isError={false}></TextField>

        <Paragraph message="An Input with errors"></Paragraph>
        <TextField name="errorInput" type="number" value="101" placeHolder="Enter only number not less than 100" isError={true}></TextField>

    </div>
    );
}