
import { createContext, useContext, useState, type ReactNode } from 'react';

type LayoutMode = 'creative' | 'professional';

interface LayoutContextType {
    mode: LayoutMode;
    toggleMode: () => void;
    isProfessional: boolean;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<LayoutMode>('professional');

    const toggleMode = () => {
        setMode((prev) => (prev === 'creative' ? 'professional' : 'creative'));
    };

    const isProfessional = mode === 'professional';

    return (
        <LayoutContext.Provider value={{ mode, toggleMode, isProfessional }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }
    return context;
};
