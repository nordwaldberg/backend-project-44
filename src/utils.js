const getNumber = () => Math.floor(Math.random() * 100) + 1;

const isEven = (num) => num % 2 === 0;

export {
  isEven,
  getNumber,
};
