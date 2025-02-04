import React from 'react';
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className='dark:bg-dark
    dark:text-white duration-300
    sm:min-h-[600px] sm:grid sm:place-items-center'>
      <div className='container'>
      <div className='grid grid-cols-1
      sm:grid-cols-2 place-items-center'>
        <div>
            <img src={CarPng} alt="" />
        </div>
        <div>
            <div>
                <h1
                className='text-3xl
                sm:text-4xl font-bold
                font-serif'
                >About us</h1>
                <p>
                  Lorem ipsum dolor sit, amet 
                  consectetur adipisicing elit. Sed 
                  illum molestias a, rerum 
                  exercitationem itaque . 
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Non possimus 
                    eos, id ab unde aspernatur
                </p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
