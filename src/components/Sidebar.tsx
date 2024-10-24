import React, {PropsWithChildren, useState} from 'react';

import "../styles/Sidebar.css"

export default function Sidebar(SidebarProps:PropsWithChildren<{}>){
    const [isOpen, setIsOpen] = useState(false)

    const toggleIsOpen = () => {setIsOpen(!isOpen)}

    return (<>
        <div className="sidebar sidebarButton" onClick={toggleIsOpen}>Opt</div>
        
        {isOpen&&
        <div className='sidebar sidebarContainer'>

            {SidebarProps.children}


        </div>
        }

    

    </>)
}