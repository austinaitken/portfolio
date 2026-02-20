import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';

type SectionRef = React.RefObject<HTMLDivElement | null>;

export interface GlobalContextProps {
    introRef: SectionRef;
    experienceRef: SectionRef;
    entrepreneurshipRef: SectionRef;
    qualificationsRef: SectionRef;
    personalityRef: SectionRef;
    contactRef: SectionRef;
    resourcesRef: SectionRef;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const introRef = React.useRef<HTMLDivElement>(null);
    const experienceRef = React.useRef<HTMLDivElement>(null);
    const entrepreneurshipRef = React.useRef<HTMLDivElement>(null);
    const qualificationsRef = React.useRef<HTMLDivElement>(null);
    const personalityRef = React.useRef<HTMLDivElement>(null);
    const contactRef = React.useRef<HTMLDivElement>(null);
    const resourcesRef = React.useRef<HTMLDivElement>(null);

    return (
        <GlobalContext.Provider value={{ introRef, experienceRef, entrepreneurshipRef, qualificationsRef, personalityRef, contactRef, resourcesRef }}>
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