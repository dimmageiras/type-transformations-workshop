import { Equal, Expect } from "@total-typescript/helpers";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = ReturnType<typeof getUser>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];
