import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './Login';
import HomePage from './components/HomePage';
import AddPackage from './components/package/AddPackage';
import SeePackages from './components/package/SeePackages';
import AddPlace from './components/place/AddPlace';
import InsertPrice from './components/price/InsertPrice'
import Navigation from './components/profile/Navigation';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<div><Navigation /><HomePage /></div>} />
          <Route path="/add_package" element={<div><Navigation /><AddPackage /></div>} />
          <Route path="/add_place" element={<div><Navigation /><AddPlace /></div>} />
          <Route path="/see_packages" element={<div><Navigation /><SeePackages /></div>} />
          <Route path="/insert_price" element={<div><Navigation/><InsertPrice/></div>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

