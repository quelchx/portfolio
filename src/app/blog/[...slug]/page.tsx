import "@/styles/mdx.css";
import Image from "next/image";
import * as runtime from "react/jsx-runtime";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { Tag } from "@/components/shared/tag";
import { siteConfig } from "@/config/site.config";

import { Callout } from "@/components/shared/callout";

type MDXProps = { code: string };
type PostPageProps = { params: { slug: string[] } };

function useMDXComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

const components = {
  Image,
  Callout,
  h1: (props: any) => {
    return <h1 className="text-3xl font-black mt-2 mb-3" {...props} />;
  },
  h2: (props: any) => {
    return <h2 className="text-2xl font-black mt-2 mb-3" {...props} />;
  },
  h3: (props: any) => {
    return <h3 className="text-xl font-black mt-2 mb-3" {...props} />;
  },
  h4: (props: any) => {
    return <h4 className="text-lg font-black mt-2 mb-3" {...props} />;
  },
};

function MDXContent(props: MDXProps) {
  const Component = useMDXComponent(props.code);
  return <Component components={components} />;
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  return posts.find((post) => post.slugAsParams === slug);
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export async function generateMetadata(
  props: PostPageProps
): Promise<Metadata> {
  const post = await getPostFromParams(props.params);

  if (!post || !post.published) {
    notFound();
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export default async function PostPage(props: PostPageProps) {
  const post = await getPostFromParams(props.params);

  if (!post || !post.published) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container max-w-5xl mx-auto py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      <div className="flex gap-2 mb-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}
