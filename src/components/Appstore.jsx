import React from 'react'
import bgImg from '../assets/website/coffee-beans-bg.png'
import PlayStoreImg from "../assets/website/play_store.png";
import AppStoreImg from "../assets/website/app_store.png";

const bgStyle = {
  backgroundImage: `url(${bgImg})`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
}
const Appstore = () => {
  return (
    <>
      <div style={bgStyle} className='py-14'>
        <div className='contianer'>
          <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
            <div className='space-y-6 max-w-xl mx-auto'>
              <h1 className='text-3xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3'>Coffee Cafe is available for Android and IOS</h1>
              <div className='flex sm:justify-start justify-center'>
                <a href='#'>
                  <img src={PlayStoreImg} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                </a>
                <a href='#'>
                  <img src={AppStoreImg} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Appstore