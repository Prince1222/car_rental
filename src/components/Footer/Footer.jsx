import React from 'react'
import { FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-100 dark:bg-dark
      mt-14 rounded-t-3xl">
        <div className='grid mf>grid-col-3 py-5'>
            {/* compnaz  details */}
            <div className='grid md:grid-cols-3 py-5'>
              <h1 className='text-3xl font-bold sm:text-left text-justify mb-3'>Car Rental</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam autem repellendus pariatur sint at quo hic earum, temporibus, eos eveniet est laboriosam architecto exercitationem tempore animi incidunt, ratione repellat rem?</p>
            </div>
            <br />
            <div className='flex items-center
            gap-3
            '>
              <FaLocationArrow/>
              <p>Balaju,Kathmandu</p>
            </div>
            <div className='flex items-center
            gap-3'>
            <FaMobileAlt/>
            <p>+977 9823565656</p>
            </div>
            {/* social Handles */}
            <div className='flex items-center  gap-3 mt-6'>
              <a href="#">
                <FaInstagram className='text-3xl 
                :hover:text-primary duration-300'/>
              </a>
              <a href="#">
                <FaFacebook className='text-3xl 
                :hover:text-primary duration-300'/>
              </a>
              <a href="#">
                <FaLinkedin className='text-3xl 
                :hover:text-primary duration-300'/>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
