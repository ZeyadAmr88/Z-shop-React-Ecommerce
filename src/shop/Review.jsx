import React, { useState } from "react";
import Ratting from "./../components/Ratting";

const reviwtitle = "Add a Review";

import review1 from "../assets/images/instructor/zzz/01.jpg"
import review2 from "../assets/images/instructor/zzz/02.jpg"
import review3 from "../assets/images/instructor/zzz/03.jpg"
import review4 from "../assets/images/instructor/zzz/04.jpg"

import post from "../assets/images/shop/04.jpg"

let ReviewList = [
  {
    imgUrl: review1,
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: review2,
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: review3,
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: review4,
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];



const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li className="desc" onClick={() => setReviewShow(!reviewShow)}>
          Description
        </li>
        <li className="rev" onClick={() => setReviewShow(!reviewShow)}>
          Reviews
        </li>
      </ul>

      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={review.imgUrl} alt="" />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a>{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>

              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <input
                    type="email"
                    name="email"
                    id="name"
                    placeholder="Your Email *"
                  />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Rating </span>
                    <Ratting />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Type Here Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            consectetur, atque ducimus, recusandae minus dolorem debitis fuga
            voluptatem odio inventore rerum? Sunt debitis nesciunt eveniet
            voluptatum expedita accusantium laudantium! Alias, at laborum! Sint
            tenetur quos voluptates earum fugiat ut eveniet, quisquam nesciunt
            laudantium est. Soluta vel mollitia voluptatibus aliquam harum et
            qui. Harum cum nemo necessitatibus provident modi ratione atque
            animi doloribus. Consectetur esse qui minima quia vero amet
            consequatur, aut ad, aliquid cupiditate possimus nulla ex culpa at
            fugit!
          </p>
          <div className="post-item">
            <div className="post-thumb">
                <img src={post} alt="" />
            </div>
            <div className="post-content">
                <ul className="lab-ul">
                    <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, reiciendis.</li>
                    <li> expedita accusantium laudantium! Alias, at laborum.</li>
                    <li> amet, consectetur adipisicing recusandae minus dolorem elit. Error, reiciendis.</li>
                    <li> aliquid cupiditate possimus nulla ex culpa at fugit.</li>
                    <li> ipsum dolor sit amet, consectetur adipisicing elit. Error, reiciendis.</li>
                </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            consectetur, atque ducimus, recusandae minus dolorem debitis fuga
            voluptatem odio inventore rerum? Sunt debitis nesciunt eveniet
            voluptatum expedita accusantium laudantium! Alias, at laborum! Sint
            tenetur quos voluptates earum fugiat ut eveniet, quisquam nesciunt
            laudantium est. Soluta vel mollitia voluptatibus aliquam harum et
            qui.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
