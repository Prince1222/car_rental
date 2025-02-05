import React from 'react'

const CarListData = [
    {
      name:"BNW UX",
      price:100,
      image:whiteCar,
      aosDelay:"0",  
    },
    {
        name:"KIA UX",
        price:100,
        image:whiteCar,
        aosDelay:"0",  
      },
      {
        name:"KIA UX",
        price:100,
        image:whiteCar,
        aosDelay:"0",  
      },
        

]
const CarList = () => {
  return (
    <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white'>
      <div className="container">
        {}
        <h1 className='text-3xl sm:text-4xl font-semibold font-serif
        mb-3'>Car List</h1>
        <p data-aos="fade-up" 
        className='text-sm pb-10'>Choose your car accordinf to your need
            and requirement.
        </p>
    {/*Car Listing  cards */}
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2md:grid-cols-3 gap-16'>
            {
                CarList.map((car) =>{

                })
            }

        </div>
    </div>
      </div>
    </div>
  )
}

export default CarList
