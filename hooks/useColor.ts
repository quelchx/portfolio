import { create } from "zustand";

type Color = "red" | "yellow" | "green" | "blue" | "purple";

const defaultColors = ["green", "blue", "neutral"] as const;

type ColorStore = {
  color: Color;
  setColor: (color: Color) => void;
};

const useColor = create<ColorStore>((set) => ({
  color: "blue",
  setColor: (color) => set({ color }),
}));

export { useColor, type Color, defaultColors };
