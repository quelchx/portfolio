import "@/style/main.css";
import { Fragment, Suspense } from "react";
import type { AppProps } from "next/app";

import { Box, Container } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";

import { Mode } from "@/context/Mode";

import { Meta } from "@/components/Meta";
import { Navbar } from "@/components/Navbar";
import { components } from "@/components/MDXComponents";
import { usePalette } from "@/components/ToggleColor";
import React from "react";

const Voxel = React.lazy(() =>
  import("@/third-party/Voxel").then((module) => ({ default: module.Voxel }))
);

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
          <Container maxWidth="md">
            <Navbar />
            <Box py={3}>
              <Component {...pageProps} />
            </Box>
          </Container>
        </Mode>
      </MDXProvider>
    </Fragment>
  );
}
