import React from 'react';
import style from './style';

export function Paragraph(props) {
  const { paragraphStyle } = style;
  // eslint-disable-next-line react/prop-types
  const { message, ...attribute } = props;
  return (
    <p style={paragraphStyle} {...attribute}>{ message }</p>
  );
}
