import React from 'react'

const Services = () => {
  return (
    <>
              <section className="services-section" id="services-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="section-header text-center">
                     <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">خدمات من
                     </h2>
                     <p className="wow fadeInUp" data-wow-delay=".4s">
                        تمام تلاش من برای برای پیشرفت شما به وسیله وبسایت های کارامد زیبا است
                     </p>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-md-12">
                  <div className="services-widget [&_>.service-item]:duration-700  hover:[&_>.service-item]:!bg-indigo-700 [&_>.service-item]:!bg-gray-950 position-relative">
                     <div className="service-item  current d-flex flex-wrap align-items-center wow fadeInUp " data-wow-delay=".5s">
                        <div className="left-box  d-flex flex-wrap align-items-center">
                           <span className="number">01</span>
                           <h3 className="service-title">طراحی  وبسایت (UI & UX)</h3>
                        </div>
                        <div className="right-box">
                           <p>
                              زیباترین وبسایت ها بهینه شده برای موبایل ، تبلت و دسکتاپ با تجربه کاربری عالی
                           </p>
                        </div>
                        <i className="flaticon-up-right-arrow"></i>
                        <button data-mfp-src="#service-wrapper" className="service-link modal-popup"></button>
                     </div>
                     <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".6s">
                        <div className="left-box d-flex flex-wrap align-items-center">
                           <span className="number">02</span>
                           <h3 className="service-title">برنامه نویسی بک اند</h3>
                        </div>
                        <div className="right-box">
                           <p>
                              بهینه ترین الگوریتم ها با امنیت قوی و سرعت بسیار بالا با فریم وورک قوی و قدرتمند لاراول
                           </p>
                        </div>
                        <i className="flaticon-up-right-arrow"></i>
                        <button data-mfp-src="#service-wrapper" className="service-link modal-popup"></button>
                     </div>
                     <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".7s">
                        <div className="left-box d-flex flex-wrap align-items-center">
                           <span className="number">03</span>
                           <h3 className="service-title">برنامه نویسی فرانت-اند (Front-end)</h3>
                        </div>
                        <div className="right-box">
                           <p>
                              وبسایت شما با بهترین و محبوب ترین فریم جهان (Next.js)
                              طراحی خواهد شد که چیز اضافه ای برای گفتن ندارد.
                           </p>
                        </div>
                        <i className="flaticon-up-right-arrow"></i>
                        <button data-mfp-src="#service-wrapper" className="service-link modal-popup"></button>
                     </div>
                     <div className="service-item d-flex flex-wrap align-items-center wow fadeInUp" data-wow-delay=".8s">
                        <div className="left-box d-flex flex-wrap align-items-center">
                           <span className="number">04</span>
                           <h3 className="service-title">SEO</h3>
                        </div>
                        <div className="right-box">
                           <p>
                              رتبه برتر گوگل با بروز ترین الگوریتم های SEO (2024-google)
                           </p>
                        </div>
                        <i className="flaticon-up-right-arrow"></i>
                        <button data-mfp-src="#service-wrapper" className="service-link modal-popup"></button>
                     </div>
                     <div className="active-bg wow fadeInUp" data-wow-delay=".5s"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Services