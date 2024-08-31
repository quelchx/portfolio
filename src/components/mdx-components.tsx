import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
};

type MDXProps = {
  code: string;
};

export function MDXContent(props: MDXProps) {
  const Component = useMDXComponent(props.code);
  return <Component components={components} />;
}
