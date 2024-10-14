import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Service } from '../interfaces/Service';

interface ServiceContextType {
    selectedServices: Service[];
    setSelectedServices: (service: Service) => void;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const useService = () => {
    const context = useContext(ServiceContext);
    if (!context) {
      throw new Error('useService must be used within a ServiceProvider');
    }
    return context;
};

interface ServiceProviderProps {
    children: ReactNode;
}

export const ServiceProvider: React.FC<ServiceProviderProps> = ({ children }) => {
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);

    const addService = (service: Service) => {
      setSelectedServices(prevServices => [...prevServices, service]);
    };

    return (
      <ServiceContext.Provider value={{ selectedServices, setSelectedServices: addService }}>
        {children}
      </ServiceContext.Provider>
    );
};
