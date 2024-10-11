import { createContext } from "react";
import { Locations } from "../../../types/types";

export const LocationContext = createContext<Locations[]>([]);
export const SelectedLocationContext = createContext<Locations | null>(null);
