import React from "react";
import "./Home.css"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="homepg">
         
         <div className="Navbar">
            <Navbar/>
         </div>

         <div className="home-text">
            <h2>Bye bye, long waits and cold food..!</h2>
            <p>Order now and get it delivered in a flash </p>
            <div className="home-btn">
            <Link to="/LogIn">Start Exploring</Link> 
            </div>
        </div>
         </div>

    )
};
  
  export default Home;