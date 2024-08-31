import Link from "next/link";
import { Calendar } from "lucide-react";
import { Tag } from "@/components/tag";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";

type PostItemProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
};

export function PostItem(props: PostItemProps) {
  const { slug, title, description, date, tags } = props;
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={"/" + slug}>{title}</Link>
        </h2>
      </div>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={"/" + slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
