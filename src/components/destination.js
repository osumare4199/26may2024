import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"

const Destination = () =>{
    return(
        <div className="Destination">
            <h1>Popular Destination</h1>
            <p>Tours give the opportunity to see a lot, within a time frame </p>
            
            <div className="first-des">
                <div className="des-texr">
                    <h2>Taal Volcano, Batanges</h2>
                    <p>When you look out the window and see gray skies, and temperatures have been near zero for weeks on end then you know that the time has come to plan your next vacation. Many people use travel portals before booking their trip, or inform themselves about possible travel destinations in travel blogs. An important part of the pages are descriptions of destinations and travel texts. They provide the reader with background information, practical tips and get him in the mood for a holiday as well as offering good decision guidance.</p>
            
            
            
            <div className="Image">
                <img alt="img"scr={Mountain1}/>
                <img alt="img"scr={Mountain2}/>
                <img alt="img"scr={Mountain3}/>
                </div>
            </div>
            </div>
            </div>
            
        
    );
};

export default Destination