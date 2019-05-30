/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';

export const Image = (props) => {
  const { ...attributes } = props;

  return (
    <img {...attributes} />
  );
};
