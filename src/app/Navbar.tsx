"use client"
import {motion} from "framer-motion"
import {useState} from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import {RiCloseCircleLine} from "react-icons/ri"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
const Navbar = () => {
    const [menuOpen, setMenuOpen]= useState(false)
const handleMenuOpen=()=>
{
    console.log(menuOpen)
    setMenuOpen(true);
}
const handleMenuClose=()=>
{
    setMenuOpen(false);
}
interface navlink{
    id:number,
    text: string,
    path: string,

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
        text: 'Approach',
        path: "/our-approach"
    },
    {
        id: 4,
        text: 'Blog',
        path: "/blog"
    }
]
const pathname = usePathname();
  return (
   <header className="fixed top-0 left-0 z-40 right-0 h-14 shadow-md bg-white flex flex-row justify-between items-center shrink-0 px-10 lg:px-24 py-10 ">
    <div className="logo-section">
        <Link href="/home">
            <Image src={'/Logo-main.png'} width={30} height={30} alt="amplifica"/>
        </Link>
    </div>

    <div className= 'lg:hidden'>
        <RiMenu3Fill  className="text-white text-3xl font-bold hover:text-main" onClick={handleMenuOpen}/>
           {/* Mobile Menu */}
         {
            menuOpen && 
            (
                <div className='relative'>
                <motion.nav
                initial={{
                    x:'150vw',
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={
                    {
                        type: 'spring',
                        duration:1,
                        delay: 0.3
                    }
                }
                 className="navabar fixed z-40 top-0 right-0  w-full  bg-main flex-col py-16 justify-even items-center ">
                    <div className="absolute top-3 right-5 text-3xl" onClick={handleMenuClose}>
                    <RiCloseCircleLine />
                    </div>
                    

                {navlinks.map((navlink, id)=>
                (
                   <div key={navlink.id} className="text-3xl py-6 px-6">
                    <Link href={navlink.path} className={` text-black nav-link text-md font-light ${pathname === navlink.path ? 'active': "" }  hover:font-bold font-medium`} onClick={handleMenuClose}>{navlink.text}</Link>
                   </div> 
                ))}
                    </motion.nav>
                    </div>
            )
         }
           
    </div>
    {/* Desktop Menu */}
   <div>
    <nav className="navabar-desktop hidden lg:flex w-full bg-transparent  flex-row justify-even items-center space-x-10">
    {navlinks.map((navlink, id)=>
    (
       <div key={navlink.id} className="text-lg">
        <Link href={navlink.path} className={`text-black nav-link text-md font-light ${pathname === navlink.path ? 'active': "" }  hover:font-bold lg:hover:text-main lg:hover:font-semibold font-medium`}>{navlink.text}</Link>
       </div> 
    ))}
        </nav>
        </div>
    
<div className="contact-button hidden lg:block">
    <Link href="/contact">
        <button className="contact-btn bg-main w-40 h-12 font-semibold text-md rounded-md text-black hover:scale-x-100">Contact Us</button>
    </Link>
</div>
   </header>
  )
}

export default Navbar