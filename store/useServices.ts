import { useQuery } from "@tanstack/react-query";
import { pb } from "@/lib/services";
import type { Service } from "@/types";

export function useServices() {
  async function fetcher() {
    try {
      return (await pb.collection("services").getFullList({
        sort: "+created",
      })) as Service[];
    } catch (error) {
      throw new Error("Failed to fetch services for the guestbook.");
    }
  }

  return useQuery({
    queryKey: ["services"],
    queryFn: fetcher,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
