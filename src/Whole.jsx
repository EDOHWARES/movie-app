import React from 'react'
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Details from './components/Details';

const Whole = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='details' element={<Details />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Whole
