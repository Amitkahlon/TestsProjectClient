import React, { createContext, useState } from 'react';

const defaultValues = {
    token: {},
    setToken: () => {},
    admin: {},
    setAdmin: () => {},
}

export const ContextValues = createContext(defaultValues)

const AppContext = (props) => {
    const [token, setToken] = useState(null)
    const [admin, setAdmin] = useState(null)
    return ( 
        <ContextValues.Provider value={{token, setToken, admin, setAdmin}}>
            {props.children}
        </ContextValues.Provider>
     );
}
 
export default AppContext;