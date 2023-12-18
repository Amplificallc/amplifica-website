import React from 'react'
import Image from 'next/image'
import styles from '../../../home.module.css'
interface CardProps{
    cc: string, 
    source: string, 
    service:  string
}
const Cards:React.FC<CardProps> = ({cc, source, service}) => {
  return (
    <div className={`${styles.paragraph} flex flex-col justify-center items-center px-10  w-64 h-72 rounded-tl-sm rounded-br-sm rounded-tr-3xl rounded-bl-3xl bg-${cc} hover:bg-white hover:border-4 hover:border-main`}>
        <Image src={source} width={200} height={200} alt="Web Development"/>
        <h3 className='font-bold text-xl text-center'>{service}</h3>
    </div>
  )
}

export default Cards