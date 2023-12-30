"use client"
import React,{useState} from 'react'
import style from "../../../about.module.css"
import ContForm from '../components/ContForm'




const page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    industry: "",
    company: "",
    country: "",
    message: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
   
    <section className={`${style.main} flex flex-col md:flex-row justify-center items-center md:h-screen md:pt-24  py-14 px-2 md:px-16`} >
      <div className='md:w-1/2'>
        <h1 className=' text-4xl md:text-6xl font-bold text-grey'>Get In Touch. Let's Bring Your Vision To Reality.</h1>
        <p className='leading-normal text-lg font-normal w-4/5 pt-3'>Got ideas? Let's chat! Whether it's a project discussion or a simple hello, our team is here. Let's connect and transform your vision into reality together!</p>
      </div>
      <div className='md:w-1/2 mt-24'>
        <div className='md:border border-gray-400 rounded-md px-4 md:p-10'>
        <ContForm  formData={formData} handleInputChange={handleInputChange}/>
        </div>
      </div>
      
    </section>
  )
}

export default page