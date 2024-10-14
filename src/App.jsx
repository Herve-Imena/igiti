import Navbar from "./components/Navbar";
import { Element } from "react-scroll";
import { OurTeam,Footer, Hero,
PopularProducts, Services, SuperQuality, Contact} from "./sections";

const App = () =>(
<main className="relative mx-3">
    <Navbar/>
    <Element name="hero" className="xl:padding-l wide:padding-r padding-b">
      <Hero/></Element>
      <Element name="products" className="padding bg-pale-blue max-xl:mt-8">
        <PopularProducts/>
      </Element>
      <Element name="about-us" className="padding">
        <SuperQuality/>
      </Element>
      <Element name='services' className="padding-x py-3 mb-8">
        <Services/>
      </Element>
      <Element name="team" className="padding bg-pale-blue">
        <OurTeam/>
      </Element>
      <Element name="contact" className="padding-x sm:py-32 py-16 w-full">
        <Contact/>
      </Element>
      <Element className="padding-x padding-t pb-8 bg-black">
        <Footer/>
      </Element>
  </main>
)
export default App;