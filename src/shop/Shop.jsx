import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination  from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";

const showResults = "Showing 01 - 12 of 139 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);

  const [currentPage, setcurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNember) => {
    setcurrentPage(pageNember);
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem= (curcat) => {
    const newItem =Data.filter((newVal) => {
      return newVal.category === curcat;
    })

    setSelectedCategory(curcat);
    setproducts(newItem);
  }

  return (
    <div>
      <PageHeader title="Have Fun" curPage="Shop" />

      {/* SHOP PAGE   */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* LAYOUT AND TITLE HERE   */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid " onClick={() => setGridList(!GridList)}>
                      <i
                        className={`icofont-ghost ${
                          GridList ? "my-active" : ""
                        }`}
                        style={{ color: "#b2cec1" }}
                      ></i>
                    </a>
                    <a className="list " onClick={() => setGridList(!GridList)}>
                      <i
                        className={`icofont-listine-dots ${
                          GridList ? "" : "my-active"
                        }`}
                      ></i>
                    </a>
                  </div>
                </div>
                {/* PRODUCTS CARDS   */}
                <div>
                  <ProductCards GridList={GridList} products={currentProducts} />
                </div>

                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList}/>
                <ShopCategory 
                filterItem={filterItem}
                menuItems={menuItems}
                setProducts={setproducts}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setcurrentPage={setcurrentPage}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
