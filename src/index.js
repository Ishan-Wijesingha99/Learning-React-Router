import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css'

// import this to use react-router-dom
import { BrowserRouter } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      {/* wrap everything in <BrowserRouter></BrowserRouter> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
)

