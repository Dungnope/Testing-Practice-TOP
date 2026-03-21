export function calculator(one, two) {
  let plus, minus, multiply, divide;
  if ((one === two) === 0)
    return {
      plus: 0,
      minus: 0,
      multiply: 0,
      divide: undefined
    };
  else {
    plus = one + two;
    minus = one - two;
    multiply = one * two;
    if (two === 0) {
      divide = "Cannot divide by 0";
    } else divide = Number((one / two).toFixed(2));
  }
  return {
    plus: plus,
    minus: minus,
    multiply: multiply,
    divide: divide
  };
}
