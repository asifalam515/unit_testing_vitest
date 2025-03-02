import { expect, test, it, describe } from "vitest";
import { add } from "../src/tdd/mathUtils";

describe("math utils test", () => {
  test("should return two added value", () => {
    expect(add(1, 3)).toBe(4);
  });
  test("if arg not number throw new error", () => {
    expect(() => add(1, "3")).toThrow("Both must be number");
    expect(() => add("1", 2)).toThrow("Both must be number");
    expect(() => add("1", "2")).toThrow("Both must be number");
  });
});
