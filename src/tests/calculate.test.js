import { test } from "vitest";
import { calculate } from "../calculate";

test("calculate addition", ({ expect }) => {
    expect(calculate(5, 7, "+")).toBe(12);
})

test("calculate subtraction", ({ expect }) => {
    expect(calculate(10, 5, "-")).toBe(5);
})

test("calculate multiplication", ({ expect }) => {
    expect(calculate(2, 5, "*")).toBe(10);
})

test("calculate division", ({ expect }) => {
    expect(calculate(10, 5, "/")).toBe(2);
})

test("calculate division by 0", ({ expect }) => {
    expect(calculate(10, 0, "/")).toBe("Cannot divide by 0");
})

test("invalid operator", ({ expect }) => {
    expect(() => calculate(10, 2, "^")).toThrowError("Invalid Operator");
})