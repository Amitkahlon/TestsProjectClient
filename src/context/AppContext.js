import React, { createContext, useState } from 'react';

const defaultValues = {
    token: {},
    setToken: () => {},
}

export const ContextValues = createContext(defaultValues)

const AppContext = (props) => {
    const [token, setToken] = useState(null)
    return ( 
        <ContextValues.Provider value={{token, setToken}}>
            {props.children}
        </ContextValues.Provider>
     );
}
 
export default AppContext;