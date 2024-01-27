import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import { Toaster } from 'sonner';



const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Toaster />
        <Header />
        <About />
        <Contact />
        <Footer /> 
    </div>
  )

}

export default Home