"use client";
import dayjs from "dayjs";

import { Fragment } from "react";
import { useBlogPost } from "@/store/useBlog";
import { Spinner } from "@/components/base/spinner";
import { Warning } from "@/components/base/warning";
import { Heading, SubHeading } from "@/components/base/typography";

export function BlogArticle(props: { id: string }) {
  const query = useBlogPost(props.id);

  if (query.isLoading) return <Spinner />;

  if (query.isError)
    return (
      <Warning
        title="Failed to fetch blog post"
        message={query.error.message}
      />
    );

  return query.data ? (
    <Fragment>
      <Heading>{query.data.title}</Heading>
      <SubHeading>
        Posted on {dayjs(query.data.created).format("MMMM D, YYYY")}
      </SubHeading>

      <div className="border-t dark:border-neutral-700 pt-8">
        <div
          className="flex flex-col items-start space-y-4 markdown-body"
          dangerouslySetInnerHTML={{ __html: query.data.body }}
        />
      </div>
    </Fragment>
  ) : null;
}
