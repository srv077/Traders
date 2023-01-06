
import { useEffect } from 'react';
import Account from './Components/Account';
import Footer from './Components/Footer';
import Frond from './Components/Frond';
import Header from './Components/Header';
import Pricingmain from './Components/Pricingmain';
import Productmain from './Components/Productmain';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <div className="App">
      <Header/>
      <Frond/>   
      <Productmain/>
      <br></br>
      <Account/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Pricingmain/>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
}

export default Home;