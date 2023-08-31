"use client";
import NavBar from '@/Components/Navbar/Navbar'
import HomeSection from '@/Sections/Home'
import About from '@/Sections/About'
import Projects from '@/Sections/Projects'
import Contact from '@/Sections/Contact'
import Footer from '@/Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import PreLoader from '@/Components/PreLoader/PreLoader';
export const DataContext =createContext();


export default function Home() {
  const [infoData, setInfoData] = useState(null);
  const [AboutData, setAboutData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);
  const [skillsData, setSkillsData] = useState(null);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=> {
    infoData && AboutData && projectsData && skillsData && setIsLoading(false);
  },[infoData,AboutData,projectsData,skillsData])

  if (typeof document !== 'undefined') {
    isLoading?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll");
  }
  return (
    <DataContext.Provider value={{infoData,setInfoData,AboutData,setAboutData,projectsData,setProjectsData,skillsData,setSkillsData}}>
    <main className='app' >
      {isLoading?<PreLoader/>:null}
      <NavBar/>
      <HomeSection/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
    </DataContext.Provider>
  )
}
