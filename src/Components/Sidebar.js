import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className='SidebarList'>
                {
                    //sidebar datat bemappelem
                    SidebarData.map((page) => {

                        //gyors destructure a bejárt objectből
                        const { title, icon, path } = page;

                        //router linkeket adok vissza a bejárást követően
                        return (

                            <Link
                                to={path}
                            >
                                <li className='row'>
                                    <div id='icon'>{icon}</div>
                                    <div id='title'>{title}</div>
                                </li>
                            </Link>
                        )
                    })

                }
            </ul>
        </div >
    )
}

export default Sidebar