import React from "react";

type Props = { output?: string };

export default function HelloWorld({ output = "hello world" }: Props) {
  return <div>{output}</div>;
}
