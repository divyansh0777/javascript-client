/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import style from './style';

export function TextField(props) {
  const { textBoxStyle, errorTrue, errorFalse } = style;
  // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line object-curly-newline
  const { placeHolder, isDisabled, name, type, isError, value } = props;
  return (
    <div>
      <input style={textBoxStyle} disabled={isDisabled} name={name} type={type} defaultValue={value} placeholder={placeHolder} />
      {
        (isError && value > 100)
          ? <p style={errorTrue}>Value Should be less than 100</p>
          : <p style={errorFalse}>Value Should be less than 100</p>
      }
    </div>
  );
}
