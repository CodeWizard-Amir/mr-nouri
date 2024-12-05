import React from 'react'

const Footer = () => {
  return (
    <>
           <footer class="tj-footer-area">
      <div class="container">
         <div class="row">
            <div class="col-md-12 text-center">
               <div class="footer-logo-box">
                  <a href="#"><img src="assets/img/logo/logo.png" alt="" /></a>
               </div>
               <div class="footer-menu">
                  <nav>
                     <ul>
                        <li><a href="#services-section">خدمات</a></li>
                        <li><a href="#works-section">نمونه کار</a></li>
                        <li><a href="#resume-section">رزومه</a></li>
                        <li><a href="#skills-section">مهارت ها</a></li>
                        <li><a href="#testimonials-section">گواهینامه ها</a></li>
                        <li><a href="#contact-section">تماس با ما</a></li>
                     </ul>
                  </nav>
               </div>
               <div class="copy-text">
                  <p>&copy; تمامی حقوق این سایت برای  <a className='!text-green-500 hover:!text-green-200' href="#" target="_blank"> امیرسجاد نوری </a> میباشد</p>
               </div>
            </div>
         </div>
      </div>
   </footer>
    </>
  )
}

export default Footer