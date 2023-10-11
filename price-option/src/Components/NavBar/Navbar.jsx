import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [open, setOpen] = useState(false)


    const routes = [
        { path: '/', id: 1, name: 'Home' },
        { path: '/dashboard', id: 2, name: 'Dashboard' },
        { path: '/user/:id', id: 3, name: 'User Profile' },
        { path: '/protected', id: 4, name: 'Protected Route' },
        { path: '*', id: 5, name: 'Not Found' },
      ];
      


    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                } 
            
            </div>

            <ul className={`md:flex absolute md:static duration-1000 bg-yellow-200 px-6  ${open ? 'top-16' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;