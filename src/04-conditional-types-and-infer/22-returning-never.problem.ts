import { Equal, Expect } from "@total-typescript/helpers";

type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
];
