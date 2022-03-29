/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Navbar(): JSX.Element {
    // get the active Route path
    let isLoginPage = useLocation().pathname === '/' ? true : false

    // let [isLoggedIn, setIsLoggedIn] = useState(false);
    // function handleLogOut() { setIsLoggedIn(false) };

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    function handleSetMobileNavOpen() { setMobileNavOpen(!isMobileNavOpen) };

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    function handleSetDropdownOpen() { setDropdownOpen(!isDropdownOpen) };

    function handleLogOut() { setDropdownOpen(!isDropdownOpen); localStorage.removeItem('token'); };

    // if the active Route path is Login, then disable Navbar
    return isLoginPage ? <nav></nav> : <nav className="bg-blue-700 shadow-md w-full z-50">
        {/* <!-- container --> */}
        <div className="flex flex-wrap justify-between items-center px-4 py-3 mx-auto lg:space-x-4">
            <div className='flex'>
                {/* <!-- brand --> */}
                <Link className='hidden lg:block' to={`/dashboard`}><img src="./images/logo2.png" alt="Logo2" /></Link>
                {/* <!-- brand --> */}

                {/* <!-- leftMenu toggler btn --> */}
                <button className="w-10 h-10 ml-0 lg:ml-32 rounded-md outline-none focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {/* <!-- leftMenu toggler btn --> */}
            </div>

            {/* <!-- toggler btn --> */}
            <button onClick={handleSetMobileNavOpen} className="inline-flex items-center justify-center w-10 h-10 ml-auto text-white border rounded-md outline-none lg:hidden focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {/* <!-- toggler btn --> */}

            {/* <!-- menu --> */}
            <div className={`w-full mt-2 lg:inline-flex lg:w-auto lg:mt-0 ${isMobileNavOpen ? 'flex' : 'hidden'}`}>
                <ul className="flex flex-col w-full space-y-2 lg:mr-8 lg:w-auto lg:flex-row lg:gap-5 lg:items-center lg:space-y-0 lg:space-x-2">
                    {/* <!-- Search Form --> */}
                    <li>
                        <form className="flex">
                            <input className="rounded-l-sm w-48 px-4 py-2" placeholder="Search" />
                            <button className="rounded-r-sm bg-yellow-400 font-bold px-4">Search</button>
                        </form>
                    </li>
                    {/* <!-- Search Form --> */}

                    {/* <!-- dropdown --> */}
                    <li className="relative">
                        {/* <!-- dropdown Button --> */}
                        <button className="flex gap-2 items-center font-medium text-white" onClick={handleSetDropdownOpen}>
                            <img className="" src="images/profile.png" alt="Profile" />
                            Unis Bandri
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {/* <!-- dropdown Button --> */}

                        {/* <!-- dropdown menu --> */}
                        <div className={`right-0 p-2 mt-1 bg-white rounded-md shadow-xl lg:absolute ${isDropdownOpen ? 'flex flex-col' : 'hidden'}`}>
                            <ul className="space-y-2 lg:w-48">
                                <li>
                                    <Link className='flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-200 hover:text-black' to={`/`} onClick={handleLogOut}>Log Out</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- dropdown menu --> */}
                    </li>
                    {/* <!-- dropdown --> */}
                </ul>
            </div>
            {/* // <!-- menu --> */}
        </div>
        {/* // <!-- container --> */}
    </nav >;
}