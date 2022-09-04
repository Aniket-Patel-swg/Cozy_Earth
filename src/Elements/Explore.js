import React from "react";
import './Explore.css';
import { useState } from 'react';


const Explore = () => {
    
    const [location,setLocation] = useState('Enter your location');
    const [first, setFirst] = useState('Solar energy');
    const [second, setSecond] = useState('Wind energy');
    const [third, setThird] = useState('Geothrmal energy');
    
   
    return(
        <div className="Explore">
                <p>
                    You can make lot difference
                </p>
                <h3>
                    See how!        
                </h3>
            <section className="Search">
                
                    
                    <input 
                    type="text" required placeholder="Enter your location" />
                
                    <button>Search</button>
                
            </section>
            <div className="Maps">
                <div>
                    <img src="./GoogleMapPic.webp" alt="" className="MapImage" />
                </div>     
                <div>
                    <span className="first">
                        <a href="">
                        <h2>
                            1. { first }
                            {/* onChange = { javaScript function to setFirst } */}
                        </h2>
                        </a>
                        <p>This green energy suits best according to you locaiton</p>
                    </span>
                    <span className="second">
                        <a href="">
                        <h2>
                            2. {second}
                             {/* onChange = { javaScript function to setSecond } */}
                        </h2>
                        </a>
                        <p>This suits best according to you locaiton</p>
                    </span>
                    <span className="second">
                        <a href="">
                        <h2>
                            3. { third }
                             {/* onChange = { javaScript function to setSecond } */}
                        </h2>
                        </a>
                        <p>This suits best according to you locaiton</p>
                    </span>
                    
                </div>   
            </div>
        </div>
    )
}

export default Explore;