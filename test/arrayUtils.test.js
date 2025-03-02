import { expect, test, describe, it } from "vitest";
import { sum, findMax, findMin, filterEven } from "../src/arrayUtils";

describe("Array Utilites", () => {
  test("should return a value", () => {
    expect(sum([1, 3, 4])).toBe(8);
    expect(sum([-1, -2, -4])).toBe(-7);
  });
  test("should return max value", () => {
    expect(findMax([1, 2, 4])).toBe(4);
  });
  test("return the min one", () => {
    expect(findMin([12, 534, 23])).toBe(12);
  });
});
