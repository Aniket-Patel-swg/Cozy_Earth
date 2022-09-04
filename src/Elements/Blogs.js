import React from "react";
import './Blogs.css';
import { Button } from "./Button";

function Blogs(){

    return(
        <div className="Blogs">
            <div className="first-section">
                    <h2 id="start-heading">It's not too late</h2>
                    <p id="start-text">You! as an responsible citizen can make lot of difference.</p>
                <div className="about-cozy-earth">
                    <div id="Main-text">
                        <h1>Cozy Earth</h1>
                        <p>_________________________</p>
                    </div>
                    <div id="Main-intro">
                        <p>
                            Cozy Earth is an interactive tool that lets you learn about renewable sources, also lets you know which energy
                            source is ideal for your location. Using our deep domain knowledge of electrification and our pioneering digital solutions, we’ve created a comprehensive portfolio for all participants in the energy system. It combines our state-of-the-art hardware portfolio with digital solutions from our Xcelerator for Grids portfolio that connects the physical and digital worlds and IT with OT.
                        </p>
                    </div>
                </div>
                <div className="Save-Earth">
                    <div id="Main-intro">
                        <p>
                        As a source of energy, green energy often comes from renewable energy technologies such as solar energy, wind power, geothermal energy, biomass and hydroelectric power. Each of these technologies works in different ways, whether that is by taking power from the sun, as with solar panels, or using wind turbines or the flow of water to generate energy.
                        </p>
                        
                    </div>
                    <p id="Line">________________________</p>
                    <div id="Main-text">
                        <h1>Save Earth</h1>
                    </div>
                </div>
            </div>
        	<div className="Second-section">
                    {/* <Button className="Blog-button">EXPLORE</Button> */}
               <div className="General-info">
                    <div id="Second-heading"><h1>Green energy</h1></div>
                    <div id="Second-heading"><h1>Footprints </h1></div>
                    <div id="Second-heading"><h1>Why Cozy Earth</h1></div>  
                    <div id="Second-text">Renewable energy is energy that is collected from renewable resources that are naturally replenished on a human timescale. It includes sources such as sunlight, wind, the movement of water, and geothermal heat.Renewable energy often provides energy for electricity generation to a grid, air and water heating/cooling, and stand-alone power systems. </div>
                    <div id="Second-text">An environmental footprint (also known as ecological footprint) takes into account the entirety of supply and demand of goods and services for the planet. In doing so, it is assumed that the entire population follows a certain lifestyle characterized by a known person or a group of people.</div>
                    <div id="Second-text">Cozy Earth is an website let's you know aobut various green energies, also let's you know about which energy suits best to your location. This website gives brief overview about green energies. </div>  
               </div>
            </div>
            
        </div>
    )
}

export default Blogs;