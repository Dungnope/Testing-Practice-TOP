import { capitalize } from "../src/capitalize.js";
import { reverseString } from "../src/reverseString.js";
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

describe("reverse string", () => {
  test("reverse", () => {
    expect(reverseString("better")).toBe("retteb");
  });
});
