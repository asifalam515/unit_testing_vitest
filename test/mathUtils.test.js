import { expect, test, it, describe } from "vitest";
import {
  add,
  subTrack,
  multiply,
  divide,
  fibonachi,
  gcd,
  factorial,
} from "../src/mathUtils";

describe("math utils testing", () => {
  test("add two number", () => {
    expect(add(2, 2)).toBe(4);
  });
  test("should substract one number to another number", () => {
    expect(subTrack(5, 2)).toBe(3);
  });
  test("multiply two number", () => {
    expect(multiply(5, 2)).toBe(10);
    expect(multiply(-2, 3)).toBe(-6);
  });
  test("divide one number by another number", () => {
    expect(divide(4, 2)).toBe(2);
  });
  test("should throw new error when divided by zero", () => {
    expect(() => divide(5, 0)).toThrow("Divide by zero is not allowed");
  });
  test("should calculate factorial", () => {
    expect(factorial(5)).toBe(120);
  });
});
