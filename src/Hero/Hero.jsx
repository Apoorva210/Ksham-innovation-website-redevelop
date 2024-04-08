
import bootstrap from'bootstrap/dist/css/bootstrap.min.css';
import "./hero.scss";
import cover from "../Assets/122.jpg";
import FontAwesomeIcon from "../IconPage";
import cover_image from "../Assets/123.png";
import cv from "../Assets/124.png";
import CountUp from "react-countup";
import cvspecs from "../Assets/cv-specs.png";
import inno_specs from "../Assets/innospecs.png";
import specs from "../Assets/sspecs.png";
import sspecs from "../Assets/specs1.png";
import ssspecs from "../Assets/specs2.png";

const Hero = () => {
    return(
        <section className="hero_wrapper">
       <div className="hero_section">
<div className='hero-left'>
    <div className='hero-title'>
    <h1>World's 1st Smart Aid Glasses for <br></br> Deaf Mute Blind</h1>
    </div>
    <div className='hero-des'>
    <span className='text-des' >Able glasses aims to provide smart aid glasses for Deaf, Mute and Blind.</span>
    
    </div>
    
    <div className='search-bar'>
    <FontAwesomeIcon className='icon'/>
    <input type='text' name=''></input>
    <button className='btn-search'>Get Early Access</button>
    </div>

    <div className='stats'>
        <div className='start-stat'>
            <span><CountUp start={8800} end={9000} duration={4}/><span className='plus'>+</span></span>
            <span className='secondary-text'>Premium Products</span>
        </div>

        <div className='second-stat'>
            <span><CountUp start={1950} end={2000} duration={4}/><span className='plus'>+</span></span>
            <span className='secondary-text'>Happy Customers</span>
        </div>

        <div className='third-stat'>
            <span><CountUp end={28} /><span className='plus'>+</span></span>
            <span className='secondary-text'>Awards</span>
        </div>
        <div className='hero-right'>
    <div className='im-container'>
        <img src={ssspecs}></img>
    </div>


</div>
        </div>
    </div>
    
       </div>
    </section>
    )
}




export default Hero