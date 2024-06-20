import { useQuery } from "@tanstack/react-query";
import { pb } from "@/lib/services";
import type { Post } from "@/types";

export function usePosts() {
  async function fetcher() {
    try {
      return (await pb.collection("posts").getFullList({
        sort: "-created",
      })) as Post[];
    } catch (error) {
      throw new Error("Failed to fetch posts for the guestbook.");
    }
  }

  return useQuery({
    queryKey: ["guestbook"],
    queryFn: fetcher,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
