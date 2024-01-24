import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookNow from "./components/book/BookNow";
import BuyTourPackage from "./components/package/BuyTourPackage";
import Places from "./components/destination/Places";
import Map from "./components/map/Map";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import PayforBook from "./components/payment/PayforBook";
import PayforPackage from "./components/payment/PayforPackage";
import Contact from "./components/ContactUs/Contact";
import { AuthProvider } from './components/profile/AuthContext';
import Navigation from './components/profile/Navigation';
import "./index.css";
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <AuthProvider>
      <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/buy-tour-package" element={<BuyTourPackage />} />
          <Route path="/places" element={<Places />} />
          <Route path="/map" element={<Map />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payforbook" element={<PayforBook />} />
          <Route path="/payforpackage" element={<PayforPackage />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
