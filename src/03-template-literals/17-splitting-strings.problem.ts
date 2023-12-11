// Might come in handy!
//import { S } from "ts-toolbelt";
// https://millsp.github.io/ts-toolbelt/modules/string_split.html

import { Equal, Expect } from "@total-typescript/helpers";
import { Split } from "../helpers/type-utils";

type Path = "Users/John/Documents/notes.txt";

type SplitPath = Split<Path, "/">;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>,
];
