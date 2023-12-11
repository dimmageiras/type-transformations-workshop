import { Equal, Expect } from "@total-typescript/helpers";

const fruits = ["apple", "banana", "orange"] as const;

type Fruit = (typeof fruits)[number];
type AppleOrBanana = Exclude<Fruit, "orange">;

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
