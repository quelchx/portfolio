import { useQuery } from "@tanstack/react-query";
import { pb } from "@/lib/services";
import type { Article } from "@/types";

async function fetcher() {
  try {
    const records = (await pb.collection("articles").getFullList({
      sort: "-created",
    })) as Article[];

    return records;
  } catch (error) {
    throw new Error("Failed to fetch blog posts");
  }
}

export function useBlogPosts() {
  const query = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetcher,
  });

  return query;
}
