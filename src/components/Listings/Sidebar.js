import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  const products = props.products;
  const categories = props.categories;

  return (
      <div className="mr-lg-3">
        <div className="navbar-expand-lg navbar-expand-lg-collapse-block navbar-light">
          <button type="button" className="navbar-toggler btn btn-block border py-3"
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  aria-controls="sidebarNavExample1"
                  data-toggle="collapse"
                  data-target="#sidebarNavExample1">
            <span className="d-flex justify-content-between align-items-center">
              <span className="h5 mb-0">View all categories</span>
              <span className="navbar-toggler-default">
                <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"/>
                </svg>
              </span>
              <span className="navbar-toggler-toggled">
                <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
                </svg>
              </span>
            </span>
          </button>

          <div id="sidebarNavExample1" className="collapse navbar-collapse">
            <div className="p-2 p-lg-0">
              <div className="mt-3 mt-lg-0">
                <h2 className="h4">Categories</h2>

                <Link className="dropdown-item d-flex justify-content-between align-items-center px-0" to="/listings">
                  All
                  <span className="badge border badge-pill">{products.length}</span>
                </Link>
                {categories.map((category, index) => {
                  return (
                    <Link className="dropdown-item d-flex justify-content-between align-items-center px-0" to={"/listings?cat="+category.id}>
                      {category.name}
                      <span className="badge border badge-pill">{products.filter(obj => {return obj.category === category.id}).length}</span>
                    </Link>
                  )}
                )}
              </div>

              
            </div>
          </div>
        </div>
      </div>
  )
}

export default Sidebar;