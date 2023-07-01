import { createContext, useEffect, useState, ReactNode } from "react";
import { useLocalStorage } from "../shared/lib/useLocalStorage";

interface UserContextProviderProps {
    children: ReactNode;
}

interface AuthContextValue {
    value: any;
    setValue: (value: any) => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [value, setValue] = useState<any>(null);

    const { lsValue } = useLocalStorage('user');

    useEffect(() => {
        setValue(lsValue);
    }, []);

    return (
        <AuthContext.Provider value={{ value, setValue }}>
            {children}
        </AuthContext.Provider>
    );
};