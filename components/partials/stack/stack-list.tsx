"use client";

import { StackCard } from "./stack-card";
import { useStack } from "@/store/useStack";
import { Spinner } from "@/components/base/spinner";
import { Warning } from "@/components/base/warning";

export function StackList() {
  const { data, error, isLoading, isError } = useStack();

  if (isLoading) return <Spinner />;
  if (isError) return <Warning message={error.message} />;

  return data
    ? data.map((stack) => <StackCard {...stack} key={stack.section} />)
    : null;
}
