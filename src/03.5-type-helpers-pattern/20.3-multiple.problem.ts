import { Equal, Expect } from "@total-typescript/helpers";

type CreateDataShape<
  TData extends string | number | boolean,
  TError extends Error,
> = {
  data: TData;
  error: TError;
};

type tests = [
  Expect<
    Equal<
      CreateDataShape<string, TypeError>,
      {
        data: string;
        error: TypeError;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<number, Error>,
      {
        data: number;
        error: Error;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean;
        error: SyntaxError;
      }
    >
  >,
];
