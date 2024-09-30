import "./app.scss"
// import Test from "./Test"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section><Parallax type="about"/></section>
    <section id="About">About</section>
    <section><Parallax type="services"/></section>
    <section id="Services">Services</section>
    <section><Parallax type="portfolio"/></section>
    <section id="Portfolio">Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    {/* <Test/> */}
  </div>;
};

export default App;
