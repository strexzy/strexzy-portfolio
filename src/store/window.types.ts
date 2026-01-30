import type { WINDOW_CONFIG } from "@/constants";

export interface Window<T = unknown> {
  isOpen: boolean;
  zIndex: number;
  data: T | null;
}

export type WindowKey = keyof typeof WINDOW_CONFIG;

export type WindowState = {
  windows: { [K in WindowKey]: Window };
  nextZIndex: number;
};

export interface WindowActions {
  openWindow: <T = unknown>(windowKey: WindowKey, data?: T) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
}

export interface WindowStore extends WindowState {
  actions: WindowActions;
}
