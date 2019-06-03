/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';


function solve(first, second, operator) {
  let answer = 0;
  if (operator === '/' && second === 0) {
    return 'Value is not correct';
  }
  switch (operator) {
    case '+':
      answer = first + second;
      break;

    case '-':
      answer = first - second;
      break;

    case '/':
      answer = first / second;
      break;

    case '%':
      answer = first % second;
      break;

    case '*':
      answer = first * second;
      break;

    default:
      answer = 'Undefined operator see Console';
  }
  return answer;
}

export const MathDemo = (props) => {
  const {
    children, first, second, operator,
  } = props;
  const result = solve(first, second, operator);

  console.log(props, result);

  return (
    	React.cloneElement(children(result))
  );
};
