import { describe, it, expect } from "vitest";
import addOrdinalSuffix from "./addOrdinalSuffix";

describe("addOrdinalSuffix", () => {
  it("should handle special cases 11, 12, 13", () => {
    expect(addOrdinalSuffix(11)).toBe("11th");
    expect(addOrdinalSuffix(12)).toBe("12th");
    expect(addOrdinalSuffix(13)).toBe("13th");
  });

  it("should add correct ordinal suffixes for numbers ending in 1, 2, 3", () => {
    expect(addOrdinalSuffix(1)).toBe("1st");
    expect(addOrdinalSuffix(2)).toBe("2nd");
    expect(addOrdinalSuffix(3)).toBe("3rd");
    expect(addOrdinalSuffix(21)).toBe("21st");
    expect(addOrdinalSuffix(22)).toBe("22nd");
    expect(addOrdinalSuffix(23)).toBe("23rd");
  });

  it('should add "th" suffix for other numbers', () => {
    expect(addOrdinalSuffix(4)).toBe("4th");
    expect(addOrdinalSuffix(5)).toBe("5th");
    expect(addOrdinalSuffix(10)).toBe("10th");
    expect(addOrdinalSuffix(14)).toBe("14th");
    expect(addOrdinalSuffix(20)).toBe("20th");
    expect(addOrdinalSuffix(100)).toBe("100th");
  });

  it("should handle edge cases", () => {
    expect(addOrdinalSuffix(0)).toBe("0th");
    expect(addOrdinalSuffix(-1)).toBe("-1st");
    expect(addOrdinalSuffix(-2)).toBe("-2nd");
  });
});
