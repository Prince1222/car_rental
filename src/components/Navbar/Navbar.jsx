import React from 'react'
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const NavLinks = [
    {
        id: "1",
        name: "HOME",
        link: "/#",
    },
    {
        id: "2",
        name: "CARS",
        link: "/#cars",
    },
    {
        id: "3",
        name: "ABOUT",
        link: "/#about",
    },
    {
        id: "4",
        name: "BOOKING",
        link: "/#booking",
    },
]


const Navbar = ({ theme, setTheme }) => {

    return (
        <nav className='shadow-md bg-white dark:bg-gray-900 text-black dark:text-white transition duration-300'>

            <div className='container md:py-0'>
                <div className="flex
          justify-between items-center">
                    <div>
                        <h1 className='text-3xl
                  font-bold font-serif'>Car Rental</h1>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {
                                NavLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            className='inline-block py-2 hover:border-b-2 hover:text-primary hover:border-primary tranistion-colors duration-500 text-lg font-medium'
                                            href={data.link}>
                                            {data.name}</a>
                                    </li>
                                ))}

                        </ul>
                    </div>
                    <div>
                        {
                            theme === "dark" ? (
                                <BiSolidSun
                                    onClick={() => setTheme("light")}
                                    className='text-2xl' />
                            ) : (
                                <BiSolidMoon
                                    onClick={() => setTheme("dark")}
                                    className='text-2xl' />
                            )}
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;



