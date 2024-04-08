import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Hero/Hero"
import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Innovation from "./Components/Innovation/Innovation";
import Collection from "./Components/Collection/Collection";
import Why from "./Components/Why/Why";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div><Navbar/>
    <Hero/> 
    <Innovation/> 
    <Collection/> 
    <Why/>
    <Footer/>
    </div>
    
      );
}

export default App;
