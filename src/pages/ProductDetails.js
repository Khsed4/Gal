import React, { useEffect, useState } from "react";
import { Tab, Nav } from "react-bootstrap";

//Layouts
import Header from "./../layouts/CommanHeader";
import Footer from "./../layouts/Footer2";
import PageTitle from "./../layouts/PageTitle";

import RealtedItemSwiper from "./../components/RealtedItemSwiper";
import ProductSlider from "./../components/ProductSlider";
import { useParams } from "react-router-dom";

import { getData } from "../services/apiService";

function ProductDetails() {
  const { id } = useParams();
  const [product, SetProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData(`products/${id}/`);
        SetProduct(data);
      } catch (error) {
        console.error("Failed to fetch Team Memebers:", error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <PageTitle
          title="Product Details"
          parentsPage="Home"
          childPage="Shop"
        />
        <section className="content-inner">
          <div className="container">
            <div className="row m-b60 m-sm-b30">
              <div className="col-xl-7 col-lg-6 m-b40">
                <div className="row sticky-top">
                  <ProductSlider data={product} />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 m-b40">
                <form method="post" className="cart p-md-l0">
                  <div className="dlab-post-title ">
                    <h4 className="post-title">{product.category}</h4>
                    <h3 className="post-title">{product.name}</h3>

                    <p className="m-b30">{product.description}</p>
                  </div>
                </form>
                <ul className="item-review">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
                <h5>5 Stars</h5>
              </div>
            </div>
            <div className="row m-b80 m-sm-b30">
              <Tab.Container defaultActiveKey="Description">
                <div className="col-xl-12">
                  <div className="product-description tabs-site-button">
                    <Nav as="ul" className="nav nav-tabs ">
                      <Nav.Item as="li">
                        <Nav.Link eventKey="Description">Description</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="Additional">
                          Additional Information
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="Description">
                        <p className="m-b10">{product.description}</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Additional">
                        <table className="table table-bordered">
                          <tr>
                            <td>{product.name}</td>
                            <td>{product.subtitle}</td>
                          </tr>
                        </table>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </div>
              </Tab.Container>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <RealtedItemSwiper />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default ProductDetails;
