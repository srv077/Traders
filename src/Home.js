
import Footer from './Components/Footer';
import Frond from './Components/Frond';
import Header from './Components/Header';
import Products from './Components/Products';

function Home() {
  return (
    <div className="App">
      <Header/>
      <Frond/>   
      <Products/>
      <Footer/>
    </div>
  );
}

export default Home;