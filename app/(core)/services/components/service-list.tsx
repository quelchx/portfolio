"use client";

import { ServiceCard } from "./service-card";
import { useServices } from "@/store/useServices";
import { Spinner } from "@/components/base/spinner";
import { Warning } from "@/components/base/warning";

export function ServiceList() {
  const { data, isLoading, isError } = useServices();

  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <Warning
        title="Failed to fetch services"
        message="Please try again later."
      />
    );

  return data
    ? data.map((service) => <ServiceCard {...service} key={service.label} />)
    : null;
}
