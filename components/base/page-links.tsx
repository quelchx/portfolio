import { PAGES } from "@/constants";
import { Route } from "./route";

export function PageLinks() {
  return PAGES.map((page) => (
    <Route
      label={page.label}
      key={page.href}
      href={page.href}
      icon={page.icon}
    />
  ));
}
