import { describe, expect, test, it } from "vitest";
import { fetchData } from "../src/fetchData";

describe("fetch data with async function", () => {
  it("should return the correct message after the promise has been resolved", async () => {
    const result = await fetchData();
    expect(result).toBe("data fetched successfully");
  });
});
