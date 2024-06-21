"use client";

import { useRepositories } from "@/store/useRepositories";
import { Spinner } from "@/components/base/spinner";
import { Warning } from "@/components/base/warning";
import { ProjectCard } from "./project-card";

export function ProjectList() {
  const { data, isLoading, error, isError } = useRepositories();

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <Warning title="Failed to fetch repositories" message={error.message} />
    );

  return data ? (
    <ul className="grid md:grid-cols-2 my-12 gap-12 gap-y-24">
      {data?.map((repo) => (
        <ProjectCard key={repo.name} {...repo} />
      ))}
    </ul>
  ) : null;
}
