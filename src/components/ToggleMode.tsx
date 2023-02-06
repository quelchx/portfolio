import { useContext, memo } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MdBrightness5, MdBrightness4 } from "react-icons/md";

import { ColorModeContext } from "@/context/Mode";

export const ToggleMode = memo(() => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <Tooltip title={theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"}>
      <IconButton onClick={toggleColorMode}>
        {theme.palette.mode === "dark" ? <MdBrightness4 /> : <MdBrightness5 />}
      </IconButton>
    </Tooltip>
  );
});

ToggleMode.displayName = "ToggleMode";
