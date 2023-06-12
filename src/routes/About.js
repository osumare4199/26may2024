import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import AboutImg from "../assets/person-sits-looking-out-towards-still-water.jpg"

function about (){
    return(
        <>
         <Navbar />
        <Hero
        cName=".hero-mid"
        heroImg={AboutImg}
        title="Your Journey Your Story"
        
       
        url="/"
        btnClass="hide"
        />
        </> 
    
    )
}

export default about;