import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface cardProps{
  alt: string,
  blogTitle:  string,
  blogSummary: string,
  authorImg: string,
  authorName: string,
  blogLink: any, 
  publishDate: any
}
const Cards:React.FC<cardProps> = ({ alt, blogTitle, blogSummary, blogLink, authorImg, authorName, publishDate}) => {
  return (
    <div className='bg-gradient-to-r from-main to-blue-600 md:mx-4 md:p-10 px-2 pb-10 md:pb-0  rounded-full md:rounded-full rounded-tl-none md:rounded-tr-full rounded-tr-none md:rounded-bl-none rounded-bl-xl  flex flex-col md:flex-row md:space-x-10 '>
      
      <div className='flex flex-col justify-center items-start py-10 md:pl-10 md:px-0 px-2 space-y-4'>
        <h1 className='text-white font-bold text-4xl'>{blogTitle}</h1>
        <p className='w-3/4 text-white font-normal leading-normal'>{blogSummary}</p>
        <div className='flex flex-row justify-center items-center space-x-4'>
          <Image src={authorImg} width={60} height={60} alt='' className='rounded-full '/>
          <div className='flex flex-col'>
          <h3 className='text-white font-normal text-xl'>{authorName}</h3>
          <h3 className='text-white font-normal text-md'>{publishDate}</h3>
          </div>
         
        </div>
        <Link href={blogLink}>
          <button className='bg-white w-48 h-14 rounded-lg text-main font-bold text-xl shadow-lg hover:bg-black hover:text-white'>Read More</button>
        </Link>
      </div>
    </div>
  )
}

export default Cards