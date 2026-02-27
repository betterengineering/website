import { test, expect, mock, beforeEach } from "bun:test";
import { render, screen } from "@testing-library/react";

mock.module("p5", () => {
  function p5() {}
  p5.prototype.remove = function () {};
  return { default: p5 };
});

const { default: App } = await import("./App");

beforeEach(() => {
  window.history.pushState({}, "", "/");
});

test("renders the header with site name", () => {
  render(<App />);
  const nameElement = screen.getByText(/Mark Spicer/i);
  expect(nameElement).toBeDefined();
});
