import type { locations } from "@/constants";

export type LocationKey = keyof typeof locations;

export interface FileSystemItem {
  id: number;
  name: string;
  icon: string;
  kind: "folder" | "file";
  position?: string;
}

export interface FolderItem extends FileSystemItem {
  kind: "folder";
  children: FileSystemItem[];
  windowPosition?: string;
}

export interface FileItem extends FileSystemItem {
  kind: "file";
  fileType: "txt" | "url" | "img" | "fig";
  description?: string[];
  href?: string;
  imageUrl?: string;
  windowPosition?: string;
}

export type LocationItem = FolderItem & {
  type: LocationKey;
};

// Состояние location store
export interface LocationState {
  activeLocation: LocationItem | null;
}

// Действия location store
export interface LocationActions {
  setActiveLocation: (location: LocationKey | null) => void;
  resetActiveLocation: () => void;
}

// Полный store
export interface LocationStore extends LocationState {
  actions: LocationActions;
}
