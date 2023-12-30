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
        text: 'Careers',
        path: "/careers"
    },
    {
        id: 4,
        text: 'Contact',
        path: "/contact"
    }
]
const pathname = usePathname();
  return (
   <header className="relative h-14 bg-white flex flex-row justify-between items-center px-2 lg:px-24 py-10 ">
    <section className=" flex flex-row justify-center items-center space-x-48 px-3">
    <div className="logo-section mt-3">
        <Link href="/home">
            <Image src={'/Logo-main.png'} width={200} height={30} alt="amplifica"/>
        </Link>
    </div>
    <div className="lg:hidden">
        <RiMenu3Fill  className="text-black text-3xl font-bold hover:text-main" onClick={handleMenuOpen}/>
        </div>
    </section>
   

    <div className= 'lg:hidden'>
       
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
                    <div className="absolute top-3 right-5 text-4xl" onClick={handleMenuClose}>
                    <RiCloseCircleLine className="text-white" />
                    </div>
                    

                {navlinks.map((navlink, id)=>
                (
                   <div key={navlink.id} className="text-3xl py-6 px-6">
                    <Link href={navlink.path} className={` text-white nav-link text-md font-light ${pathname === navlink.path ? 'active': "" }  hover:font-bold font-medium`} onClick={handleMenuClose}>{navlink.text}</Link>
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
       <div key={navlink.id} className="text-md">
        <Link href={navlink.path} className={`text-black nav-link text-md font-normal ${pathname === navlink.path ? 'active': "" }  hover:font-bold lg:hover:text-main lg:hover:font-semibold font-medium`}>{navlink.text}</Link>
       </div> 
    ))}
        </nav>
        </div>
   </header>
  )
}

export default Navbar