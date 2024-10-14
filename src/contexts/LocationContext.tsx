import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Location } from '../interfaces/Location';

interface LocationContextType {
    selectedLocation: Location | null;
    setSelectedLocation: (location: Location) => void;
  }

const LocationContext = createContext<LocationContextType | undefined>(undefined);

/**
 * Custom Hooks for LocationContext : useContext
 */
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


/**
 * A React functional component allows us to use `useState` to manage and update the value of `selectedLocation`. 
 * { children } :  all prop allows all props passed to `LocationContext.Provider` to be inherited by its children
 */
export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null); //useState for the selectedLocation
  
    return (
      <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
        {children}
      </LocationContext.Provider>
    );
  };