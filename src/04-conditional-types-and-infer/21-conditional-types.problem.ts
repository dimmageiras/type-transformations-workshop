import { Equal, Expect } from "@total-typescript/helpers";

type YouSayGoodbyeAndISayHello<T> = T extends "goodbye" ? "hello" : "goodbye";

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
