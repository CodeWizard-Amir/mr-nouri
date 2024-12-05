import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const ContactMe = () => {
  return (
    <>
              <section class="contact-section" id="contact-section">
         <div class="container">
            <div class="row">
               <div class="col-lg-6 col-md-7 order-2 order-md-1">
                  <div class="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
                     <div class="section-header">
                        <h2 class="section-title">تماس با من</h2>
                        <p>برای ارتباط با من از طریق فرم زیر یا از شبکه های اجتماعی بنده استفاده کنید.</p>
                     </div>

                     <div class="tj-contact-form">
                        <form id="contact-form">
                           <div class="row gx-3">
                              <div class="col-sm-6">
                                 <div class="form_group">
                                    <input type="text" name="conName" id="conName" placeholder="نام" autocomplete="off" />
                                 </div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="form_group">
                                    <input type="text" name="conLName" id="conLName" placeholder="نام خانوادگی" autocomplete="off" />
                                 </div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="form_group">
                                    <input type="email" name="conEmail" id="conEmail" placeholder="ایمیل" autocomplete="off" />
                                 </div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="form_group">
                                    <input type="tel" name="conPhone" id="conPhone" placeholder="شماره تماس" autocomplete="off" />
                                 </div>
                              </div>
                              <div class="col-12">
                                 <div class="form_group">
                                    <select name="conService" id="conService" class="tj-nice-select">
                                       <option value="" selected disabled>نوع خدمات</option>
                                       <option value="braning">طراحی سایت (فرانت)</option>
                                       <option value="web">طراحی سایت (بک اند)</option>
                                       <option value="uxui">درخواست تدریس خصوصی</option>
                                       <option value="app">سوال شخصی</option>
                                    </select>
                                 </div>
                              </div>
                              <div class="col-12">
                                 <div class="form_group">
                                    <textarea name="conMessage" id="conMessage" placeholder="متن"></textarea>
                                 </div>
                              </div>
                              <div class="col-12">
                                 <div class="form_btn">
                                    <button type="submit" class="btn tj-btn-primary">ارسال پیام</button>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>

               <div class="col-lg-5 offset-lg-1 col-md-5 d-flex flex-wrap align-items-center order-1 order-md-2">
                  <div class="contact-info-list">
                     <ul class="ul-reset">
                        <li class="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".4s">
                           <div class="icon-box">
                              <i class="flaticon-phone-call"></i>
                           </div>
                           <div class="text-box">
                              <p>شماره تماس</p>
                              <a href="tel:09104816785">09104816785</a>
                           </div>
                        </li>
                        <li class="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".4s">
                           <div class="icon-box flex justify-center items-center">
                              <FaTelegramPlane />
                           </div>
                           <div class="text-box">
                              <p>تلگرام</p>
                              <a href="https://t.me/@Amir_sjd0">t.me/@Amir_sjd0</a>
                           </div>
                        </li>
                        <li class="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".4s">
                           <div class="icon-box flex justify-center items-center">
                              <IoLogoInstagram />
                           </div>
                           <div class="text-box">
                              <p>انستاگرام</p>
                              <a href="https://instagram.com/amirsajjad_nouri">amirsajjad_nouri</a>
                           </div>
                        </li>
                        <li class="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".5s">
                           <div class="icon-box">
                              <i class="flaticon-mail-inbox-app"></i>
                           </div>
                           <div class="text-box">
                              <p>ایمیل</p>
                              <a href="mailto:mail@mail.com">amirwebsajjad@mail.com</a>
                           </div>
                        </li>
                        <li class="d-flex flex-wrap align-items-center position-relative wow fadeInRight" data-wow-delay=".6s">
                           <div class="icon-box">
                              <i class="flaticon-location"></i>
                           </div>
                           <div class="text-box">
                              <p>آدرس</p>
                              <p>USK - کرج</p>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default ContactMe