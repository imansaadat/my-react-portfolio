import logo from "./logo.svg";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Features from "./components/features/Features";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
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
      </main>
    </div>
  );
}

export default App;
