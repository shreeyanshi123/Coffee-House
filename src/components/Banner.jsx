import React from 'react'
import texture from "../assets/website/coffee-texture.jpg";
import BannerImg from "../assets/website/coffee-white.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


const bgImage = {
  backgroundImage: `url(${texture})`,
  width: "100%",
  backgroundColor: "#270c03",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

}


const Banner = () => {
  return (
    <>
    <span id='about'></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className='container'>
            <div className='grid sm:grid-cols-2 grid-cols-1 '>
              <div>
                <img src={BannerImg} className='max-w-[430px] w-f ull mx-auto spin' />
              </div>
              <div className='flex flex-col justify-center gap-6 text-black' >
                <h1 className='font-cursive text-3xl sm:text-4xl text-black font-bold' >Premimum Blen Coffee</h1>
                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium laboriosam cupiditate! Odio accusantium, nihil tempore beatae vel vitae, voluptatibus voluptas nesciunt laborum possimus minus recusandae voluptate, esse error quasi.</p>
                <div className="grid grid-cols-2 gap-6 overflow-hidden">

                  <div className='space-y-5'>
                    <div className='flex gap-2 items-center'>
                      <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span>Premium Coffee</span>
                    </div>

                    <div className='flex gap-2 items-center'>
                      <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span>Hot Coffee</span>
                    </div>

                    <div className='flex gap-2 items-center'>
                      <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                      <span>Cold Coffee</span>
                    </div> 
                  </div>
                  <div
                    
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive ">
                      Tea Lover
                    </h1>
                    <p className="text-sm text-gray-500">
                      Much like writing code, brewing the perfect cup of tea
                      requires patience, precision, and a dash of passion to
                      create a comforting blend of flavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner