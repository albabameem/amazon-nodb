import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './css/App.css';
import './assets/css/theme.min.css';
import './assets/vendor/@fortawesome/fontawesome-free/css/all.css';

import 'bootstrap/dist/js/bootstrap.bundle';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import AllCategories from "./pages/AllCategories";

//components
import Header from './components/Header/Header';
import Login from './components/Account/Login';
import Registration from './components/Account/Registration';
import Footer from './components/Footer/Footer';
import Listings from "./components/Listings/Listings";
import Single from "./components/Listings/Single";
import Checkout from './components/Cart/CartSuccess';
import ScrollToTop from './components/ScrollToTop';



//main function
function App() {
  const tax = 13;
  const [cartItems, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [categories, setCategory] = useState([]);
  const [products, setProduct] = useState([]);
  
  useEffect(() => {

    fetch('/categories')
    .then(response => response.json())
    .then(data => setCategory(data));

    fetch('/products')
    .then(response => response.json())
    .then(data => setProduct(data));

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    

  },[]);


  const setCartItems = (item) => {
    let setCartItems = []
    if(cartItems.length){
      setCartItems = cartItems;
    }

    setCartItems.push(item);

    setCart(setCartItems);
  }

  const clearCart = () => {
    setCart([]);
    setCartTotal(0);
  }


  return (
    <div id="main-container">
      <Router>
        <Header categories={categories} />
       
        <ScrollToTop>
        <Switch>
          <Route exact path="/">
            
            <Home products={products} categories={categories} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/categories">
            <AllCategories categories={categories} />
          </Route>

          <Route path="/listings">
            <Listings products={products} categories={categories}  />
          </Route>
          <Route path="/product">
            
            <Single products={products} cartTotal={cartTotal} setCartTotal={setCartTotal} setCartItems={setCartItems} />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/terms">
            <Terms />
          </Route>

          <Route path="/privacy">
            <Privacy />
          </Route>

          <Route path="/blogs">
            <Blogs />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>


          <Route path="/cart">
            <Cart tax={tax} cartTotal={cartTotal} cartItems={cartItems} clearCart={clearCart} />
          </Route>

          <Route path="/checkout">

            <Checkout />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
        </ScrollToTop>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;