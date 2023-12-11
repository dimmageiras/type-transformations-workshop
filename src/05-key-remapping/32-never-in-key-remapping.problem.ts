import { Equal, Expect } from "@total-typescript/helpers";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type HasIdInKey<T> = T extends `${string}${"id" | "Id"}${string}` ? T : never;

type OnlyIdKeys<T> = {
  [K in keyof T as HasIdInKey<K>]: T[K];
};

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>,
];
