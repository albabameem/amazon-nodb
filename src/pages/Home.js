
import Hero from '../components/Home/Hero/Hero';
import Categories from '../components/Home/Categories/Categories';
import Bestsellers from '../components/Home/Bestsellers/Bestsellers';

const Home = (props) => {

    return (
        <div id="home-container">
            <Hero products={props.products} categories={props.categories}  />
            <Categories categories={props.categories} />
            <Bestsellers products={props.products} categories={props.categories} />
        </div>
    )
}

export default Home;