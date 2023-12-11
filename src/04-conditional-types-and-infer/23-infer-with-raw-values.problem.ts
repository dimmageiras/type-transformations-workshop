import { Equal, Expect } from "@total-typescript/helpers";

type GetDataValue<T> = T extends { data: infer TInferredData }
  ? TInferredData
  : never;
// type GetDataValue<T> = T extends Record<"data", unknown> ? T["data"] : never;

type Test = GetDataValue<{ data: "hello" }>;

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>,
];
