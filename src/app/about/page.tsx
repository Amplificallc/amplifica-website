import React from 'react'
import Image from 'next/image';
import style from "../../../about.module.css"
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaUsersCog } from "react-icons/fa";
import { AiTwotoneCode } from "react-icons/ai";
import { PiRecycleBold } from "react-icons/pi";

const page = () => {
  return (
    <main className={`space-y-48 ${style.main}`}>
    <section className=" h-screen flex flex-col-reverse md:flex-row justify-center items-start px-2 md:px-16 md:py-4 mt-20">
      <div className='flex flex-col justify-center items-start md:w-1/2'>
      <h1 className='text-grey text-3xl md:text-6xl font-semibold leading-tight'>Unlocking the full prowess of every growing company through <span className=' text-main font-extrabold'>world-class</span> product development.</h1>
      <p className=" text-lg leading-normal font-normal pt-4">Our innovative approach reshapes the process, unlocking unparalleled results that propel every company towards boundless success. Through meticulous strategy and relentless dedication, we craft solutions designed to elevate, ensuring your journey isn't just promising, but groundbreaking.</p>
      </div>
      <div className='md:w-1/2'>
        <Image src={'/abt.png'} width={3000} height={300} alt='amplifica-team' className='scale-075'/>
      </div>
    </section>
    <section className='md:px-10 px-2'>
      <div className='flex flex-col justify-center items-start md:p-10 md:w-3/4  bg-white  space-y-3'>
        <p className=' text-3xl md:text-4xl font-semibold text-grey'>"We are a dynamic tech company dedicated to innovation. We specialize in crafting transformative digital solutions that revolutionize industries. Our mission is to empower businesses with forward-looking strategies and top-notch technologies to succeed in an ever-evolving digital world."</p>
        <h2 className='text-gray-600 text-xl'>Selasie Sepenu - Co-founder, Team Lead</h2>
      </div>
    </section>
    <section className='grid md:grid-cols-2 gap-8 place-content-center md:px-16 px-2'>
     <div className='flex flex-col bg-white shadow-md rounded-xl px-8 py-12 space-y-2'>
      <div className='text-7xl'>
      <FaUsersViewfinder className='bg-green-200 font-bold  text-green-900 p-2 rounded-xl shadow-sm'/>
      </div>
    <h2 className='text-2xl font-semibold'>Experienced Team</h2>
    <p className='text-lg font-light'>
    Our team comprises seasoned experts with extensive industry experience, fostering creativity and expertise in delivering impactful results
    </p>
     </div>
     <div className='flex flex-col bg-white shadow-md rounded-xl px-8 py-12 space-y-2'>
      <div className='text-7xl'>
      < AiTwotoneCode  className='bg-red-200 font-bold  text-red-500 p-2 rounded-xl shadow-sm'/>
      </div>
    <h2 className='text-2xl font-semibold'>Innovative Solutions</h2>
    <p className='text-lg font-light'>
    Amplifica is known for its innovative approach in crafting cutting-edge digital solutions tailored to meet diverse business needs.    </p>
     </div>
    
     <div className='flex flex-col bg-white shadow-md rounded-xl px-8 py-12 space-y-2'>
      <div className='text-7xl'>
      < FaUsersCog  className='bg-purple-200 font-bold  text-purple-500 p-2 rounded-xl shadow-sm'/>
      </div>
    <h2 className='text-2xl font-semibold'>Client-Centric Approach</h2>
    <p className='text-lg font-light'>
    We prioritize our clients' needs, offering personalized services and solutions, ensuring satisfaction and success at every step of the journey.  
    </p>
       </div>
    
     <div className='flex flex-col bg-white shadow-md rounded-xl px-8 py-12 space-y-2'>
      <div className='text-7xl'>
      < PiRecycleBold   className='bg-blue-200 font-bold  text-blue-500 p-2 rounded-xl shadow-sm'/>
      </div>
    <h2 className='text-2xl font-semibold'>Continuous Evolution</h2>
    <p className='text-lg font-light'>
    At Amplifica, we thrive on continuous learning and evolution, adapting to the latest technologies and trends to offer progressive solutions in a rapidly changing digital landscape. </p>    </div>
    </section>
    <section className='md:px-0 px-2' >
      <div className='flex flex-col justify-center items-center'>
        <h2 className=' text-4xl md:text-5xl font-semibold text-center'>We have a <span className='text-main font-bold'>global</span> presence</h2>
        <p className='text-lg font-light md:w-3/4 text-center pt-5'>Spanning continents and time zones, our full remote team fosters a global reach, transcending boundaries to deliver innovative solutions and services worldwide.</p>
        <Image src={'/map.jpg'} width={900} height={600} alt="" className='md:scale-125 scale-150 pt-24'/>
      </div>
    </section>
    </main>
  )
}

export default page