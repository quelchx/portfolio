import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogArticle } from "@/components/partials/blog/blog-article";
import type { PageQuery } from "@/types";

export async function generateMetadata(props: PageQuery<{ title: string }>) {
  return {
    title: `${props.searchParams.title} - Blog`,
  };
}

export default function Page(props: { params: { slug: string } }) {
  return (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12 flex flex-col space-y-4 items-start">
        <BlogArticle id={props.params.slug} />
        <Link href="/blog">
          <Button size="sm" className="flex space-x-2 items-center">
            <span>Back to blog</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
