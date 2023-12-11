import { Equal, Expect } from "@total-typescript/helpers";
import { Split } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type HasParamsInPath<T extends string> = T extends `:${infer P}` ? P : never;

type ExtractPathParams<TPath extends string> = {
  [K in HasParamsInPath<Split<TPath, "/">[number]>]: string;
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
