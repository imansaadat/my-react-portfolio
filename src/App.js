import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="w-full bg-primaryColor text-light">
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-3 md:px-8">
        <Intro />
        <Features />
        <Projects />
        <Resume />
        <Testimonial/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
