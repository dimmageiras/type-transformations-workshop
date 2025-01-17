import { Equal, Expect } from "@total-typescript/helpers";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

type GetPoint<
  T extends MyComplexInterface<unknown, unknown, unknown, unknown>,
> = ReturnType<T["getPoint"]>;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
