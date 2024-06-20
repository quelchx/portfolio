import { useQuery } from "@tanstack/react-query";
import { pb } from "@/lib/services";
import type { Article } from "@/types";

async function fetcher(id: string) {
  try {
    return (await pb.collection("articles").getOne(id)) as Article;
  } catch (error) {
    throw new Error("Failed to fetch blog posts");
  }
}

export function useBlogPost(id: string) {
  const query = useQuery({
    queryKey: ["blog-post", id],
    queryFn: () => fetcher(id),
  });

  return query;
}
