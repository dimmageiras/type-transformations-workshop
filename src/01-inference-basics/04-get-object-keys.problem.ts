import { Equal, Expect } from "@total-typescript/helpers";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

type TestingFramework = unknown;

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
