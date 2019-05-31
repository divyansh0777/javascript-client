/* eslint-disable react/prop-types */
import React from 'react';

export const Select = (props) => {
  const { children, ...attributes } = props;
  const customStyle = { ...attributes.style };

  return (
    <select style={customStyle} {...attributes}>{children}</select>
  );
};

export const Option = (props) => {
  const { text, ...attributes } = props;
  const customStyle = { ...attributes.style };

  return (
    <option style={customStyle} {...attributes}>{text}</option>
  );
};
