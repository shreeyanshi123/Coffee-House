import React from 'react'
import photo from "../assets/coffee2.png"
export const Hero = () => {
    return (
        <>
            <div className='min-h-[550px] sm:min-h-[550px] bg-brandDark flex justify-center items-center text-white'>
                <div className='pb-8 container sm:pb-0'  >
                    <div className='grid sm:grid-cols-2 grid-cols-1'>
                        <div className='flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                            <h1 className='lg:text-6xl sm:6xl text-7xl font-bold'>
                            We serve the richest{" "}
                                <span className='bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive' >Coffee </span>
                                {" "} in the city
                            </h1>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">Coffee And Code
                                </button>
                            </div>

                        </div>
                        <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
                            <img src={photo} className='w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin ' />
                            <div className='bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10'>
                                <h1 className='text-white'>Hey Coder</h1>
                            </div>
                            <div className='bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10'>
                                <h1 className='text-white'>Best Coffee</h1>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

