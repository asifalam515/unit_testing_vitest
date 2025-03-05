import { expect, test, it, describe } from "vitest";
import { multiply } from "../src/math";

describe("multiplly parameterized test", () => {
  it.each([
    [2, 3, 6], //2*3=6,
    [1, 2, 2],
    [1, 0, 0],
  ]);
  "should return correct expected result when multiply %d and %d(expected %d",
    (a, b, expectedResult) => {
      expect(multiply(a, b)).toBe(expectedResult);
    };
});
