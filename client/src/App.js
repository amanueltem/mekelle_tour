import { BrowserRouter, Routes,Route } from 'react-router-dom';
import BookNow from './components/BookNow';
import BuyTourPackage from './components/BuyTourPackage';
import Places from './components/Places';
import Map from './components/Map';
import HomePage from './components/HomePage'

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
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
