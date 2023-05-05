import React, { useState } from 'react'
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

import './sidebar.css';
const Sidebar = () => {
    const [activeId, setActiveId] = useState(1);

    return (

        <div className='sidebar_main bg-[#212A3E] text-white font-poppins sm:block sm:w-[20%] hidden text-black p-2 overflow-hidden h-screen fixed top-0'>
            <div className="sname p-3 mt-5 mb-5">
                <h1>KHATAMI</h1>
            </div>
            <div className='flex h-screen absolute top-0 items-center'>


                <div className="all_links flex justify-center lists text-white font-bold  ">
                    <ul>
                        {navLinks.map((item, inedx) => {
                            return <li key={item.id} className={`mt-5 mb-5 hover:text-black hover:bg-[#b3c2de] p-4 
                            ${item.__id === activeId ? 'active' : ''}`}
                                onClick={() => { setActiveId(item.__id); }}
                            >
                                <Link to={item.id}>
                                    {item.title}
                                </Link>

                            </li>

                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;