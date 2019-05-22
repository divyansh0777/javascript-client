import React from 'react';
import style from './style';

export function TextField(props) {
    const { textBoxStyle, errorTrue, errorFalse } = style;
    const { placeHolder, isDisabled, name, type, isError, value } = props;
    
    return (
        <div>
            <input style={ textBoxStyle } disabled={isDisabled} name={name} type={type} value={value}  placeholder={placeHolder}></input>
            {
                (isError && value > 100) ?
                    <p style={errorTrue}>Value Should be less than 100</p> : 
                        <p style={errorFalse}>Value Should be less than 100</p>
            }
        </div>
    );
}
