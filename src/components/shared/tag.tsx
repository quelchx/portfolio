import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "@/components/ui/badge";

type TagProps = {
  tag: string;
  current?: boolean;
  count?: number;
};

export function Tag(props: TagProps) {
  const { tag, current, count } = props;
  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-md",
      })}
      href={`/tags/${slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}
