import { expect, test, it, describe } from "vitest";
import { add, subTrack, multiply, divide } from "../src/mathUtils";

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
});
