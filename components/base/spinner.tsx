import { Icon } from "@iconify/react";

export function Spinner() {
  return (
    <div
      className="flex justify-center items-center w-full h-96"
      aria-label="loading"
    >
      <Icon
        icon="tabler:loader-2"
        className="animate-spin w-10 h-10 text-blue-500"
      />
    </div>
  );
}
