import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bollywood from "../Pages/Bollywood/Bollywood";
import Hollywood from "../Pages/Hollywood/Hollywood";
import Food from "../Pages/Food/Food";
import Fitness from "../Pages/Fitness/Fitness";
import Technology from "../Pages/Technology/Technology";
import Home from "../Pages/Home/Home";

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Bollywood" element={<Bollywood />} />
                <Route path="/Technology" element={<Technology />} />
                <Route path="/Hollywood" element={<Hollywood />} />
                <Route path="/Food" element={<Food />} />
                <Route path="/Fitness" element={<Fitness />} />
            </Routes>
        </BrowserRouter>
    );
};
export default RouterComponent;