import React from "react";
import CountUp from 'react-countup';
import ME1 from "../assets/img/hero/me1.jpg";
import ME2 from "../assets/img/hero/me2.jpg";
const MrNouri = () => {
  return (
    <>
      <section className='hero-section !z-10 d-flex align-items-center' id='intro'>
        <div className='intro_text'>
          <svg viewbox='0 0 1320 300'>
            <text x='50%' y='50%' text-anchor='middle'>
              HI
            </text>
          </svg>
        </div>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='hero-content-box'>
                <span className='hero-sub-title'>امیرسجاد نوری هستم</span>
                <h1 className='hero-title !text-5xl !my-10 '>
                  برنامه نویس فول استک و
                  <br />
                  <br />
                  طراح UX
                </h1>

                <div className='hero-image-box d-md-none text-center'>
                  <img className='w-full h-full' src={ME1} alt='' />
                </div>

                <p className='lead'>
                  5 سالی هست دچار لذت بخش ترین کار دنیا (برنامه نویسی)
                  شدم و از هرگونه چالش جدید در این زمینه شدیدا استقبال میکنم
                </p>
                <div className='button-box d-flex flex-wrap align-items-center'>
                  <a href='#' className='btn tj-btn-secondary'>
                    دریافت رزومه <i className='flaticon-download'></i>
                  </a>
                  <ul className='ul-reset social-icons'>
                    <li>
                      <a href='#'>
                        <i className='fa-brands fa-telegram'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://instagram.com/amirsajjad_nouri'>
                        <i className='fa-brands fa-instagram'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/CodeWizard-Amir'>
                        <i className='fa-brands fa-github'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6 d-none d-md-block'>
              <div className='hero-image-box text-center'>
                <img src={ME1} alt='' />
              </div>
            </div>
          </div>
          <div className='funfact-area !my-40'>
            <div className='row'>
              <div className='col-6 col-lg-3'>
                <div className='funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center'>
                  <div className='number'>
                    <span className='odometer' data-count='14'>
                    <CountUp delay={1} end={4} />

                    </span>
                  </div>
                  <div className='text'>
                    سابقه <br />
                    کاری
                  </div>
                </div>
              </div>
              <div className='col-6 col-lg-3'>
                <div className='funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center'>
                  <div className='number'>
                    <span className='odometer' data-count='50'>
                      <CountUp delay={1} end={8} />
                    </span>
                    +
                  </div>
                  <div className='text'>
                    پروژه های <br />
                    تکمیل شده
                  </div>
                </div>
              </div>
              <div className='col-6 col-lg-3'>
                <div className='funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center'>
                  <div className='number'>
                    <span className='odometer' data-count='1.5'>
                    <CountUp delay={1} end={99} />

                    </span>
                    %
                  </div>
                  <div className='text'>
                    میزان <br />
                    رضایت
                  </div>
                </div>
              </div>
              <div className='col-6 col-lg-3'>
                <div className='funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center'>
                  <div className='number'>
                    <span className='odometer' data-count='14'>
                    <CountUp delay={1} end={7} />
                    </span>
                  </div>
                  <div className='text'>
                    سال های <br />
                    تجربیات
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MrNouri;
