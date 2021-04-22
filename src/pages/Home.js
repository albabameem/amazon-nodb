
import Hero from '../components/Home/Hero/Hero';
import Categories from '../components/Home/Categories/Categories';
import Bestsellers from '../components/Home/Bestsellers/Bestsellers';

import { useContext } from "react";
import aShopContext from "../components/Context/ContextProvider";

const Home = () => {
  const context = useContext(aShopContext);

  const categories = context.categories;
  const products = context.products;

    return (
        <div id="home-container">
            <Hero products={products} categories={categories}  />
            <Categories categories={categories} />
            <Bestsellers products={products} categories={categories} />
        </div>
    )
}

export default Home;