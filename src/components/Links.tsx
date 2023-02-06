import { Link, LinkProps } from "@mui/material";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export const PageLink = (props: NextLinkProps & LinkProps) => {
  return (
    <Link
      component={NextLink}
      sx={{ textDecoration: "none", color: "inherit" }}
      {...props}
    >
      {props.children}
    </Link>
  );
};
