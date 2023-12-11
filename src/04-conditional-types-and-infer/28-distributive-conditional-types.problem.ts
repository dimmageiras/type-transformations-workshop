import { Equal, Expect } from "@total-typescript/helpers";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana<T extends string = Fruit> = T extends "apple" | "banana"
  ? T
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
