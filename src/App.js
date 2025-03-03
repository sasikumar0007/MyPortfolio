import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Serve from './components/Serve/Serve';
import Services from './components/Services/Services';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id='About'> <About /> </section>
      <section id='Services'><Serve type="services"/></section>
      <section><Services /></section>
      <section id="Projects"><Serve type="portfolio"/></section>
      <Projects /> 
      <section id='Contact'><Contact /> </section>
    </div>
  );
}

export default App;