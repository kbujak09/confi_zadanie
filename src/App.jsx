import './app.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Features from './components/features/Features';
import Extensions from './components/extensions/Extensions';
import Faq from './components/faq/Faq';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import { useState } from 'react';

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header openMenu={setIsMenuOpen}/>
      <About />
      <Features />
      <Extensions />
      <Faq />
      <Contact />
      <Footer />
      {isMenuOpen && <Menu closeMenu={setIsMenuOpen} />}
    </>
  )
}

export default App;
