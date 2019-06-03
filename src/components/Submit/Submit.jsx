/* eslint-disable no-console */
/* eslint-disable no-tabs */
import React from 'react';

export const Submit = (props) => {
  const { ...attributes } = props;

  return (
    <input type="submit" {...attributes} />
  );
};
