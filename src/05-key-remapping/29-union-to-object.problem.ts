import { Equal, Expect } from "@total-typescript/helpers";

type Route = "/" | "/about" | "/admin" | "/admin/users";

type RoutesObject = unknown;

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": "/";
        "/about": "/about";
        "/admin": "/admin";
        "/admin/users": "/admin/users";
      }
    >
  >,
];
