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
  const tax = 10;
  const [cartItems, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [categories, setCategory] = useState([]);
  const [products, setProduct] = useState([]);
  
  useEffect(() => {

    fetch('https://ashop-jsondb.herokuapp.com/categories')
    .then(response => response.json())
    .then(data => setCategory(data));

    fetch('https://ashop-jsondb.herokuapp.com/products')
    .then(response => response.json())
    .then(data => setProduct(data));

    const cartItems = JSON.parse(localStorage.getItem("cartitems") || "[]");
    
    let totalAmount = 0; 
    cartItems.forEach((item, index) => {
        totalAmount = totalAmount + (parseInt(item.price) * parseInt(item.qty));
    });

    setCartTotal(parseInt(cartTotal) + totalAmount);
    setCart(cartItems);
    

  },[]);


  const setCartItems = (item) => {
    let setCartItems = []
    if(cartItems.length){
      setCartItems = cartItems;
    }

    let itemQty = item.qty;
    

    const existingCheck = setCartItems.filter(obj => {return obj.id === item.id});

    if(existingCheck.length){
      
      item = existingCheck[0];
      if(itemQty > item.qty){
        item.qty = parseInt(item.qty) + parseInt(itemQty);
      }else if(itemQty < item.qty){
        item.qty = parseInt(item.qty) - parseInt(itemQty);
      }else{
        item.qty = parseInt(item.qty);
      }
      
    }else{
      setCartItems.push(item);
    }

    
    localStorage.setItem("cartitems", JSON.stringify(setCartItems))
    setCart(setCartItems);
  }

  const clearCart = () => {
    setCart([]);
    setCartTotal(0);
  }

  const removeCartItem = (productId) => {
    const cartItem = cartItems.filter(obj => {return obj.id === productId})[0];
    let amountToRemove = parseInt(cartItem.price) * parseInt(cartItem.qty);
    let newCart = cartItems.filter(obj => {return obj.id !== productId});
    localStorage.setItem("cartitems", JSON.stringify(newCart))
    setCart(newCart);
    setCartTotal(parseInt(cartTotal) - amountToRemove);
  }


  return (
    <div id="main-container">
      <Router>
        <Header cartItems={cartItems} categories={categories} />
       
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
            <Cart products={products} removeCartItem={removeCartItem} tax={tax} cartTotal={cartTotal} cartItems={cartItems} clearCart={clearCart}  setCartTotal={setCartTotal} setCartItems={setCartItems} />
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