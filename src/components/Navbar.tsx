import React from "react";
import { Avatar, Typography } from "@mui/material";

import { config } from "@/config";
import { HStack } from "./Stacks";
import { PageLink } from "./Links";
import { ToggleMode } from "./ToggleMode";
import { TogglePalette } from "./ToggleColor";

export const Navbar = () => {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      sx={{
        padding: 3,
      }}
    >
      <HStack spacing={1} alignItems="center">
        <Avatar src={config.avatar} />
        <Typography
          variant="h6"
          sx={{
            letterSpacing: 0.1,
            lineHeight: 1,
            fontWeight: 600,
          }}
        >
          Eric Quelch
        </Typography>
      </HStack>
      <HStack spacing={3} alignItems={"center"}>
        {config.routes.map((route) => (
          <PageLink key={route.path} href={route.path}>
            <Typography>{route.name}</Typography>
          </PageLink>
        ))}
        <HStack>
          <TogglePalette />
          <ToggleMode />
        </HStack>
      </HStack>
    </HStack>
  );
};
