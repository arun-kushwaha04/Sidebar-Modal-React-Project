import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);

    const openSideBar = ()=>{
        setIsSidebarOpen(true);
    }
    const closeSideBar = ()=>{
        setIsSidebarOpen(false);
    }
    const openModal = ()=>{
        setIsModalOpen(true);
    }
    const closeModal = ()=>{
        setIsModalOpen(false);
    }
    return <AppContext.Provider value={{
        isSidebarOpen,isModalOpen,openSideBar,closeSideBar,openModal,closeModal
    }}>
        {children}
    </AppContext.Provider>
}

//custom hook
const UseGlobal = () => {
    const data = useContext(AppContext);
    return data;
}

export {AppContext,AppProvider,UseGlobal} ;