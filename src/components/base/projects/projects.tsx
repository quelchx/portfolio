"use client";

import { useRepositories } from "@/hooks/useRepos";
import { Spinner } from "@/components/shared/spinner";
import { Warning } from "@/components/shared/warning";

import { ProjectCard } from "./project-card";

export function Projects() {
  const { data, isLoading, error, isError } = useRepositories();

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <Warning title="Failed to fetch repositories" message={error.message} />
    );

  return data ? (
    <ul className="grid md:grid-cols-2 gap-8">
      {data.map((repo) => (
        <ProjectCard key={repo.name} {...repo} />
      ))}
    </ul>
  ) : null;
}
