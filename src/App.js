import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="w-full bg-primaryColor text-light">
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-3 md:px-8">
        <Intro />
        <Features />
        <Projects />
      </main>
    </div>
  );
}

export default App;
