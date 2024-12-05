import React from 'react'
import { Link } from 'react-router-dom'

const RightMenu = ({ShowHideMenu}) => {
  return (
    <section className={`w-[80%] h-[100vh]  flex-col fixed hidden !z-50 ${ShowHideMenu && '!flex'} top-0 right-0 bg-indigo-950`}>
       <div className="flex h-fit items-center px-3 py-2 w-full">
        <img src="" className='w-10 h-10 rounded-full bg-red-500' alt="" />
        <h2 className='text-lg mt-3 mx-3'>امیرسجاد نوری</h2>
       </div>
       <ul className='my-5 w-full flex flex-col !p-2 px-4 space-y-5 !m-0'>
        <li><a href={"#services-section"} className='text-decoration-none border-r border-indigo-300 px-3 text-white font-bold text-xl'>خدمات</a></li>
        <li><a href={"#works-section"} className='text-decoration-none border-r border-indigo-300 px-3 text-white font-bold text-xl'>نمونه کار</a></li>
        <li><a href={"#resume-section"} className='text-decoration-none border-r border-indigo-300 px-3 text-white font-bold text-xl'>رزومه</a></li>
        <li><a href={"#skills-section"} className='text-decoration-none border-r border-indigo-300 px-3 text-white font-bold text-xl'>مهارت ها</a></li>
        <li><a href={"#testimonials-section"} className='text-decoration-none border-r border-indigo-300 px-3 text-white font-bold text-xl'>گواهینامه</a></li>
        <li><a href={"#contact-section "} className='text-decoration-none border-r border-indigo-300 px-3 text-white font-bold text-xl'>تماس با ما</a></li>
       </ul>
    </section>
  )
}

export default RightMenu