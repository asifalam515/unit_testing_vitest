import { expect, test, describe, it } from "vitest";
import {
  toUpperCase,
  toLowerCase,
  capitalize,
  reverse,
} from "../src/stringUtils";

describe("string utilities", () => {
  test("should return uppercase", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
  });
  test("should return lowercase", () => {
    expect(toLowerCase("hello")).toBe("hello");
  });
  test("should return first letter of string captila", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  it("should reverse the stirng", () => {
    expect(reverse("hello")).toBe("olleh");
  });
});
