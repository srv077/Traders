import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Components/Products';
import Pricing from './Components/Pricing';
import SignupForm from './Components/SignupForm';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/">
          <Route index element={<Home />} />
          <Route path="products" element={<Home />}/>
          <Route path="pricing" element={<Pricing/>}/>
          <Route path="signupform" element={<SignupForm/>}/>
          <Route path="*" element={<Home/>} />
      </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
