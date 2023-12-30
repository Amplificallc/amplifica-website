import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from "yup"
 interface FormProps {
  formData: {
    firstName:any;
    lastName:any;
    email:any;
    industry:any;
    company:any;
    country:any;
    message:any;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

}

const ContForm:React.FC<FormProps> = ({ formData, handleInputChange}) => {
   
 

  // const initialValues = {
  //   firstName,
  //   lastName,
  //   email,
  //   industry,
  //   company,
  //   country,
  //   message,
  // };
    //Validation Schema Using 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        industry: Yup.string().required("Industry is required"),
        company: Yup.string().required("Company name is required"),
        country: Yup.string().required("Country name is required"),
        message: Yup.string().required("Message is required"),
    });
   
    const handleSubmit=async (values:typeof formData,{setSubmitting,resetForm}:FormikHelpers<FormProps>)=>
    {
      try {
        const response = await fetch("http://localhost:5000/send-email",
        {
          method: "POST",
          headers:{
            'Content-Type': "application/json"
          },
          body: JSON.stringify(values),
        })
      if(response.ok)
      {
         //reset form values
         resetForm();
         setSubmitting(false);
         alert("Email sent successfully");
      }
      else
      {
        throw  new  Error('Failed to send email')
      }
      } catch (error) {
        console.log(error);
        setSubmitting(false);
        alert("Failes to send email.Please try again")
      }
    }
       
  return (
    <Formik initialValues={formData} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({isSubmitting})=>
      (
        <Form className='space-y-5'>
          <div className='flex md:flex-row flex-col justify-center items-center space-y-5 md:space-y-0 md:space-x-10'> 
          <div className='flex flex-col space-y-2 '>
            <label htmlFor='firstname' className='text-xl font-normal text-grey'>First Name</label>
            <Field type="text" id="firstName" name="firstName" className="md:w-60 w-96 h-12 md:h-9 border border-gray-400 focus:border-main rounded-md"/>
            <ErrorMessage name='firstName' component="div" className='text-red-700'/>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='firstname'  className='text-xl font-normal text-grey'>Last Name</label>
            <Field type="text" id="lastName" name="lastName" className="md:w-60 w-96 h-12 md:h-9 border border-gray-400 focus:border-main rounded-md"/>
            <ErrorMessage name='lastName' component="div"/>
          </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='email'  className="text-xl font-normal text-grey">E-mail</label>
            <Field type="email" id="email" name="email" className="md:w-full h-12 md:h-9 border border-gray-400 focus:border-main rounded-md"/>
            <ErrorMessage name='email' component="div"/>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='industry'className="text-xl font-normal text-grey" >Industry</label>
            <Field type="text" id="industry" name="industry" className="w-full h-12 md:h-9 border border-gray-400 focus:border-main rounded-md"/>
            <ErrorMessage name='industry' component="div"/>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='company' className="text-xl font-normal text-grey">Company Name</label>
            <Field type="text" id="company" name="company" className="w-full h-12 md:h-9 border border-gray-400 focus:border-main rounded-md"/>
            <ErrorMessage name='company' component="div"/>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='country' className="text-xl font-normal text-grey">Country</label>
            <Field type="text" id="country" name="country" className="w-full h-12 md:h-9 border border-gray-400 focus:border-main rounded-md"/>
            <ErrorMessage name='country' component="div"/>
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='message' className="text-xl font-normal text-grey">Message</label>
            <Field type="textarea" id="message" name="message" className="w-full h-12 md:h-9 border border-gray-400 focus:border-main rounded-md"/>
            <ErrorMessage name='message' component="div"/>
          </div>
         <button type='submit' disabled={isSubmitting} className='bg-main rounded-md font-semibold text-md text-white w-48 h-12'>
          Send Message
         </button>
        </Form>
      )}
    </Formik>
   
  )
}

export default ContForm