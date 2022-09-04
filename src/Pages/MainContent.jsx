import React from "react";
import Navbar from "../Elements/Navbar";
import Explore from "../Elements/Explore";
import Graphs from "../Graphs";

const mainPage = () => {
    return(
        <div>
            <Navbar />
            <Explore />
            <Graphs />
        </div>      
    )
}
export default mainPage;