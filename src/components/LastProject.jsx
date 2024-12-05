import React from "react";

import SHEKAM1 from "../assets/img/LastProject/shekam1.png";
import SHEKAM2 from "../assets/img/LastProject/shekam2.png";
import SHEKAM3 from "../assets/img/LastProject/shekam3.png";

import Novins1 from "../assets/img/LastProject/Novins1.png";
import Novins2 from "../assets/img/LastProject/Novins2.png";
import Novins3 from "../assets/img/LastProject/Novins3.png";
import Novins4 from "../assets/img/LastProject/Novins4.png";
import Novins5 from "../assets/img/LastProject/Novins5.png";
import Novins6 from "../assets/img/LastProject/Novins6.png";

import karsios1 from "../assets/img/LastProject/karsios1.png";
import karsios2 from "../assets/img/LastProject/karsios2.png";
import karsios3 from "../assets/img/LastProject/karsios3.png";
import karsios4 from "../assets/img/LastProject/karsios4.png";
import karsios5 from "../assets/img/LastProject/karsios5.png";
import karsios6 from "../assets/img/LastProject/karsios6.png";
import karsios7 from "../assets/img/LastProject/karsios7.png";
import karsios8 from "../assets/img/LastProject/karsios8.png";
import karsios9 from "../assets/img/LastProject/karsios9.png";

import Reverb1 from "../assets/img/LastProject/Reverb1.png";
import Reverb2 from "../assets/img/LastProject/Reverb2.png";

import S_agency from "../assets/img/LastProject/S_agency.png";
import S_agency1 from "../assets/img/LastProject/S_agency1.png";
import S_agency2 from "../assets/img/LastProject/S_agency2.png";

import Hiva1 from "../assets/img/LastProject/Hiva1.png";
import Hiva2 from "../assets/img/LastProject/Hiva2.png";
import Hiva3 from "../assets/img/LastProject/Hiva3.png";

import Sabour from "../assets/img/LastProject/Sabour.png";
import Sabour1 from "../assets/img/LastProject/Sabour1.png";
import Sabour2 from "../assets/img/LastProject/Sabour2.png";
import Sabour3 from "../assets/img/LastProject/Sabour3.png";

import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const LastProject = () => {
  return (
    <>
      <section class='portfolio-section' id='works-section'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-12'>
              <div class='section-header text-center'>
                <h2 class='section-title wow fadeInUp' data-wow-delay='.3s'>
                  پروژه های اخیر
                </h2>
                <p class='wow fadeInUp' data-wow-delay='.4s'>
                  با برسی نمونه کارهای من به مهارت من اطمینان حاصل کنید
                </p>
              </div>
            </div>
          </div>

          {/* ------------------------------- */}
          <section className='p-1 lg:p-10 [&_>a]:md:h-[500px]  [&_>a]:h-[350px] lg:[&_>a]:w-[49%] [&_>a]:w-full flex-wrap [&_>a]:my-5 flex justify-between items-center'>
            <Link
              to={"https://github.com/CodeWizard-Amir/Shekam"}
              className=' relative   [&_>div]:hover:!opacity-90 cursor-pointer'
            >
              <div className='absolute top-0 z-10 duration-500  right-0 opacity-0 overflow-hidden w-full h-full bg-gray-950'>
                <p className='text-white mt-5 p-2 flex w-full px-5'>
                  <p>نام پروژه</p>
                  <strong className='mx-5'>سامانه شکم</strong>
                </p>
                <p className='text-white mt-2 px-5 flex flex-col flex-wrap w-full'>
                  <p className='!w-fit'>تکنولوژی های مورد استفاده : </p>
                  <div className='flex  flex-wrap'>
                    <strong className='mx-1'>Next.js</strong>
                    <strong className='mx-1'>Tailwind</strong>
                    <strong className='mx-1'>react-icons</strong>
                    <strong className='mx-1'>react-swiper</strong>
                    <strong className='mx-1'>json-server</strong>
                  </div>
                </p>
                <p className='text-white mt-5 flex-col p-2 flex w-full px-5'>
                  <p>توضیحات پروژه</p>
                  <p className='mx-2'>
                    این سامانه در اصل بازنویسی شده سامانه سماد است که امکانات
                    بسیار بیشتری دارد مانند رزور خودکار بهبود نظرسنجی ها قرض از
                    سامانه بهبود سرعت و ظاهر وبسایت
                  </p>
                </p>
                <p className='my-2 hover:bg-red-500 font-bold mx-auto text-center bg-gray-900 text-white w-fit rounded-md px-5 py-3'>
                  برای مشاهده پروژه در گیت هاب کلیک کنید
                </p>
              </div>
              <Swiper
                modules={[Autoplay]}
                className='w-full h-full'
                spaceBetween={50}
                speed={1500}
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
              >
                <SwiperSlide className='w-full h-full bg-purple-500 text-white'>
                  <img src={SHEKAM1} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full bg-purple-500 text-white'>
                  <img src={SHEKAM2} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full bg-purple-500 text-white'>
                  <img src={SHEKAM3} className='w-full h-full' alt='' />
                </SwiperSlide>
              </Swiper>
            </Link>
            <Link
              to={"https://github.com/CodeWizard-Amir/Novins"}
              className=' relative  [&_>div]:hover:!opacity-90 cursor-pointer'
            >
              <div className='absolute top-0 z-10 duration-500  right-0 opacity-0 overflow-hidden w-full h-full bg-gray-950'>
                <p className='text-white mt-5 p-2 flex w-full px-5'>
                  <p>نام پروژه</p>
                  <strong className='mx-5'>نوینان</strong>
                </p>
                <p className='text-white mt-2 px-5 flex flex-col flex-wrap w-full'>
                  <p className='!w-fit'>تکنولوژی های مورد استفاده : </p>
                  <div className='flex  flex-wrap'>
                    <strong className='mx-1'>react.js</strong>
                    <strong className='mx-1'>Tailwind</strong>
                    <strong className='mx-1'>react-icons</strong>
                    <strong className='mx-1'>react-swiper</strong>
                    <strong className='mx-1'>json-server</strong>
                  </div>
                </p>
                <p className='text-white mt-5 flex-col p-2 flex w-full px-5'>
                  <p>توضیحات پروژه</p>
                  <p className='mx-2'>
                    یک وبسایت برای تیم برنامه نویسی که دارای مقاله ثبت سفارش
                    نمونه کارها و ...
                  </p>
                </p>
                <p className='my-2 hover:bg-red-500 font-bold mx-auto text-center bg-gray-900 text-white w-fit rounded-md px-5 py-3'>
                  برای مشاهده پروژه در گیت هاب کلیک کنید
                </p>
              </div>
              <Swiper
                modules={[Autoplay]}
                className='w-full h-full'
                spaceBetween={50}
                speed={1500}
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
              >
                <SwiperSlide className='w-full h-full text-white'>
                  <img src={Novins1} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Novins2} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Novins3} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Novins4} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Novins5} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Novins6} className='w-full h-full' alt='' />
                </SwiperSlide>
              </Swiper>
            </Link>
            <Link
              to={null}
              className=' relative  [&_>div]:hover:!opacity-90 cursor-pointer'
            >
              <div className='absolute top-0 z-10 duration-500  right-0 opacity-0 overflow-hidden w-full h-full bg-gray-950'>
                <p className='text-white mt-5 p-2 flex w-full px-5'>
                  <p>نام پروژه</p>
                  <strong className='mx-5'>هیواشاپ</strong>
                </p>
                <p className='text-white mt-2 px-5 flex flex-col flex-wrap w-full'>
                  <p className='!w-fit'>تکنولوژی های مورد استفاده : </p>
                  <div className='flex  flex-wrap'>
                    <strong className='mx-1'>react.js</strong>
                    <strong className='mx-1'>Tailwind</strong>
                    <strong className='mx-1'>react-icons</strong>
                    <strong className='mx-1'>react-swiper</strong>
                    <strong className='mx-1'>json-server</strong>
                  </div>
                </p>
                <p className='text-white mt-5 flex-col p-2 flex w-full px-5'>
                  <p>توضیحات پروژه</p>
                  <p className='mx-2'>
                    یک فروشگاه اینترنتی برای لوازم الکترونیک
                  </p>
                </p>
                <p
                  onClick={() => alert("ریپازیتوری در گیت هاب یافت نشد!")}
                  className='my-2 hover:bg-red-500 font-bold mx-auto text-center bg-gray-900 text-white w-fit rounded-md px-5 py-3'
                >
                  برای مشاهده پروژه در گیت هاب کلیک کنید
                </p>
              </div>
              <Swiper
                modules={[Autoplay]}
                className='w-full h-full'
                spaceBetween={50}
                speed={1500}
                loop={true}
                autoplay={{ delay: 5000 }}
                slidesPerView={2}
              >
                <SwiperSlide className='w-full h-full text-white'>
                  <img src={Hiva1} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Hiva2} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Hiva3} className='w-full h-full' alt='' />
                </SwiperSlide>
              </Swiper>
            </Link>
            <Link
              to={null}
              className=' relative  [&_>div]:hover:!opacity-90 cursor-pointer'
            >
              <div className='absolute top-0 z-10 duration-500  right-0 opacity-0 overflow-hidden w-full h-full bg-gray-950'>
                <p className='text-white mt-5 p-2 flex w-full px-5'>
                  <p>نام پروژه</p>
                  <strong className='mx-5'>FaceToFace</strong>
                </p>
                <p className='text-white mt-2 px-5 flex flex-col flex-wrap w-full'>
                  <p className='!w-fit'>تکنولوژی های مورد استفاده : </p>
                  <div className='flex  flex-wrap'>
                    <strong className='mx-1'>PHP</strong>
                    <strong className='mx-1'>Tailwind</strong>
                    <strong className='mx-1'>fontawsome</strong>
                    <strong className='mx-1'>Laravel</strong>
                    <strong className='mx-1'>Laravel-reverb</strong>
                    <strong className='mx-1'>jQuery</strong>
                    <strong className='mx-1'>Echo.php&Echo.js</strong>
                    <strong className='mx-1'>Javascript</strong>
                    <strong className='mx-1'>mySQL</strong>
                  </div>
                </p>
                <p className='text-white mt-5 flex-col p-2 flex w-full px-5'>
                  <p>توضیحات پروژه</p>
                  <p className='mx-2'>
                    یک وب اپلیشکن ریل تایم (Real-time)-(none-blocking) برای تماس
                    تصویری بین کاربران با استفاده از لاراول-ریورب وبسوکت لاراول
                  </p>
                </p>
                <p
                  onClick={() => alert("ریپازیتوری در گیت هاب یافت نشد!")}
                  className='my-2 hover:bg-red-500 font-bold mx-auto text-center bg-gray-900 text-white w-fit rounded-md px-5 py-3'
                >
                  برای مشاهده پروژه در گیت هاب کلیک کنید
                </p>
              </div>
              <Swiper
                modules={[Autoplay]}
                className='w-full h-full'
                spaceBetween={50}
                speed={1500}
                loop={true}
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
              >
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Reverb1} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Reverb2} className='w-full h-full' alt='' />
                </SwiperSlide>
              </Swiper>
            </Link>
            <Link
              to={"https://github.com/CodeWizard-Amir/Karsios"}
              className=' relative  [&_>div]:hover:!opacity-90 cursor-pointer'
            >
              <div className='absolute top-0 z-10 duration-500  right-0 opacity-0 overflow-hidden w-full h-full bg-gray-950'>
                <p className='text-white mt-5 p-2 flex w-full px-5'>
                  <p>نام پروژه</p>
                  <strong className='mx-5'>کارزیوز</strong>
                </p>
                <p className='text-white mt-2 px-5 flex flex-col flex-wrap w-full'>
                  <p className='!w-fit'>تکنولوژی های مورد استفاده : </p>
                  <div className='flex  flex-wrap'>
                    <strong className='mx-1'>Next.js</strong>
                    <strong className='mx-1'>Tailwind</strong>
                    <strong className='mx-1'>react-icons</strong>
                    <strong className='mx-1'>react-swiper</strong>
                    <strong className='mx-1'>json-server</strong>
                    <strong className='mx-1'>and ...</strong>
                  </div>
                </p>
                <p className='text-white mt-5 flex-col p-2 flex w-full px-5'>
                  <p>توضیحات پروژه</p>
                  <p className='mx-2'>
                    یک املاکی انلاین برای خرید اجاره و رهن خامه اپارتمان و ویلا
                    محاسبه قیمت و...
                  </p>
                </p>
                <p className='my-2 hover:bg-red-500 font-bold mx-auto text-center bg-gray-900 text-white w-fit rounded-md px-5 py-3'>
                  برای مشاهده پروژه در گیت هاب کلیک کنید
                </p>
              </div>
              <Swiper
                modules={[Autoplay]}
                className='w-full h-full'
                spaceBetween={50}
                speed={1500}
                loop={true}
                autoplay={{ delay: 3000 }}
                slidesPerView={1}
              >
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={karsios1} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={karsios2} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={karsios3} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={karsios4} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={karsios5} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={karsios6} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={karsios7} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={karsios8} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={karsios9} className='w-full h-full' alt='' />
                </SwiperSlide>
              </Swiper>
            </Link>
            <Link
              to={"https://github.com/CodeWizard-Amir/NewsWebsite-Laravel"}
              className=' relative  [&_>div]:hover:!opacity-90 cursor-pointer'
            >
              <div className='absolute top-0 z-10 duration-500  right-0 opacity-0 overflow-hidden w-full h-full bg-gray-950'>
                <p className='text-white mt-5 p-2 flex w-full px-5'>
                  <p>نام پروژه</p>
                  <strong className='mx-5'>آژانس-صدای شهروند</strong>
                </p>
                <p className='text-white mt-2 px-5 flex flex-col flex-wrap w-full'>
                  <p className='!w-fit'>تکنولوژی های مورد استفاده : </p>
                  <div className='flex  flex-wrap'>
                    <strong className='mx-1'>javascript</strong>
                    <strong className='mx-1'>bootstrap</strong>
                    <strong className='mx-1'>font-awsome</strong>
                    <strong className='mx-1'>swiper-slider & sweet-alert</strong>
                    <strong className='mx-1'>laravel</strong>
                    <strong className='mx-1'>php</strong>
                    <strong className='mx-1'>mySQL</strong>
                  </div>
                </p>
                <p className='text-white mt-5 flex-col p-2 flex w-full px-5'>
                  <p>توضیحات پروژه</p>
                  <p className='mx-2'>
                    یک وبسایت خبری با هسته قدرتمند لاراول
                  </p>
                </p>
                <p className='my-2 hover:bg-red-500 font-bold mx-auto text-center bg-gray-900 text-white w-fit rounded-md px-5 py-3'>
                  برای مشاهده پروژه در گیت هاب کلیک کنید
                </p>
              </div>
              <Swiper
                modules={[Autoplay]}
                className='w-full h-full'
                spaceBetween={50}
                speed={1500}
                loop={true}
                autoplay={{ delay: 3000 }}
                slidesPerView={1}
              >
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={S_agency} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={S_agency1} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={S_agency2} className='w-full h-full' alt='' />
                </SwiperSlide>
              </Swiper>
            </Link>
            <Link
              to={"https://github.com/CodeWizard-Amir/personal-weblog"}
              className=' relative  [&_>div]:hover:!opacity-90 cursor-pointer'
            >
              <div className='absolute top-0 z-10 duration-500  right-0 opacity-0 overflow-hidden w-full h-full bg-gray-950'>
                <p className='text-white mt-5 p-2 flex w-full px-5'>
                  <p>نام پروژه</p>
                  <strong className='mx-5'> صبور </strong>
                </p>
                <p className='text-white mt-2 px-5 flex flex-col flex-wrap w-full'>
                  <p className='!w-fit'>تکنولوژی های مورد استفاده : </p>
                  <div className='flex  flex-wrap'>
                    <strong className='mx-1'>react.js</strong>
                    <strong className='mx-1'>Tailwind</strong>
                    <strong className='mx-1'>react-icons</strong>
                    <strong className='mx-1'>react-swiper</strong>
                    <strong className='mx-1'>json-server</strong>
                  </div>
                </p>
                <p className='text-white mt-5 flex-col p-2 flex w-full px-5'>
                  <p>توضیحات پروژه</p>
                  <p className='mx-2'>
                    وبسایت رزومه شخصی  
                  </p>
                </p>
                <p className='my-2 hover:bg-red-500 font-bold mx-auto text-center bg-gray-900 text-white w-fit rounded-md px-5 py-3'>
                  برای مشاهده پروژه در گیت هاب کلیک کنید
                </p>
              </div>
              <Swiper
                modules={[Autoplay]}
                className='w-full h-full'
                spaceBetween={50}
                speed={1500}
                loop={true}
                autoplay={{ delay: 3000 }}
                slidesPerView={2}
              >
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Sabour} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Sabour1} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Sabour2} className='w-full h-full' alt='' />
                </SwiperSlide>
                <SwiperSlide className='w-full h-full  text-white'>
                  <img src={Sabour3} className='w-full h-full' alt='' />
                </SwiperSlide>
              </Swiper>
            </Link>
          </section>
        </div>
      </section>
    </>
  );
};

export default LastProject;
