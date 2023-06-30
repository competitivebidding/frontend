import {createContext, useEffect, useState} from "react";
import {useLocalStorage} from "../shared/lib/useLocalStorage";

export const AuthContext = createContext(null)

export const UserContextProvider = ({children}) => {
    const [value, setValue] = useState(null)

    const {lsValue} = useLocalStorage('user')

    useEffect(() => {
        setValue(lsValue)
    }, [])

    return <AuthContext.Provider value={{value, setValue}}>
        {children}
    </AuthContext.Provider>
}
