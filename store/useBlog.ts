import { useQuery } from "@tanstack/react-query";
import { pb } from "@/lib/services";
import type { Article } from "@/types";

function useBlogPost(id: string) {
  async function fetcher(id: string) {
    try {
      return (await pb.collection("articles").getOne(id)) as Article;
    } catch (error) {
      throw new Error("Failed to fetch blog post with id: " + id);
    }
  }

  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetcher(id),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

function useBlogPosts() {
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

  const query = useQuery({
    queryKey: ["posts"],
    queryFn: fetcher,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return query;
}

export { useBlogPost, useBlogPosts };
