import React from "react";
import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";

import { config } from "@/config";
import { HStack, VStack } from "./Stacks";
import { ToggleMode } from "./ToggleMode";
import { TogglePalette } from "./ToggleColor";
import { BiGitBranch } from "react-icons/bi";
import { RiGithubLine } from "react-icons/ri";

export const Navbar = () => {
  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      sx={{
        height: 84,
      }}
    >
      <HStack spacing={1} alignItems="center">
        <Avatar src={config.avatar} />
        <VStack>
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
          <Typography
            variant="subtitle2"
            sx={{
              letterSpacing: 0.1,
              lineHeight: 1,
              fontWeight: 400,
            }}
          >
            Software Engineer
          </Typography>
        </VStack>
      </HStack>
      <HStack spacing={3} alignItems={"center"}>
        <HStack>
          <Tooltip title="View my GitHub profile">
            <a
              href="https://github.com/quelchx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <RiGithubLine />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="View the source code for this site">
            <a
              href="https://github.com/quelchx/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <BiGitBranch />
              </IconButton>
            </a>
          </Tooltip>

          <TogglePalette />
          <ToggleMode />
        </HStack>
      </HStack>
    </HStack>
  );
};
