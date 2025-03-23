import { Link } from "react-router-dom";

//Layouts
import Header from "./../layouts/CommanHeader";
import Footer from "./../layouts/Footer2";
import PageTitle from "./../layouts/PageTitle";
import React, { useEffect, useState } from "react";
import { getData } from "../services/apiService";
//images

export default function ShopGrid3() {
  const [product, SetProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData("products/all/");
        SetProducts(data);

        console.log(data, "shopGrid");
      } catch (error) {
        console.error("Failed to fetch Team Memebers:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <PageTitle title="Shop Grid 3" parentPage="Home" childPage="Shop" />
        <section className="content-inner">
          <div className="container">
            <div className="row">
              {product.map((item, ind) => (
                <div className="col-lg-4 col-sm-6" key={ind}>
                  <div className="item-box m-b30">
                    <div className="item-img">
                      <img
                        src={`https://api.galaxylube.co/${item.image1}`}
                        alt=""
                        style={{
                          width: "330px",
                          height: "377px",
                          objectFit: "contain",
                          display: "block",
                          margin: "auto",
                        }}
                      />
                      <span className={`badge ${item.badgeClass}`}>
                        {item.badge}
                      </span>
                    </div>
                    <div className="item-info text-center">
                      <h4 className="item-title">
                        <Link to={`/product-details/${item.id}`}>
                          {item.name}
                        </Link>
                      </h4>

                      {item.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
