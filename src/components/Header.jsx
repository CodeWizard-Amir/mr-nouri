import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = ({ ShowHideMenu,toggleSHowMenu }) => {
  console.log(ShowHideMenu)
  return (
    <>
      <header
        className={`tj-header-area ${ShowHideMenu && '!z-20'} ${ShowHideMenu && '!fixed'}  header-absolute`}
      >
        <div className='w-full px-0  lg:px-44'>

          <div className='row'>
            <div className='col-12 w-full d-flex fl align-items-center'>
            <div className="lg:hidden px-3">❤️ M ❤️</div>
              <div className='header-info-list d-none d-md-inline-block'>
                <ul className='ul-reset'>
                  <li className="flex">
                    <div className="mx-5">❤️ M ❤️</div>
                    <a href='mailto:mail@gerolddesign.com'>
                      amirwebsajjad@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className='header-menu'>
                <nav>
                  <ul>
                    <li>
                      <a href='#services-section'>خدمات</a>
                    </li>
                    <li>
                      <a href='#works-section'>نمونه کار</a>
                    </li>
                    <li>
                      <a href='#resume-section'>رزومه</a>
                    </li>
                    <li>
                      <a href='#skills-section'>مهارت ها</a>
                    </li>
                    <li>
                      <a href='#testimonials-section'>گواهینامه ها</a>
                    </li>
                    <li>
                      <a href='#contact-section'>تماس با ما</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='header-button'>
                <a href='tel:09104816785' className='btn tj-btn-primary'>
                  تماس با من
                </a>
              </div>
              <div className='menu-bar d-lg-none'>
                <button onClick={() => toggleSHowMenu((sts) => !sts)} className="text-3xl px-4">
                  <FaBarsStaggered  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;
