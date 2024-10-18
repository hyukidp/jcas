import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Schedule } from '../interfaces/Schedule';

interface ScheduleContextType {
    selectedSchedule: Schedule | null;
    setSelectedSchedule: (schedule: Schedule) => void;
  }

const ScheduleContext = createContext<ScheduleContextType | undefined>(undefined);

export const useSchedule = () => {
    const context = useContext(ScheduleContext);
    if (!context) {
      throw new Error('useSchedule must be used within a ScheduleProvider');
    }
    return context;
  };

interface ScheduleProviderProps {
    children: ReactNode;
  }

export const ScheduleProvider: React.FC<ScheduleProviderProps> = ({ children }) => {
    const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null); //useState for the selectedLocation
  
    return (
      <ScheduleContext.Provider value={{ selectedSchedule, setSelectedSchedule }}>
        {children}
      </ScheduleContext.Provider>
    );
  };