import React, {useState,useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import AOS from "aos";
import "aos/dist/aos.css";
import Services from './components/Services/Services';
import CarList from './components/CarList/CarList';
import Testimonial from './components/Testimonial/Testimonial';
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner';


  const App=()=>{
    // Dark Mode
    const [theme, setTheme] = React.useState(
      localStorage.getItem("theme") ?
      localStorage.getItem("theme") : "light"
    );
  
    const element = document.documentElement;
    useEffect(()=>{
      if(theme==="dark"){
        element.classList.add("dark");
        localStorage.setItem("theme","dark"); 
      }

      else {
        element.classList.remove("dark");
        localStorage.setItem("theme","light"); 


      }
    },[theme]
  );

 //AOS Initialization
 React.useEffect(()=>{
  AOS.init({
    offset:100,
    duration:800,
    easing:"easing-in-sine",
    delay:100,
  });
  AOS.refresh();
},
[]);

  return (
    <div className='bg-white dark:bg-dark dark:text-white
    '>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero  theme={theme}/>
      <About/>
      <Services/>
      <CarList/>
      <Testimonial/>
      <AppStoreBanner/>
    </div>
  );
};

export default App;
