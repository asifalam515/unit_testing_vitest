export const add = (a, b) => a + b;
export const subTrack = (a, b) => a - b;
export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
  if (b === 0) throw new Error("Divide by zero is not allowed");
  return a / b;
};
