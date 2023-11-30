import { Equal, Expect } from "@total-typescript/helpers";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana = Fruit extends infer T
  ? T extends "apple" | "banana"
    ? T
    : never
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
