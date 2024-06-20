"use client";

import { useRepositories } from "@/store/useRepositories";
import { Spinner } from "@/components/base/spinner";
import { Warning } from "@/components/base/warning";
import { ProjectCard } from "./project-card";

export function ProjectList() {
  const query = useRepositories();

  if (query.isLoading) return <Spinner />;

  if (query.isError)
    return (
      <Warning
        title="Failed to fetch repositories"
        message={query.error.message}
      />
    );

  return query.data ? (
    <ul className="grid md:grid-cols-2 my-12 gap-12 gap-y-24">
      {query.data?.map((repo) => (
        <ProjectCard key={repo.name} {...repo} />
      ))}
    </ul>
  ) : null;
}
