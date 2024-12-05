import S_A from '../assets/img/licence/S_A.jpg'
import TTC from '../assets/img/licence/TTC.jpg'
import WEB from '../assets/img/licence/WEV.jpg'
import Diploma from '../assets/img/licence/Diploma.jpg'
const Licences = () => {
  return (
    <section class='portfolio-section' id='testimonials-section'>
    <div class='container'>
      <div class='row'>
        <div class='col-md-12'>
          <div class='section-header text-center'>
            <h2 class='section-title wow fadeInUp' data-wow-delay='.3s'>
              گواهینامه های من
            </h2>
            <p class='wow fadeInUp' data-wow-delay='.4s'>
              با برسی نمونه کارهای من به مهارت من اطمینان حاصل کنید
            </p>
          </div>
        </div>
      </div>
    <section className='p-1 lg:p-10 flex justify-between flex-wrap'>
        <img src={Diploma} className="w-full lg:w-[49%] lg:h-[500px] my-3 cursor-pointer h-[350px]" alt="" />
        <img src={TTC} className="w-full lg:w-[49%] lg:h-[500px] my-3 cursor-pointer h-[350px]" alt="" />
        <img src={S_A} className="w-full lg:w-[49%] lg:h-[500px] my-3 cursor-pointer h-[350px]" alt="" />
        <img src={WEB} className="w-full lg:w-[49%] lg:h-[500px] my-3 cursor-pointer h-[350px]" alt="" />
    </section>
    </div>
  </section>
  )
}

export default Licences