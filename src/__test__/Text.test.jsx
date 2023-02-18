import { render, screen } from "@testing-library/react";
import Text from "@/components/Text";

describe("Text Component", () => {
  test("문자열을 넣었을 때, 문자열이 출력된다.", () => {
    render(<Text>hello</Text>);
    let el = screen.getByText(/hello/);
    expect(el).toBeInTheDocument();
  });

  test("문자열이 아닌 것을 넣었을 때, 오류가 발생된다.", () => {
    expect(() => render(<Text />)).toThrow();
  });
});
