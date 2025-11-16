import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'
import { createRoot } from "react-dom/client";
import App from './App';
import "./styles.css";
// import './App.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
