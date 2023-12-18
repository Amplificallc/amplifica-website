import React, {useState} from 'react'
import style from "../../../home.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Landing = () => {
  const [activeTab, setActiveTab] = useState(0)
  const services=[
    {
      id:1,
      title: "Web & Mobile App Development"
    },
    {
      id:2,
      title: "UI/UX Design"
    },
    {
      id:3,
      title: "Product Strategy & Consulting"
    },
    {
      id:4,
      title: "Quality Assurance & Testing"
    },
    {
      id:3,
      title: "Maintenance and Support"
    },
    
  ]
   const servicesDetail=[
    {
      id:1,
      title: "Web & Mobile App Development",
      subtext: "Creating intuitive, user-centric applications for seamless experiences.",
      mainText: "Transforming your ideas into engaging and functional applications is our forte. Whether it's a responsive website or a user-friendly mobile app, we specialize in creating intuitive, visually appealing, and high-performance digital platforms. From conceptualization to deployment, our development process focuses on delivering seamless user experiences across various devices, ensuring your audience remains captivated and connected.",
      src: "/web.gif"
    },
    {
      id:2,
      title: "UI/UX Design",
      subtext: "Elevating user engagement through captivating design experiences.",
      mainText: "User experience (UX) and user interface (UI) design are the cornerstones of exceptional digital products. We prioritize user-centric design principles to create interfaces that are not just visually striking but also intuitive and easy to navigate. Our design team meticulously crafts experiences that resonate with your audience, enhancing engagement and satisfaction while aligning seamlessly with your brand identity.",
      src: "/ui.gif"
    },
    {
      id:3,
      title: "Product Strategy & Consulting",
      subtext: "Guiding your vision from conception to execution.",
      mainText: "Navigating the digital landscape requires a comprehensive strategy. Our seasoned consultants work closely with you to define and refine your product strategy. From market analysis and competitor research to product roadmap planning and execution, we provide actionable insights and guidance every step of the way. Let us help you transform your vision into a well-defined and successful product.",
      src: "/web.gif"
    },
    {
      id:4,
      title: "Quality Assurance & Testing",
      subtext: "Ensuring impeccable performance and reliability.",
      mainText: "Quality is paramount in everything we deliver. Our dedicated QA experts ensure that your software is thoroughly tested across multiple scenarios and environments. From functionality and performance to security and scalability, we conduct rigorous testing to guarantee a flawless end-user experience. Trust us to identify and address any issues before deployment, ensuring a polished and reliable product.",
      src: "/web.gif"
    },
    {
      id:5,
      title: "Maintenance and Support",
      subtext: "Standing by your side post-launch to guarantee continued success.",
      mainText: "Our commitment to your success extends beyond the launch phase. We offer comprehensive maintenance and support services to keep your software running smoothly. Whether it's updates, troubleshooting, or enhancements, our support team remains accessible to address your concerns and ensure the continued optimal performance of your application. Count on us for ongoing assistance, allowing you to focus on your core business while we handle the technical aspects.  ",
      src: "/web.gif"
    },
   ]
  return (
    <main className={`${style.main} space-y-36`}>
      <section className={`${style.heroheight} flex flex-col justify-center items-center space-y-3`}>
      <h1 className="text-center text-5xl w-3/5 font-light mt-20 text-white leading-normal">We develop <span className='text-main font-medium backdrop-blur-3xl bg-white/20 px-3 w-48 h-24 rounded-lg'>custom software</span> <span className='text-main font-medium backdrop-blur-3xl bg-white/20 px-3 w-20 h-24 rounded-lg'> solutions</span> for businesses globally</h1>
      <div className='flex flex-row justify-center items-center space-x-3'>
      <Link href="">
        <button className='w-48 h-12 bg-main text-black font-semibold rounded-lg'>Get Started</button>
      </Link>
      <Link href="">
        <button className='w-48 h-12 border-2 border-main backdrop-blur-3xl bg-main/10 text-white font-medium rounded-lg'>Learn More</button>
      </Link>
      </div>
      </section>
      <section className=' flex flex-row justify-center space-x-5 items-center px-16'>
        <div className='w-1/2'>
        <Image src={'/aa.jpg'} width={500} height={600} alt="" className='rounded-lg'/>
        </div>
        <div className=' flex flex-col justify-center items-start w-1/2 space-y-2 '>
          <h2 className='text-6xl font-medium'>We don't just create. <span className='text-main font-bold'>We Impact.</span></h2>
          <p className='text-md leading-normal font-normal'>Amplifica is more than a software development company; we're agents of transformative change. We believe in the power of technology to shape the future, and we channel our expertise to create bespoke solutions that don't just meet objectives but catalyze impactful change. From ideation to execution, our team is dedicated to crafting software that resonates, disrupts, and leaves a lasting imprint. We embrace the challenge of not just creating but influencing industries, businesses, and communities, amplifying their potential through innovative, purpose-driven software development. At Amplifica, we're committed to making an enduring impact that transcends lines of code, propelling our clients toward success in an ever-evolving digital landscape.</p>
          </div>
      </section>
      <section className=' flex flex-row justify-center space-x-5 items-center px-16'>
        <div className=' flex flex-col justify-center items-start w-1/2 space-y-2 '>
          <h2 className='text-6xl font-medium'>Unleashing Innovation<span className='text-main font-bold'> Where Technology Leaves You Speechless</span></h2>
          <Link href="">
            <button className='bg-black text-white w-40 h-14 rounded-lg '>Learn More</button>
          </Link>
          </div>
          <div className='w-1/2'>
        <Image src={'/ll.jpg'} width={500} height={600} alt="" className='rounded-tl-sm rounded-br-sm rounded-tr-3xl rounded-bl-3xl'/>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center bg-grey py-10'>
        <div className='flex flex-col justify-center items-center space-y-2'>
          <h2 className='text-4xl font-medium text-white'>
            Our <span className='text-main font-semibold'>Solutions</span>
          </h2>
          <p className='text-white font-light w-1/2 text-center leading-normal'>
            From bespoke software development to seamless integration, our expertise spans across diverse sectors and
            technologies. We offer scalable and tailored services, including but not limited to
          </p>
          <div className='flex flex-row justify-center items-center space-x-5 py-5'>
            {services.map((service, id) => (
              <button
                key={service.id}
                className={`${
                  activeTab === id ? 'backdrop-blur-3xl bg-main/100 text-white' : 'hover:border-main backdrop-blur-3xl bg-main/10'
                } rounded-md border border-transparent hover:border-main backdrop-blur-3xl bg-main/10 text-main font-medium px-3 py-3`}
                onClick={() => setActiveTab(id)}
              >
                <span>{service.title}</span>
              </button>
            ))}
          </div>
          {servicesDetail.map((serviceD, id) => (
            <div
              className={`${activeTab === id ? 'block' : 'hidden'} flex flex-row justify-center items-center space-x-48 px-12 py-16`}
              key={serviceD.id}
            >
              <div className='flex flex-col justify-center items-start w-1/2 space-y-3'>
                <h3 className='text-white font-semibold text-4xl'>{serviceD.title}</h3>
                <h4 className='text-main font-medium text-lg'>{serviceD.subtext}</h4>
                <p className='text-white font-normal text-md'>{serviceD.mainText}</p>
                <Link href=''>
                  <button className='rounded-lg border border-main backdrop-blur-3xl bg-main/10 text-main px-3 py-3'>
                    Request A Quote
                  </button>
                </Link>
              </div>
              <div className='w-1/2'>
                <Image src={serviceD.src} width={450} height={600} alt={serviceD.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Landing