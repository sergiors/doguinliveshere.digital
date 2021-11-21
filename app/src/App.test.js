import { render, screen } from "@testing-library/react";
import App from "App";

test("renders explain site name", () => {
  render(<App />);
  const element = screen.getByText(/Doguin is my dog/i);
  expect(element).toBeInTheDocument();
});
