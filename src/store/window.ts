import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { WindowStore, WindowState, WindowKey } from "./window.types";

const defaultValues: WindowState = {
  windows: WINDOW_CONFIG,
  nextZIndex: INITIAL_Z_INDEX + 1,
};

const useWindowStore = create<WindowStore, [["zustand/immer", never]]>(
  immer((set) => ({
    ...defaultValues,
    actions: {
      openWindow: (windowKey: WindowKey, data: unknown = null) =>
        set((state) => {
          const win = state.windows[windowKey];
          win.isOpen = true;
          win.zIndex = state.nextZIndex;
          win.data = (data ?? win.data) as any;
          state.nextZIndex++;
        }),
      closeWindow: (windowKey: WindowKey) =>
        set((state) => {
          const win = state.windows[windowKey];
          win.isOpen = false;
          win.zIndex = INITIAL_Z_INDEX;
          win.data = null;
        }),
      focusWindow: (windowKey: WindowKey) =>
        set((state) => {
          const win = state.windows[windowKey];
          win.zIndex = state.nextZIndex++;
        }),
    },
  })),
);

export default useWindowStore;
