/* eslint-disable react/prop-types */
import React from 'react';
import style from './style';

export function TextField(props) {
  const { errorTrue } = style;
  const { text, isError, ...rest } = props;
  const styleObject = { ...rest.style };

  return (
    <div>
      <input style={styleObject} {...rest} />
      {
        (isError)
          ? <p style={errorTrue}>Error</p>
          : <p />
      }
    </div>
  );
}

TextField.defaultProps = {
  isError: false,
};
