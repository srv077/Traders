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
      <Route exact path="/">
          <Route index element={<Home />} />
          <Route exact path="/products" element={<Products />}/>
          <Route exact path="/pricing" element={<Pricing/>}/>
          <Route exact path="/signupform" element={<SignupForm/>}/>
          <Route exact path="*" element={<Home/>} />
      </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
