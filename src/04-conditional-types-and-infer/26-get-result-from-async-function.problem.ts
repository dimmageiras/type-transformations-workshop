import { Equal, Expect } from "@total-typescript/helpers";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

type InferPropsFromServerSideFunction<
  T extends () => Promise<Record<"props", unknown>>,
> = Awaited<ReturnType<T>>["props"];

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string } }
    >
  >,
];
