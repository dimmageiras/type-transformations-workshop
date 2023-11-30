import { Equal, Expect } from "@total-typescript/helpers";

type YouSayGoodbyeAndISayHello = unknown;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
