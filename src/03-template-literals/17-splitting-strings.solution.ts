import { Equal, Expect } from "@total-typescript/helpers";
import { S } from "ts-toolbelt";

type Path = "Users/John/Documents/notes.txt";

type SplitPath = S.Split<Path, "/">;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>,
];
