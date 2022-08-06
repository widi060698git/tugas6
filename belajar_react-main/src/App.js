// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Contact from "./components/Contact";
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect} from "react"
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
 
function App() {
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ]);
 
  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }
 
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/add" element={<AddProduct/>}/>
        <Route path="/edit/:id" element={<EditProduct/>}/>

        </Routes>
      </Router>
    </div>
    </div>
    </div>
  );
}
export default App;