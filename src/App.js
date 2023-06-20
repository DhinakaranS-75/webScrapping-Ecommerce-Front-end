import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/products/${searchTerm}`
      );

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
        <div className="container col-md -10 col-sml-10">
          <a className="navbar-brand " href="#">
            <img
              src="https://banner2.cleanpng.com/20180711/xqq/kisspng-flipkart-india-logo-tagline-coupon-flipkart-logo-5b45e155cc6fa8.4167716115313063258374.jpg"
              alt="Company Logo"
              width="100"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="d-flex ms-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="SearchTerm"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSearch}
              >
                Search
              </button>
            </form>

            <a href="#" className="btn btn-outline-primary ms-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              Cart
            </a>
          </div>
        </div>
      </nav>

      <div className="products ">
        {products.map((product, index) => (
          <div class="card mb-4 " key={index} style={{ maxWidth: "540px" }}>
            <div class="row g-2">
              <div class="col-md-4">
                <p class="card-text rating">
                  {product.rating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                </p>
                <img
                  src={product.image}
                  class="img-fluid rounded-start"
                  alt={product.name}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h6 class="card-title">{product.name}</h6>
                  <h3 class="card-text">{product.price}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
