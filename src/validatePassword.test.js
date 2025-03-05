import { describe, expect, it, test } from "vitest";
import { validatePassword } from "./validatePassword";
describe("validate password", () => {
  it("should allow a password with exactly 8 char", () => {
    const result = validatePassword("abcdefgh");
    expect(result).toBe("password is valid");
  });
  //
  //     expect(() => validatePassword("abcdefghi")).toThrow(
  //       "password must be between 8 and 16 char"
  //     );
  //   });
});
