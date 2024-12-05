import React, { useState } from "react";
import Loading from "../components/Loading";
import Header from "../components/Header";
import MrNouri from "./MrNouri";
import Services from "../components/Services";
import LastProject from "../components/LastProject";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Licences from "../components/Licences";
import RightMenu from "../components/RightMenu";

const Home = () => {
  const [ShowHideMenu, setShowHideMenu] = useState(false)
const toggleSHowMenu  = () =>{
  setShowHideMenu((sts) => !sts)
  if(ShowHideMenu)
  {
    var element = document.body;
    element.classList.toggle("overflow-hidden");
    $(document).bind('scroll',function () { 
      window.scrollTo(0,0); 
 });
  }
}
  return (
    <>
    <RightMenu ShowHideMenu={ShowHideMenu} />
    <Header ShowHideMenu={ShowHideMenu} toggleSHowMenu={toggleSHowMenu}/>
    <MrNouri />
    <Services />
    <LastProject />
    <Experience />
    <Licences />
    <Skills />
    <ContactMe />
    <Footer />
    </>
  );
};

export default Home;
