import React from 'react'
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBootstrap } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { TbBrandReact } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { RiPhpLine } from "react-icons/ri";
import { SiLaravel } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoLaravel } from "react-icons/io5";

const Skills = () => {
  return (
    <>
      <section class="skills-section" id="skills-section">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="section-header text-center">
                     <h2 class="section-title wow fadeInUp" data-wow-delay=".3s">مهارت ها</h2>
                     <p class="wow fadeInUp" data-wow-delay=".4s">
                        ما ایده های شما و در نتیجه خواسته های شما را در قالب یک پروژه وب منحصر به فرد قرار می دهیم که الهام بخش شما و مشتریان شما باشد.

                     </p>
                  </div>
               </div>
            </div>

            <div class="row">
               <div class="col-md-12">
                  <div class="skills-widget d-flex flex-wrap justify-content-center align-items-center">
                     <div class="skill-item hover:[&_>*]:text-orange-600  wow fadeInUp" data-wow-delay=".3s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                              <SiHtml5 className='text-5xl icon' />
                           </div>
                           <div class="number">100%</div>
                        </div>
                        <p>HTML5</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-blue-600  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <FaCss3Alt className='text-5xl icon' />
                           </div>
                           <div class="number">100%</div>
                        </div>
                        <p>CSS</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-sky-600  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <RiTailwindCssFill className='text-5xl icon' />
                           </div>
                           <div class="number">95%</div>
                        </div>
                        <p>Tailwind</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-purple-600  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <SiBootstrap className='text-5xl icon' />
                           </div>
                           <div class="number">65%</div>
                        </div>
                        <p>Tailwind</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-yellow-400  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <FaJsSquare className='text-5xl icon' />
                           </div>
                           <div class="number">85%</div>
                        </div>
                        <p>JavaScript</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-blue-950  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <SiJquery className='text-5xl icon' />
                           </div>
                           <div class="number">95%</div>
                        </div>
                        <p>jQuery</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-sky-400  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <TbBrandReact className='text-5xl icon' />
                           </div>
                           <div class="number">90%</div>
                        </div>
                        <p>React.js</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-purple-800  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <TbBrandRedux className='text-5xl icon' />
                           </div>
                           <div class="number">80%</div>
                        </div>
                        <p>redux.js</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-gray-700  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <SiNextdotjs className='text-5xl icon' />
                           </div>
                           <div class="number">80%</div>
                        </div>
                        <p>Next.js</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-indigo-500  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <RiPhpLine className='text-5xl icon' />
                           </div>
                           <div class="number">90%</div>
                        </div>
                        <p>PHP</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-red-500  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <SiLaravel className='text-5xl icon' />
                           </div>
                           <div class="number">95%</div>
                        </div>
                        <p>Laravel</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-pink-500  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <IoLogoLaravel className='text-5xl icon' />
                           </div>
                           <div class="number">40%</div>
                        </div>
                        <p>Laravel-Reverb</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-orange-500  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <SiMysql className='text-5xl icon' />
                           </div>
                           <div class="number">90%</div>
                        </div>
                        <p>mySQL</p>
                     </div>
                     <div class="skill-item hover:[&_>*]:text-emerald-500  wow fadeInUp" data-wow-delay=".4s">
                        <div class="skill-inner">
                           <div class="icon-box flex justify-center items-center">
                           <FaGithub className='text-5xl icon' />
                           </div>
                           <div class="number">90%</div>
                        </div>
                        <p>Git,Github</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Skills