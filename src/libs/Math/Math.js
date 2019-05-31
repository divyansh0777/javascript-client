export const randomNumber = max => Math.floor((Math.random() * max) + 0);

export const roundRobin = (max, current) => {
  if (current === (max - 1)) {
    return 0;
  }
  return (current + 1);
};
