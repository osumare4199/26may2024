import Hero from "../components/Hero";
import Navbar from "../components/Navbar"


function Home (){
    return(
        <>
          <Navbar />
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        </>
    )
}

export default Home;