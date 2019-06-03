import React from 'react';

export const ResetFormButton = (props) => {
  const { ...attributes } = props;

  return (
    <input type="reset" {...attributes} />
  );
};
