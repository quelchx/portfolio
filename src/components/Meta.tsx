import React, { memo } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { config } from "@/config";

type MetaProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
};

export const Meta = memo(({ ...props }) => {
  const router = useRouter();

  const meta: MetaProps = {
    title: config.title,
    image: config.avatar,
    description: config.description,
    type: "website",
    ...props,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="keywords" content={meta.description} />
      <meta name="description" content={meta.description} />
      <meta content={meta.description} name="description" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta property="og:url" content={`https://quelchx/${router.asPath}`} />
      <link rel="canonical" href={`https://quelchx.com/${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="quelchx.com" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wcbblez" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
});

Meta.displayName = "Meta";
