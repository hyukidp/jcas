import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Location } from '../interfaces/Location';


interface LocationContextType {
    selectedLocation: Location | null;
    setSelectedLocation: (location: Location) => void;
  }

const LocationContext = createContext<LocationContextType | undefined>(undefined);


export const useLocation = () => {
    const context = useContext(LocationContext);
    if (!context) {
      throw new Error('useLocation must be used within a LocationProvider');
    }
    return context;
  };

interface LocationProviderProps {
    children: ReactNode;
  }


export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null); //useState for the selectedLocation
  
    return (
      <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
        {children}
      </LocationContext.Provider>
    );
  };