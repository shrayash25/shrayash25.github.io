import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface LoaderContextProps {
  loading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

// Create the context
const LoaderContext = createContext<LoaderContextProps | undefined>(undefined);

// Provider Component
export const LoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

// Custom hook to use the LoaderContext
export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};
