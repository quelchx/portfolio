import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";

import type { Repo } from "@/types";

export function useRepositories() {
  async function fetcher() {
    const repos = ["vue-writer", "aos-vue"];
    try {
      const results: Repo[] = [];

      for (const repo of repos) {
        const data = await fetch(
          `https://api.github.com/repos/quelchx/${repo}`
        );

        if (data.ok) {
          const repo = await data.json();

          results.push({
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            watchers: repo.watchers_count,
            created: dayjs(repo.created_at).format("MMMM D, YYYY"),
            updated: dayjs(repo.updated_at).format("MMMM D, YYYY"),
          });
        }
      }

      return results;
    } catch (error) {
      throw new Error("Failed to fetch repositories");
    }
  }

  return useQuery({
    queryKey: ["projects"],
    queryFn: fetcher,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
