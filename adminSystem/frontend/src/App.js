import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from "./Login"
import HomePage from "./components/HomePage"
import AddPackage from "./components/package/AddPackage"
import AddPlace from "./components/place/AddPlace"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/home" element={<HomePage/>}/>
         <Route path="/add_package" element={<AddPackage/>}/>
          <Route path="/add_Place" element={<AddPlace/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
