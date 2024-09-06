import React from "react";
import PageHeader from "../components/PageHeader";

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc =
  "we are dedicated to providing top-quality sports gear and apparel for athletes of all levels. Our expert team is here to help you find everything you need to excel in your favorite sports and fitness activities.";

const year = "30+";
const expareance = "Years Of Experiences";

import icon1 from "../assets/images/about/icon/01.jpg"
import icon2 from "../assets/images/about/icon/02.jpg"
import icon3 from "../assets/images/about/icon/03.jpg"

const aboutList = [
    {
      imgUrl: icon1,
      imgAlt: "about icon expert staff",
      title: "Expert Staff",
      desc: "Our knowledgeable team is here to help you find the perfect sports gear and apparel to match your needs and performance goals.",
    },
    {
      imgUrl: icon2,
      imgAlt: "about icon quality products",
      title: "Quality Products",
      desc: "We offer a curated selection of top-quality sports equipment and clothing from trusted brands to ensure you get the best in performance and durability.",
    },
    {
      imgUrl: icon3,
      imgAlt: "about icon customer satisfaction",
      title: "Customer Satisfaction",
      desc: "We're committed to providing exceptional customer service and ensuring you have a seamless shopping experience every time.",
    },
  ];

  import img1 from "../assets/images/about/icon/ASRV _ Performance Vented Tank Running Training.jpeg"
  import img2 from "../assets/images/about/icon/Athletic Brand Photography Spikes of Reality.jpeg"
  

const About = () => {
  return (
    <div>
      <PageHeader title={"About Our Brand"} curPage={"About"}></PageHeader>
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src={img1} alt="" />
                </div>
                <div className="abs-thumb" style={{left: "380px"}}>
                  <img src={img2} alt="" />
                </div>
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{expareance}</p>
                </div>
              </div>
            </div>

            <div className="col">
                <div className="about-right">
                    <div className="section-header">
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title">{title}</h2>
                        <p>{desc}</p>
                    </div>

                    <div className="section-wrapper">
                        <ul className="lab-ul">
                            {
                                aboutList.map((val, i) => (
                                    <li key={i}>
                                        <div className="sr-left">
                                            <img src={val.imgUrl} alt="" />
                                        </div>
                                        <div className="sr-right">
                                            <h5>{val.title}</h5>
                                            <p>{val.desc}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
