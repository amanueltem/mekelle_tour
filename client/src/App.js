import { BrowserRouter, Routes,Route } from 'react-router-dom';
import BookNow from './components/book/BookNow';
import BuyTourPackage from './components/package/BuyTourPackage';
import Places from './components/destination/Places';
import Map from './components/map/Map';
import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/book-now" element={<BookNow/>} />
        <Route path="/buy-tour-package" element={<BuyTourPackage/>} />
        <Route path="/places" element={<Places/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
