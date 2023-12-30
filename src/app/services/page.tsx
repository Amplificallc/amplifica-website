import React from 'react'
import styles from "../../../about.module.css"
import Image from 'next/image'

const page = () => {
  return (
    <main className='space-y-10 pb-5'>
      <section className='md:w-3/4  px-2 flex flex-col justify-center items-start md:px-16 py-7 md:py-24 '>
        <h1 className={`${styles.main} text-2xl md:text-5xl font-bold leading-tight`}> We're a passionate collective of <span className='text-main'>product visionaries, designers, and developers</span>  dedicated to empowering businesses in creating outstanding product</h1>
      <p className={`${styles.main} py-2 text-md md:text-lg font-normal leading-tight md:w-3/4`}>Delve into our expertise and experience crafted to enhance Your business operations, innovation, and success story</p>
      </section>
      <section className='flex flex-col justify-center items-center space-y-24 md:px-16 px-2'>
        <div className='flex  flex-col md:flex-row justify-between items-start md:items-center md:space-x-72 space-y-4 md:space-y-0'>
        <div className='md:w-1/2'>
          <Image src={'/hh.png'} width={600} height={300} alt='product design team'/>
        </div>
        <div className='md:w-1/2 space-y-2'>
         <div>
         <hr className='bg-main h-1 w-36'/>
         <h1 className={`${styles.heading} text-black text-2xl font-semibold p-2`}>Strategy and Consulting</h1>
         </div>
          <p className={`${styles.heading} text-black text-md font-normal`}>Our team offers tailored solutions, leveraging market analysis, innovation strategies, and comprehensive consulting to optimize your business's potential. Let us partner in sculpting a roadmap that propels your enterprise towards sustainable growth and success.</p>
        </div> 
        </div>
        <div className='flex  flex-col md:justify-between md:flex-row-reverse md:gap-5  justify-between items-start md:items-center  space-y-4 md:space-y-0'>
        <div className='md:w-1/2'>
          <Image src={'/webdev.jpg'} width={600} height={300} alt='product design team'/>
        </div>
        <div className='md:w-1/2 space-y-2'>
       <div>
        <hr className='bg-main h-1 w-36'/>
          <h1 className={`${styles.heading} text-black text-2xl font-semibold p-2`}>Web Development</h1>
          </div>
          <p className={`${styles.heading} text-black text-md font-normal w-4/5`}> Our team leverages the latest technologies and industry best practices to engineer scalable, feature-rich web solutions tailored to your unique objectives. From intuitive user interfaces to robust backend functionalities, we craft versatile web applications that elevate your digital presence and streamline your operations, ensuring an impactful online footprint.</p>
        </div> 
        </div>
        <div className='flex  flex-col md:flex-row justify-center items-start md:items-center md:space-x-72 space-y-4 md:space-y-0'>
        <div className='md:w-1/2'>
          <Image src={'/dev.jpg'} width={600} height={300} alt='product design team'/>
        </div>
        <div className='md:w-1/2 space-y-2'>
         <div>
         <hr className='bg-main h-1 w-36'/>
          <h1 className={`${styles.heading} text-black text-2xl font-semibold p-2`}>Mobile App Development</h1>
         </div>
        
          <p className={`${styles.heading} text-black text-md font-normal`}>Amplifica specializes in transforming ideas into captivating mobile experiences. From ideation to deployment, our dedicated team merges cutting-edge technology with user-centric design to create intuitive, high-performance mobile applications. Whether iOS or Android, our custom solutions cater to diverse needs, delivering seamless, engaging, and scalable apps that captivate your audience.</p>
        </div> 
        </div>
        <div className='flex  flex-col md:flex-row-reverse justify-between items-start md:items-center md:gap-5 space-y-4 md:space-y-0'>
        <div className='md:w-1/2'>
          <Image src={'/pd.png'} width={600} height={300} alt='product design team'/>
        </div>
        <div className='md:w-1/2 space-y-2'>
         <div>
         <hr className='bg-main h-1 w-36'/>
          <h1 className={`${styles.heading} text-black text-2xl font-semibold p-2`}>Product Design</h1>
         </div>
          <p className={`${styles.heading} text-black text-md font-normal`}>Our product design service is a meticulous blend of artistry and functionality, aimed at creating compelling experiences. From ideation to user testing, we sculpt interfaces that captivate and functionalities that resonate. Through a human-centric approach, we craft solutions that harmonize user needs with business objectives, breathing life into visionary concepts and shaping them into user-centric realities.</p>
        </div> 
        </div>
      </section>
    </main>
  )
}

export default page