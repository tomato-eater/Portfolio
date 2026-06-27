import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"
import { useTheme } from "./hooks/useTheme"
import About from "./components/About"
import Skills from "./components/Skills"
import Hero from "./components/Hero"
import Works from "./components/Works"
import WorkDetail from "./pages/WorkDetail"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function HomePage(){
 	return(
   	<>
      <Hero/>
	    <About/>
	    <Skills/>
      <Works/>
      <Certifications/>
      <Contact/>
   	</>
 	 )
}

export default function App(){
  const {theme, toggle} = useTheme()
  return(
    <>
      <ScrollToTop />
      <Header theme = {theme} onThemeToggle = {toggle} />
      <main>
        <Routes>
          <Route path = "/" element = {<HomePage />} />
          <Route path = "/works/:id" element = {<WorkDetail/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}