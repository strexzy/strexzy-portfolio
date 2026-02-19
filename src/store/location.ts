import { locations } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type {
  LocationKey,
  LocationItem,
  LocationStore,
} from "./location.types";

const DEFAULT_LOCATION = locations.work;

const defaultValues = {
  activeLocation: DEFAULT_LOCATION as unknown as LocationItem,
};

const useLocationStore = create<LocationStore>()(
  immer((set) => ({
    ...defaultValues,
    actions: {
      setActiveLocation: (location: LocationKey | null) =>
        set((state) => {
          state.activeLocation = location
            ? (locations[location] as unknown as LocationItem)
            : null;
        }),

      resetActiveLocation: () =>
        set((state) => {
          state.activeLocation = DEFAULT_LOCATION as unknown as LocationItem;
        }),
    },
  })),
);

export { useLocationStore };
