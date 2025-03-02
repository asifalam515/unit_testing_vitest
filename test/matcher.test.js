import { describe, it, expect, test } from "vitest";
describe("mather ", () => {
  it("to be five", () => {
    const result = 5;
    expect(result).toBe(5);
  });
  test("to equal", () => {
    const obj1 = { name: "asif", age: 25 };
    const obj2 = { name: "asif", age: 25 };
    expect(obj1).toEqual(obj2);
  });
  test("to strict equal", () => {
    const obj1 = { name: "asif", age: 25 };
    const obj2 = { name: "asif", age: 25, a: "something" };
    // expect(obj1).toStrictEqual(obj2);
  });
  test("to check if truthy", () => {
    const x = 1;
    expect(x).toBeTruthy();
  });
});
