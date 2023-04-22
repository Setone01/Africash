import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Product from "./component/Product/Product"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product/>
    </div>
  );
}

export default App;
