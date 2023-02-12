import { Box } from "@mui/material";
import React, { Suspense } from "react";

const Voxel = React.lazy(() =>
  import("@/third-party/Voxel").then((module) => ({ default: module.Voxel }))
);

export const Computer = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <Suspense>
        <Voxel />
      </Suspense>
    </Box>
  );
};
