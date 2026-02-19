import { locations } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { LocationItem, LocationStore } from "./location.types";

const DEFAULT_LOCATION = locations.work;

const defaultValues = {
  activeLocation: DEFAULT_LOCATION as unknown as LocationItem,
};

const useLocationStore = create<LocationStore>()(
  immer((set) => ({
    ...defaultValues,
    actions: {
      setActiveLocation: (location: LocationItem | null) =>
        set((state) => {
          state.activeLocation = location;
        }),

      resetActiveLocation: () =>
        set((state) => {
          state.activeLocation = DEFAULT_LOCATION as unknown as LocationItem;
        }),
    },
  })),
);

export { useLocationStore };
