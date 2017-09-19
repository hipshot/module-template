import hello from "../index";

describe("my module", () => {
  test("it works", () => expect(hello()).toBe("hello world"));
  test("it maths", () => expect(1 + 2).toBe(3));
});
