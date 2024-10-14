import { createContext } from "react";
import { Locations } from "../../../types/types";

export const LocationContext = createContext<Locations[]>([]);