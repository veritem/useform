import { act, renderHook } from "@testing-library/react-hooks";
import { expect, test } from "vitest";
import useForm from "../src";

test("useForm", () => {
  const { result } = renderHook(() =>
    useForm<{
      name: string;
      email: string;
      password: string;
    }>({
      name: "test",
      email: "",
      password: "",
    })
  );



  expect(result.current.inputs.name).toEqual("test");

  act(() => {
    result.current.clearForm();
  });

  expect(result.current.inputs.name).toEqual("");
});
