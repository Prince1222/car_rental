import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData =[
    {
        name:"Best Price",
        icon:(
            <FaCameraRetro className='text-5xl
            text-primary group-hover:text-black
            duration-300' />
        ),
        link:"#",
        description: " Best price any one can afford such deals",
        aosDelay: "0",
    },
    {
        name:"Fast and  Safe",
        icon:(
            <GiNotebook className='text-5xl
            text-primary group-hover:text-black
            duration-300' />
        ),
        link:"#",
        description: " Best price any one can afford such deals",
        aosDelay: "500",
    },
    {
        name:"Best Price",
        icon:(
            <SlNote className='text-5xl
            text-primary group-hover:text-black
            duration-500' />
        ),
        link:"#",
        description: " Best price any one can afford such deals",
        aosDelay: "1000",
    }

]
const Services = () => {
  return (
    <div className='py-14 dark:bg-black
        dark:text-white sm:min-h[600px] sm:grid sm:place-items-center'>
      <div className="container">
        <div className='pb-12'>
            <h1
            className='text-3xl font-semibold text-center font-serif
            sm:text-4xl'
            >Why Choose US</h1>
        </div>
        <div className='grid grid-cols-1
        sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {skillsData.map((skill) => (
                    <div
                    key={skill.name}
                    data-aos="faade-up"
                    data-delay={skill.aosDelay}
                    className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark
                     hover:bg-primary duration-300 text-white hover:text-black rounded-lg'

                    >
                        <div className='grid place-items-center'>{skill.icon}</div>
                        <h1>{skill.name}</h1>
                        <p>{skill.description}</p>
                        <a href={skill.link}>Learn More</a>
                    </div>
                ))}
        </div>
      </div>
    </div>
  )
}

export default Services
