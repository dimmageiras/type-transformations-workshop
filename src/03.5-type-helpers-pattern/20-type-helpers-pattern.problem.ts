import { Equal, Expect } from "@total-typescript/helpers";

type ReturnWhatIPassIn<T> = T;

type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<"1">, "1">>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>,
];
