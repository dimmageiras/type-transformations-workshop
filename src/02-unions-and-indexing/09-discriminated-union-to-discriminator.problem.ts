import { Equal, Expect } from "@total-typescript/helpers";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type EventType = Event[keyof Pick<Event, "type">];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
