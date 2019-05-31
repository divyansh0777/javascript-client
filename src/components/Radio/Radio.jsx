/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/prop-types */
import React from 'react';

export const Radio = (props) => {
  const { text, ...attributes } = props;
  const customStyle = { ...attributes.style };

  return (
    <React.Fragment>
      <input type="radio" style={customStyle} {...attributes} />
      {text}
    </React.Fragment>
  );
};
