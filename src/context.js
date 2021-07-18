import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    return <AppContext.Provider value='hello'>
        {children}
    </AppContext.Provider>
}

//custom hook
const UseGlobal = () => {
    const data = useContext(AppContext);
    return data;
}

export {AppContext,AppProvider,UseGlobal} ;