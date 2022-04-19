import { act, renderHook } from "@testing-library/react-hooks";
import { describe, expect } from "vitest";
import useForm from "../src";

// https://stackblitz.com/edit/vitest-dev-vitest-8ukiz3?file=src%2Fhooks%2FuseCounter.test.ts&initialPath=__vitest__
describe("useForm", () => {
  const { result } = renderHook(() =>
    useForm({
      name: "",
      email: "",
      password: "",
    })
  );

  act(() => {
    result.current.inputs.name.onChange({ target: { value: "test" } });
  });

  expect(result.current.inputs.name.value).toEqual("test");
});
