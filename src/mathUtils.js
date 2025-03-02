export const add = (a, b) => a + b;
export const subTrack = (a, b) => a - b;
export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
  if (b === 0) throw new Error("Divide by zero is not allowed");
  return a / b;
};

export const factorial = (n) => {
  if (n < 0) throw new Error("Number must be non negative");
  return n === 0 ? 1 : n * factorial(n - 1);
};

export const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

export const fibonachi = (n) => {
  if (n < 0) throw new Error("Number must be non negative");
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
};
