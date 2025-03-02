import { describe, expect, it, test } from "vitest";
import { mergeObjects, deepClone, deepEqual } from "../src/objectUtils";
describe("object testing", () => {
  test("return two merged object", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };

    expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });
  test("should deep clone two object", () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);
    expect(original.b.c).toBe(2);
  });
});
