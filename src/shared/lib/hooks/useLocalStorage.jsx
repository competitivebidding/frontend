import React, {useState} from "react";
export const useLocalStorage = (key) => {

    const [lsValue, setLsValue] = useState(() => {
        const item = window.localStorage.getItem(key)
        return JSON.parse(item)
    })

    const setValue = (value) => {
        setLsValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    const removeItem = () => {
        window.localStorage.removeItem(key)
        setValue(null)
    }

    return {lsValue, setValue}
}