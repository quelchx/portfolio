import { useQuery } from "@tanstack/react-query";
import { pb } from "@/lib/services";
import type { Stack } from "@/types";

export function useStack() {
  async function fetcher() {
    try {
      const entries = await pb.collection("stacks").getFullList({
        sort: "+created",
        expand: "items",
      });

      return entries.map((entry) => {
        return {
          section: entry.section,
          items: entry.expand?.items.map(
            (item: { name: string; description: string; icon: string }) => ({
              name: item.name,
              description: item.description,
              icon: item.icon,
            })
          ),
        };
      }) as Stack[];
    } catch (error) {
      throw new Error("Failed to fetch stack data.");
    }
  }

  return useQuery({
    queryKey: ["stacks"],
    queryFn: fetcher,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
