import { Link } from 'react-router-dom';
import { useState } from "react";

const Navigation = (props) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const categories = props.categories;

  const searchValidation = (e) => {
    if (searchKeyword == '') {
      alert('Search query cannot be empty');
      e.preventDefault();
      e.stopPropagation();
    }

    if (!searchKeyword.match(/^[^<>!$'\"/;`%]*$/)) {
      alert('Search query cannot contain special characters.')
      e.preventDefault();
      e.stopPropagation();
    }

  }
  return (
    <div id="navBar" className="hide collapse d-md-block bg-white pb-3">
      <div className="container d-md-none">
        <div className="position-static mx-0 ml-md-auto my-4 mt-md-0 w-100 w-md-50 mr-4">
          <div className="border rounded p-0">
            <form method="get" action="/listings/all">
              <div className="form-row align-items-center flex-nowrap">
                <div className="col-sm">
                  <div className="input-group input-group-merge input-group-borderless">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-search"></i>
                      </div>
                    </div>

                    <input type="text" className="form-control" name="query" placeholder="Search here..." aria-label="Search here..." onKeyUp={(event) => {
                      setSearchKeyword(event.target.value);
                    }} />
                  </div>
                </div>

                <div className="col-sm-auto input-group-flush pr-3">
                  <select id="exampleFormControlSelect1" name="cat" className="form-control " defaultValue={{ label: "All", value: 0 }} style={{ border: 0, textAlignLast: 'right' }}>
                    <option value="0">All</option>
                    {categories.map((item, index) => {
                      return <option value={item.id}>{item.name}</option>
                    })}
                  </select>
                </div>
                <div className="input-group-append">
                  <button type="submit" className="rounded-0 btn btn-block btn-primary" onClick={searchValidation}>Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container d-md-flex align-items-center">

        <Link className="dropdown-nav-link d-block" href="#!" to="/listings/bestsellers">
          Bestsellers
                </Link>

        {categories.map((item, index) => {
          return (
            <Link className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block" href="#!" to={"/listings/" + item.id}>
              {item.name}
            </Link>
          )
        })}

        <Link categories={props.categories} className="dropdown-nav-link ml-0 ml-md-4 mt-2 mt-md-0 d-block" href="#!" to="/categories">
          All Categories
                </Link>
      </div>
    </div>
  );
}

export default Navigation;