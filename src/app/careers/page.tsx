import React from 'react'
import styles from ".././../../about.module.css"

const page = () => {
  return (
    <section className='flex flex-col justify-center items-center h-screen'>
          <h1 className={`${styles.main} text-6xl font-normal text-center `}><span className='text-main font-bold'>OOPS ....</span></h1>
            <p className={`${styles.main} text-xl font-normal`}>We do not have any open roles at the moment.Please come back later</p>
            </section>
    )
}

export default page