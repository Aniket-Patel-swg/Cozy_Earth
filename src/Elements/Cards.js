import React from "react";
import './Cards.css';
import { link } from 'react-router-dom';

function Cards() {
    return(

        <div className="cards">
          <section className="Working-info">
            <h1>Major Green energies </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, animi dicta? Quo recusandae aperiam doloribus, sequi libero praesentium sint sed. Optio officia sed ex nisi? Animi officiis ratione veritatis, explicabo, asperiores quo accusantium soluta molestias architecto quis odit minus, quae consequatur. Nam minima provident iste?</p>
          </section>
            <div className = "card-container">
  <div class="card card-1">
    <div class="card-img"></div>
    <a href="" class="card-link">
      <div class="card-img-hovered"></div>
    </a>
    <div class="card-info">
      <h1 class="card-title">Solar Energy</h1>
      <div class="card-creator">Most preffered green energy</div>
    </div>
  </div>
  <div class="card card-2">
    <div class="card-img"></div>
    <a href="" class="card-link">
      <div class="card-img-hovered"></div>
    </a>
    <div class="card-info">
      <h1 class="card-title">Wind Energy</h1>
      <div class="card-creator">Most used green energy</div>
    </div>
  </div>
  <div class="card card-3">
    <div class="card-img"></div>
    <a href="" class="card-link">
      <div class="card-img-hovered"></div>
    </a>
    <div class="card-info">
      <h1 class="card-title">GeoThermal Energy</h1>
      <div class="card-creator">Earth's heat to electricity</div>
    </div>
  </div>
  
  <div class="card card-4">
    <div class="card-img"></div>
    <a href="" class="card-link">
      <div class="card-img-hovered"></div>
    </a>
    <div class="card-info">
      <h1 class="card-title">Hydro Energy</h1>
      <div class="card-creator">Most used green energy</div>
    </div>
  </div>
  <div class="card card-5">
    <div class="card-img"></div>
    <a href="" class="card-link">
      <div class="card-img-hovered"></div>
    </a>
    <div class="card-info">
      <h1 class="card-title">Biomass Energy</h1>
      <div class="card-creator">From leftover to green energy</div>
    </div>
  </div>
  <div class="card card-6">
    <div class="card-img"></div>
    <a href="" class="card-link">
      <div class="card-img-hovered"></div>
    </a>
    <div class="card-info">
      <h1 class="card-title">Tidal  Energy</h1>
      <div class="card-creator">From waves to electricity</div>
    </div>
  </div>
  
  
</div>


        </div>
            
    )
}

export default Cards;
