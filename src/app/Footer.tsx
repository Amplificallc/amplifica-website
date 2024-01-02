import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { FaLinkedin,FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
    interface navlink{
        id:number,
        text: string,
        path: string,
    
    }
    interface contactlink{
        id:number,
        text: string
    
    }
    const navlinks:navlink[]=[
    
        {
            id: 1,
            text: 'About Us',
            path: "/about"
        },
        {
            id: 2,
            text: 'Services',
            path: "/services"
        },
        {
            id: 3,
            text: 'Join Our Team',
            path: "/careers"
        },
        {
            id: 4,
            text: 'Academy',
            path: "/contact"
        }
    ]
    const privacylinks:navlink[]=[
    
        {
            id: 5,
            text: 'Terms and Conditions',
            path: "/about"
        },
        {
            id: 6,
            text: 'Privacy Policies',
            path: "/services"
        },
    ]
    const contactlinks:contactlink[]=[
    
        {
            id: 7,
            text: 'amplificallc@gmail.com'
        },
        {
            id: 8,
            text: '(+233) 55 730 2022',
        },
    ]
  return ( 
    <footer className=" nav bg-main md:h-screen px-4 md:px-16 relative mt-48 pt-16 space-y-14 py-14 md:pb-3">
        <section className='space-y-10'>
            <h1 className=' text-5xl md:text-6xl font-bold text-white md:w-3/4 leading-tight'>Ready to build something exciting?</h1>
            <Link href="/contact">
                <button className='bg-white h-14 w-40 rounded-md font-bold text-xl hover:bg-black hover:text-white'>Let's Talk</button>
            </Link>
        </section>
        <section className='flex flex-col md:flex-row  justify-start items-start  space-y-16 md:space-y-0 md:space-x-36'>
            <div className='flex flex-col space-y-2'>
                <h2 className='text-white font-semibold text-2xl md:text-lg md:font-medium'>Company</h2>
                {navlinks.map((navlink, id)=>
                (
                    <div key={navlink.id}>
                   <Link href={navlink.path}>
                    <h2 className="text-white  text-xl md:text-sm font-normal">{navlink.text}</h2>
                   </Link>
                   </div>
                ))}
            </div>
            <div className='flex flex-col space-y-2'>
            <h2 className='text-white font-semibold text-2xl md:text-lg  md:font-medium'>Legal</h2>
                {privacylinks.map((privacylink, id)=>
                (
                    <div key={privacylink.id}>
                   <Link href={privacylink.path}>
                    <h2 className="text-white text-xl font-normal md:text-sm">{privacylink.text}</h2>
                   </Link>
                   </div>
                ))}
            </div>
            <div className='flex flex-col space-y-2'>
            <h2 className='text-white font-semibold text-2xl md:text-lg  md:font-medium'>Contact Us</h2>
            <p className="text-white text-xl font-normal md:text-sm w-3/4 py-3">We'd love to hear from you soon</p>
                {contactlinks.map((contactlink, id)=>
                (
                    <div key={contactlink.id}>
                    <h2 className="text-white text-xl font-normal md:text-sm">{contactlink.text}</h2>
                   </div>
                ))}
            </div>
            <div className='flex flex-row  space-x-7'>
                    <FaLinkedin className="text-white text-5xl md:text-4xl "/>
                    <FaInstagram className="text-white text-5xl md:text-4xl "/>
                    <RiTwitterXFill className="text-white text-5xl md:text-4xl "/>
            </div>
        </section>
        <section className="flex flex-col md:flex-reverse">
            <div>
                    <h3 className='text-white text-center '>Copyright 2023.&#169; <span className='font-semibold'>Amplifica</span></h3>
                </div>
            </section>
    </footer>
  )
}

export default Footer