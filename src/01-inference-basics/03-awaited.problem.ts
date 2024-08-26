import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type GetUSer = typeof getUser;
type PromiseType = ReturnType<GetUSer>;
type ReturnValue = Awaited<PromiseType>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>
];
