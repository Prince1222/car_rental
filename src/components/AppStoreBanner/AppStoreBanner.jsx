import React from 'react';
import { TbBackground } from 'react-icons/tb';
import pattern from "../../assets/website/pattern.jpeg";
import PlayStoreImg from "../../assets/website/play_store.png";
import AppStoreImg from "../../assets/website/app_store.png";

const bannerImg ={
    backgroundImage:`url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    backgroundPostion:"center",
    height:"100%",
    width:"100%"
}
const AppStoreBanner = () => {
  return (
    <div className='container pb-14'>
      <div
      className='text-black py-10 sm:min-h-[400px]
      sm:grid sm:place-items-center rounded-xl'
      style={bannerImg}
      >
        <div>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 className='text-2xl text-center
                sm:text-4xl font-semibold font-serif'>Get Started with our app</h1>
                <p 
                data-aos="fade-up"
                className='text-center sm:px-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Nulla blanditiis nobis dolorum quod ex neque cumque quis et, quasi 
                     assumenda temporibus perferendis ullam rem at, vitae harum dolorem. 
                     Minus, provident.</p>
                     <div 
                     data-aos="fade-up"
                     className='flex justify-center
                     items-center gap-4 '>
                        <a href="#">
                            <img src={PlayStoreImg} alt=""
                            className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                            />
                        </a>
                        <a href="#">
                            <img src={AppStoreImg} alt=""
                            className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                            />
                        </a>
                     </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AppStoreBanner
