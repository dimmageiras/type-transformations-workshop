import { Equal, Expect } from "@total-typescript/helpers";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type ValuesAsUnionOfTuples = {
  [V in keyof Values]: [V, Values[V]];
}[keyof Values];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >,
];
