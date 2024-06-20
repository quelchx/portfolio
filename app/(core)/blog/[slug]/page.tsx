"use client";

import dayjs from "dayjs";
import { useBlogPost } from "@/store/useBlog";
import { Heading, SubHeading } from "@/components/base/typography";
import { Spinner } from "@/components/base/spinner";
import { Warning } from "@/components/base/warning";

export default function Page(props: { params: { slug: string } }) {
  const query = useBlogPost(props.params.slug);

  if (query.isLoading) return <Spinner />;

  if (query.isError)
    return (
      <Warning
        title="Failed to fetch blog post"
        message={query.error.message}
      />
    );

  return query.data ? (
    <section className="page-wrapper">
      <div className="px-12 pt-4 pb-12">
        <Heading>{query.data.title}</Heading>
        <SubHeading>
          Posted on {dayjs(query.data.created).format("MMMM D, YYYY")}
        </SubHeading>

        <div className="mt-12 lg:mt-18 border-t dark:border-neutral-700 pt-12">
          <div dangerouslySetInnerHTML={{ __html: query.data.body }}></div>
        </div>
      </div>
    </section>
  ) : null;
}
