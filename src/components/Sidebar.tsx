import React, {PropsWithChildren, useState} from 'react';

import "../styles/Sidebar.css"

export default function Sidebar(SidebarProps:PropsWithChildren<{}>){
    const [isOpen, setIsOpen] = useState(false)

    const toggleIsOpen = () => {setIsOpen(!isOpen)}

    return (<div className='sidebarContainer'>
        <div className="sidebar sidebarButton" onClick={toggleIsOpen}>Opt</div>
        
        {isOpen&&
        <div className='sidebar sidebarMenu'>

            {SidebarProps.children}


        </div>
        }

    

    </div>)
}