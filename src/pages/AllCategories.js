
import SubHero from '../components/SubHero/SubHero';
import {Link} from 'react-router-dom';


import { useContext } from "react";
import aShopContext from "../components/Context/ContextProvider";

const AllCategories = () => {
  const {categories} = useContext(aShopContext);

  const importImage = (image) => {
    return require(`../assets/img/900x900/${image}`).default;
  } 
  
  return (
    <div>
      <SubHero title="Our Categories" subtitle="Browse through our categories" />
      <div class="container space-2">


        <div class="row mb-5">
        {categories.map((category, index) => {
                  return (
          <div class="col-lg-4 mb-3 mb-sm-5">
            <Link to={"/listings?cat="+category.id} class="card h-100 transition-3d-hover" href="#!">
              <div class="position-relative">
                <img class="card-img-top" src={importImage(category.image)} alt={category.name} />
              </div>
              <div class="card-body pb-0">
                <h4>{category.name}</h4>
                <p class="text-body">{category.description}</p>
              </div>
              <div class="card-footer border-0 pt-0">
                <Link to={"/listings?cat="+category.id} class="font-size-1 text-primary font-weight-bold">View Products <i class="fas fa-angle-right fa-sm ml-1"></i></Link>
              </div>
            </Link>
          </div>

        )})}
          

        </div>


      </div>
    </div >
    )
}

export default AllCategories;