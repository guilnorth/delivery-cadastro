import React, { createContext } from "react";
import useGlobal from "../hooks/useGlobal";

const GlobalContext = createContext("");

function GlobalProvider({ children }) {
    const { form, setForm } = useGlobal();

    return (
        <GlobalContext.Provider value={{ form, setForm }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }