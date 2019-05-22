/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import style from './style';

export const Image = (props) => {
  const { ...attributes } = props;

  return (
    <img {...attributes} style={style.image} />
  );
};
