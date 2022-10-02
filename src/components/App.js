
import React from "react";

// import for react-router-dom
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./AboutUs";
import { BookList } from "./BookList";
import { Home } from "./Home";



export const App = () => {
    return (
        // wrap everything in <Routes></Routes> 
        <Routes>
            {/* have individual routes for each component */}
            {/* path is the URL and element is the JSX you want to render for that URL */}
            <Route path="/" element={<Home />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/booklist" element={<BookList />}/>
        </Routes>
    )
}


