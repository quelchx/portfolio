import React, { useMemo } from "react";
import { Box, CssBaseline, ThemeOptions } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { usePalette } from "@/components/ToggleColor";

const themeOptions = (color: string) => {
  return {
    palette: {
      primary: {
        main: color,
        contrastText: "#eceff1",
      },
    },
  };
};

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

/** MUI provider to wrap application with MUI theme and state */
export const Mode = (props: { children: React.ReactNode }) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const { palette } = usePalette();
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...themeOptions(palette.hex).palette,
        },
      }),
    [mode, palette.hex]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            color: "text.primary",
            backgroundColor: "background.default",
            borderRadius: 0,
            minHeight: "100vh",
          }}
        >
          {props.children}
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
