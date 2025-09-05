import React, { useState } from 'react'
import image1 from '../assets/graduate.jpg'
import staffArray from '../assets/array.js'
import { FaChevronRight, FaChevronLeft, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Staffdata = () => {
     
    const [current, setCurrent] = useState(0);
   const staff = staffArray[current];

    const nextStaff = () => {
        setCurrent((prev) => (prev + 1) % staffArray.length);
    };

     const prevStaff = () => {
    setCurrent((prev) =>
      prev === 0 ? staffArray.length - 1 : prev - 1
    );
  };


return (
    <div className='flex flex-col justify-center items-center h-screen w-[1200px] m-auto p-6'>
        <h1 className='text-3xl font-black pb-2 underline mb-6'>
            Meet Our Dedicated Staff Profile
        </h1>
        <div className='flex gap-10 rounded-lg'>
            <div className='bg-amber-600 w-[400px] h-[400px] rounded-lg'>
                <img className='w-[400px] h-[400px] rounded-lg' src={staff.image} alt="" srcSet="" />
            </div>
            <div className='mr-3 p-6 bg-gray-100 max-w-[700px] h-[400px]'>
                <h1 className='text-3xl font-black pb-2 '>{staff.name}</h1>
                <h2 className='font-black pb-2 italic'>{staff.title}</h2>
                <p className='text-lg line-height:1'>
                    {staff.description}
                </p>
                <div className='flex gap-3 mt-10'>
                    <button className='bg-[#A22531] p-3 rounded-lg hover:bg-gray-200'><FaFacebook /></button>
                    <button className='bg-[#A22531] p-3 rounded-lg hover:bg-gray-200'><FaTwitter /></button>
                    <button className='bg-[#A22531] p-3 rounded-lg hover:bg-gray-200'><FaLinkedin /></button>
                    <button className='bg-[#A22531] p-3 rounded-lg hover:bg-gray-200'><FaInstagram /></button>
                </div>
            </div>
        </div>
       <div className='flex gap-3 justify-between w-[1200px] '>
        <button onClick={prevStaff} className='bg-[#A22531] p-3 rounded-l-lg rounded-lg hover:bg-gray-200 mr-5 mt-5'><FaChevronLeft /></button>
        <button className='bg-[#A22531] p-3 rounded-r-lg rounded-lg hover:bg-gray-200 mr-6 mt-5 ' onClick={nextStaff}><FaChevronRight /></button>
       </div>
    </div>
)
}

export default Staffdata