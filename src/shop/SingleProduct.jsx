import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ProductDispaly from "./ProductDispaly";
import Review from "./Review";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const result = product.filter((p) => p.id === id);

  return (
    <div>
      <PageHeader title={"OUR SHOP SINGLE"} curPage="Shop / Single Product" />

      <div className="shop-single padding-tb aside bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    {/* IMAGE   */}
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        {result.map((item, i) => (
                          <div key={i} className="single-thumb">
                            <img src={item.img} alt="" />
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* DETAILS   */}
                    <div className="col-md-6 col-12">
                        <div className="post-content">
                            <div>
                                {
                                    result.map(item => <ProductDispaly key={item.id} item={item} />)
                                }
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="review">
                  <Review />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
