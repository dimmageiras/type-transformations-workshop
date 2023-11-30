import { Equal, Expect } from "@total-typescript/helpers";

type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type DynamicRoutes = unknown;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/posts/:id">>];
