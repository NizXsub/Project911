import Contact from '../newcomponents/Contact/Contact';
import Footer from '../newcomponents/Footer/Footer';
import Portfolio from '../newcomponents/Portfolio/Portfolio';
import Services from '../newcomponents/Services/Services';
import Header from '../newcomponents/header/Header';
import Hero from '../newcomponents/hero/Hero';

function NewLanding() {
  return (
    <div className=" ">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default NewLanding;