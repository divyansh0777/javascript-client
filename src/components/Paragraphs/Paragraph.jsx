import React from 'react';
import style from './style';

export function Paragraph(props) {
  // eslint-disable-next-line react/prop-types
  const { text, ...attribute } = props;
  const customStyle = { ...style.paragraphStyle, ...attribute.style };

  return (
    <p style={customStyle} {...attribute}>{ text }</p>
  );
}
