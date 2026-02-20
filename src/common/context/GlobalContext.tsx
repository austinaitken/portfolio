import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface GlobalContextProps {
    isVet: boolean;
    setIsVet: (isVet: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isVet, setIsVet] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{ isVet, setIsVet }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = (): GlobalContextProps => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};