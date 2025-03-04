import { describe, expect, it, test } from "vitest";
import { validatePassword } from "./validatePassword";
describe("validate password", () => {
  it("should allow a password with exactly 8 char", () => {
    const result = validatePassword("abcdefgh");
    expect(result).toBe("password is valid");
  });
  it("should throw an error if password has less than 9 char", () => {
    expect(() => validatePassword("abc")).toThrow(
      "password must be between 8 and 16 char"
    );
  });
});
