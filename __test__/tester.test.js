import { caesarCipher } from "../src/caesarCipher.js";
import { calculator } from "../src/calculator.js";
import { capitalize } from "../src/capitalize.js";
import { reverseString } from "../src/reverseString.js";

// ============TEST Capitalize==============

describe("capitalize", () => {
  test("can uppercase first character", () => {
    let ans = capitalize("test");
    expect(ans).toBe("Test");
  });

  test("blank string", () => {
    let ans = capitalize("");
    expect(ans).toBe(ans);
  });

  test("Not first character upper case", () => {
    let ans = capitalize("helLo");
    expect(ans).toBe("Hello");
  });
});

// ============TEST reverseString==============

describe("reverse string", () => {
  test("reverse", () => {
    expect(reverseString("better")).toBe("retteb");
  });

  test("empty", () => {
    expect(reverseString("")).toBe("");
  });
});

// ============TEST calculator==============

describe("calculator", () => {
  test("normal", () => {
    expect(calculator(2, 3)).toEqual({
      plus: 5,
      minus: -1,
      multiply: 6,
      divide: 0.67
    });
  });

  test("divide for zero", () => {
    expect(calculator(2, 0)).toEqual({
      plus: 2,
      minus: 2,
      multiply: 0,
      divide: calculator(2, 0).divide
    });
  });

  test("both numbers are 0", () => {
    expect(calculator(0, 0)).toEqual({
      plus: 0,
      minus: 0,
      multiply: 0,
      divide: calculator(0, 0).divide
    });
  });
});

// ============TEST caesarCipher==============

describe("caesarCipher", () => {
  test("test wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
});
