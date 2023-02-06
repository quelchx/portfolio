import { Fragment, useState } from "react";
import { create } from "zustand";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { BiColorFill } from "react-icons/bi";

type Palette = {
  hex: string;
  color: string;
};

interface PaletteState {
  palette: Palette;
  setPalette: (palatte: Palette) => void;
}

export const usePalette = create<PaletteState>((set) => ({
  palette: { color: "Blue", hex: "#2196f3" },
  setPalette: (palette) => set((state) => ({ ...state, palette })),
}));

const ACCENT_COLORS: Array<{ color: string; hex: string }> = [
  { color: "Blue", hex: "#2196f3" },
  { color: "Cyan", hex: "#00bcd4" },
  { color: "Magneta", hex: "#f50057" },
  { color: "Green", hex: "#4caf50" },
  { color: "Red", hex: "#ff1744" },
  { color: "Orange", hex: "#f44336" },
  { color: "Amber", hex: "#b28900" },
  { color: "Purple", hex: "#d500f9" },
  { color: "Gray", hex: "#546e7a" },
];

const ColorBox = (props: { accent: string }) => (
  <Box
    sx={{
      cursor: "pointer",
      height: "16px",
      width: "16px",
      borderRadius: "50%",
      backgroundColor: props.accent,
    }}
  />
);

export const TogglePalette = () => {
  const { palette, setPalette } = usePalette();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleToggle = (accent: typeof ACCENT_COLORS[0]) => {
    setPalette(accent);
    handleClose();
  };

  return (
    <Fragment>
      <IconButton
        onClick={handleClick}
        aria-expanded={open ? "true" : undefined}
      >
        <BiColorFill />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "toggle-palette-button",
        }}
      >
        {ACCENT_COLORS.map((accent) => (
          <MenuItem onClick={() => handleToggle(accent)}>
            <ColorBox accent={accent.hex} />
            <Typography sx={{ ml: 1 }}>{accent.color}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};
