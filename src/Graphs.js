import React from "react";
import './Graphs.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";    

const Graphs = () => {

    const data1 =[{
        name1:"Solar Energy", energy: 780, amount:350,
        name2:"Wind Energy", energy: 700, amount:500,
        name3:"Geothermal Energy", energy:25, amount:75,
    }]

    const data2 = [{
      value1: 'Solar Energy ', emission: 305, conventional: 95, amount: 560,
      value2: 'Wind Energy ', emission: 35, conventional: 95, amount: 459,
      value3: 'Geothermal Energy', emission: 65, conventional: 95, amount: 467,
    }]

    
    return ( 
      <div className="Graphs">
        <p className="Heading1">
          Energy comparision
        </p> 
        <div className="Container">
          <div>
          <BarChart 
        width={350}
        height={350}
        data ={data1}
        margin ={{
            top: 5,
            right:30,
            left:20,
            bottom:5,

        }}
        >   
    
      <CartesianGrid strokeDasharray="" />
      <XAxis dataKey="name1" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="energy" fill="#698cff" />
      <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>     
          </div>
          <div>
          <BarChart 
        width={350}
        height={350}
        data ={data1}
        margin ={{
            top: 5,
            right:30,
            left:20,
            bottom:5,

        }}
        >   
    
      <CartesianGrid strokeDasharray="" />
      <XAxis dataKey="name2" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="energy" fill="#698cff" />
      <Bar dataKey="amount" fill="#8884d8" />
      </BarChart> 
          </div>
          <div>
          <BarChart 
        width={350}
        height={350}
        data ={data1}
        margin ={{
            top: 5,
            right:30,
            left:20,
            bottom:5,

        }}
        >   
    
      <CartesianGrid strokeDasharray="" />
      <XAxis dataKey="name3" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="energy" fill="#698cff" />
      <Bar dataKey="amount" fill="#8884d8" />
      </BarChart> 
          </div>
        </div>
        <div className="Second-grpahs">
         
          <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="value" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="emission" fill="#8884d8" />
          <Bar dataKey="normal" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
         
        </div>
        <div className="second-chart">
          <p className="second-heading">
            Carbon Emission
          </p>
          <div>
          <div className="Container">
          <div>
          <BarChart 
        width={350}
        height={350}
        data ={data2}
        margin ={{
            top: 5,
            right:30,
            left:20,
            bottom:5,

        }}
        >   
      <CartesianGrid strokeDasharray="" />
      <XAxis dataKey="value1" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="emission" fill="#698cff" />
      <Bar dataKey="conventional" fill = "#135370"/>
      <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>     
          </div>
          <div>
          <BarChart 
        width={350}
        height={350}
        data ={data2}
        margin ={{
            top: 5,
            right:30,
            left:20,
            bottom:5,

        }}
        >   
    
      <CartesianGrid strokeDasharray="" />
      <XAxis dataKey="value2" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="emission" fill="#698cff" />
      <Bar dataKey="conventional" fill="#135370"/>
      <Bar dataKey="amount" fill="#8884d8" />
      </BarChart> 
          </div>
          <div>
          <BarChart 
        width={350}
        height={350}
        data ={data2}
        margin ={{
            top: 5,
            right:30,
            left:20,
            bottom:5,

        }}
        >   
    
      <CartesianGrid strokeDasharray="" />
      <XAxis dataKey="value3" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="emission" fill="#698cff" />
      <Bar dataKey="conventional" fill="#135370"/>
      <Bar dataKey="amount" fill="#8884d8" />
      </BarChart> 
          </div>
        </div>
        
          </div>
        </div>
      </div>
      
     
        

     );
}
 
export default Graphs;