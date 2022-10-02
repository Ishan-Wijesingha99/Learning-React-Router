
import React from "react";

// import for react-router-dom
import { Route, Routes, Link } from "react-router-dom";

import { AboutUs } from "./AboutUs";
import { BookList } from "./BookList";
import { Home } from "./Home";



export const App = () => {
    return (
        <div>
            {/* create navbar element */}
            <nav>
                <ul>
                    <li>
                        {/* instead of anchors, we use <Link></Link> */}
                        {/* to is the url you want it to take you too */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link to="/booklist">Book List</Link>
                    </li>
                </ul>
            </nav>



            {/* wrap everything in <Routes></Routes>  */}
            {/* really cool thing about this is, when the path changes, a different element is rendered, but the JSX above is not rerendered, it remains, so when the URL changes only the JSX that needs to change is changed, increasing performance */}
            <Routes>
                {/* have individual routes for each component */}
                {/* path is the URL and element is the JSX you want to render for that URL */}
                <Route path="/" element={<Home />}/>
                <Route path="/aboutus" element={<AboutUs />}/>
                <Route path="/booklist" element={<BookList />}/>
            </Routes>
        </div>
    )
}



// how do the back and front buttons on the browser work?
// whenever there has been a change in the url, the browser detects it and keeps history of it, all the back and front buttons do is navigate through that history
// if the page changes but the URL doesn't, the back button won't take you back to that initial state of the page

