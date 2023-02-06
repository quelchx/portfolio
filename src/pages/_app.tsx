import "@/style/main.css";
import { Fragment } from "react";
import type { AppProps } from "next/app";

import { Container } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";

import { Mode } from "@/context/Mode";

import { Meta } from "@/components/Meta";
import { Navbar } from "@/components/Navbar";
import { components } from "@/components/MDXComponents";
import { usePalette } from "@/components/ToggleColor";

export default function App({ Component, pageProps }: AppProps) {
  const { palette } = usePalette();
  return (
    <Fragment>
      <style>
        {`
          code {
            color: ${palette.hex};
          }
        `}
      </style>
      <Meta />
      <MDXProvider components={components}>
        <Mode>
          <Navbar />
          <Container maxWidth="md">
            <Component {...pageProps} />
          </Container>
        </Mode>
      </MDXProvider>
    </Fragment>
  );
}
