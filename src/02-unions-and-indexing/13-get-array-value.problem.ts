import { Equal, Expect } from "@total-typescript/helpers";

const fruits = ["apple", "banana", "orange"];

type AppleOrBanana = unknown;
type Fruit = unknown;

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
