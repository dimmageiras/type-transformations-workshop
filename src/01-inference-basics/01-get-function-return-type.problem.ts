import { Equal, Expect } from "@total-typescript/helpers";

const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = unknown;

type tests = [Expect<Equal<MyFuncReturn, string>>];
