import { main } from "./index";

describe("CLI Tool", () => {
  test('should output "Hello"', () => {
    expect(main()).toBe("Hello");
  });
});
