import React, { useState } from "react";

export const useLocalStorage = <T>(key: string) => {
    const [lsValue, setLsValue] = useState<T | null>(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    });

    const setValue = (value: T) => {
        setLsValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    const removeItem = () => {
        window.localStorage.removeItem(key);
        setLsValue(null);
    };

    return { lsValue, setValue, removeItem };
};
