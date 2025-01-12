import React from 'react'
import { FaCoffee } from "react-icons/fa";
import coffee from "../assets/coffee_logo.png";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Services",
        link: "/#services",
    },
    {
        id: 3,
        name: "About",
        link: "/#about",
    },
];


const Navbar = () => {
    return (
        <>
        <div className='bg-gradient-to-r from-secondary to-secondary/90 shadow-md  text-white' >
            <div className='container py-2'>
                <div className='flex justify-between items-center'>
                    <div>
                        <a className='font-cursive flex justify-center items-center font-bold  text-2xl sm:text-3xl gap-2'>
                            <img src={coffee} className='w-14' />
                            Coffee Cafe
                        </a>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <ul className='hidden sm:flex items-center gap-4'>
                            {Menu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.link} className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200">{menu.name}</a>
                                </li>
                            ))}
                        </ul>

                        <button className='bg-primary/70  hover:scale-105 duration-200 flex items-center gap-2  text-base rounded-full text-white px-4 py-2' >
                            Order
                            <FaCoffee className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>
                    </div>
                </div>

            </div>

        </div>

        </>
    )
}

export default Navbar