import React from "react";
import './Charts.css';
import {Bar} from 'react-chartjs-2'

function Charts() {

    return(
        <div className="Charts">
           <div className="Charts-Main-text">
                <p>You can make lot difference</p>
                <h2>See how!</h2>
           </div>
           {/* <Bar 
            data={{
            labels: ['Solar energy','Wind energy','Biomass energy'],
            }}
            height={500}
            width={500}
           />  */}
        </div>
    )
}

export default Charts;