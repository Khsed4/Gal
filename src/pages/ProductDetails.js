import React, { useEffect, useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
//Layouts
import Header from "./../layouts/CommanHeader";
import Footer from "./../layouts/Footer2";
import PageTitle from "./../layouts/PageTitle";

import RealtedItemSwiper from "./../components/RealtedItemSwiper";
import ProductSlider from "./../components/ProductSlider";
import { useParams } from "react-router-dom";

import { getData } from "../services/apiService";
const commantBlog = [];

function ProductDetails() {
  const [plusNum, setplusNum] = useState(0);
  const { id } = useParams();
  const [product, SetProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData(`products/${id}/`);
        console.log("returned", data);
        SetProduct(data);
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
        <PageTitle title="Product Details" parentPage="Home" childPage="Shop" />
        <section className="content-inner">
          <div className="container">
            <div className="row m-b60 m-sm-b30">
              <div className="col-xl-7 col-lg-6 m-b40">
                <div className="row sticky-top">
                  <ProductSlider />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 m-b40">
                <form method="post" className="cart p-md-l0">
                  <div className="dlab-post-title ">
                    <h3 className="post-title">Cashmere Sweater</h3>
                    <p className="m-b30">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                  <div className="position-relative">
                    <h3 className="m-tb10">$2,140.00 </h3>
                    <div className="shop-item-rating">
                      <ul className="item-review">
                        <li>
                          <i className="fa fa-star me-1"></i>
                        </li>
                        <li>
                          <i className="fa fa-star me-1"></i>
                        </li>
                        <li>
                          <i className="fas fa-star-half-alt me-1"></i>
                        </li>
                        <li>
                          <i className="far fa-star me-1"></i>
                        </li>
                        <li>
                          <i className="far fa-star"></i>
                        </li>
                      </ul>
                      <span>4.5 Rating</span>
                    </div>
                  </div>
                  <div className="shop-item-tage m-b30">
                    <span>Tags :- </span>
                    <Link to={"#"}>Shoes,</Link>
                    <Link to={"#"}>Clothing</Link>
                    <Link to={"#"}>T-shirts</Link>
                  </div>
                  <div className="row">
                    <div className="col-md-7 col-sm-8">
                      <div className="widget">
                        <div className="widget-title mb-3">
                          <h6 className="title">Product Size</h6>
                        </div>

                        <div className="btn-group product-size">
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio1"
                            id="btnradio11"
                            defaultChecked
                          />
                          <label className="btn" htmlFor="btnradio11">
                            XS
                          </label>

                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio1"
                            id="btnradio21"
                          />
                          <label className="btn" htmlFor="btnradio21">
                            SM
                          </label>

                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio1"
                            id="btnradio31"
                          />
                          <label className="btn" htmlFor="btnradio31">
                            MD
                          </label>

                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio1"
                            id="btnradio41"
                          />
                          <label className="btn" htmlFor="btnradio41">
                            LG
                          </label>

                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio1"
                            id="btnradio51"
                          />
                          <label className="btn" htmlFor="btnradio51">
                            XL
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-4">
                      <div className="widget">
                        <div className="widget-title mb-3">
                          <h6 className="title">Select quantity</h6>
                        </div>
                        <div className="quantity btn-quantity style-1">
                          {/* <input id="demo_vertical2" type="text" value="1" name="demo_vertical2"/> */}
                          <button
                            className="btn btn-plus"
                            type="button"
                            onClick={() => setplusNum(plusNum + 1)}
                          >
                            <i className="ti-plus"></i>
                          </button>
                          <input
                            type="text"
                            className="quantity-input"
                            value={plusNum}
                          />
                          <button
                            className="btn btn-minus "
                            type="button"
                            onClick={() => setplusNum(plusNum - 1)}
                          >
                            <i className="ti-minus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <div className="widget-title mb-3">
                      <h6 className="title">Select the color</h6>
                    </div>

                    <div className="btn-group product-item-color">
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        defaultChecked
                      />
                      <label className="btn bg-red" htmlFor="btnradio1"></label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                      />
                      <label
                        className="btn bg-dark"
                        htmlFor="btnradio2"
                      ></label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio3"
                      />
                      <label
                        className="btn bg-yellow"
                        htmlFor="btnradio3"
                      ></label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio4"
                      />
                      <label
                        className="btn bg-blue"
                        htmlFor="btnradio4"
                      ></label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio5"
                      />
                      <label
                        className="btn bg-green"
                        htmlFor="btnradio5"
                      ></label>
                    </div>
                  </div>
                  <button className="btn btn-primary">
                    <i className="ti-shopping-cart m-r10"></i> Add To Cart
                  </button>
                </form>
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
                      <Nav.Item as="li">
                        <Nav.Link eventKey="Product">Product Review</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="Description">
                        <p className="m-b10">
                          Suspendisse et justo. Praesent mattis commyolk augue
                          Aliquam ornare hendrerit augue Cras tellus In pulvinar
                          lectus a est Curabitur eget orci Cras laoreet. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Suspendisse et justo. Praesent mattis commyolk augue
                          aliquam ornare augue.
                        </p>
                        <p>
                          "But I must explain to you how all this mistaken idea
                          of denouncing pleasure and praising pain was born and
                          I will give you a complete account of the system, and
                          expound the actual teachings of the great explorer of
                          the truth, the master-builder of human happiness. No
                          one rejects, dislikes, or avoids pleasure itself,
                          because it is pleasure, but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences
                        </p>
                        <ul className="list-check-1 primary">
                          <li>
                            "But I must explain to you how all this mistaken
                            idea of denouncing pleasure and praising pain was
                            born and I will give you a complete account of the
                            system, and{" "}
                          </li>
                          <li>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.{" "}
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Additional">
                        <table className="table table-bordered">
                          <tr>
                            <td>{product.name}</td>
                            <td>{product.subtitle}</td>
                          </tr>

                          <tr>
                            <td>Rating</td>
                            <td>
                              <ul className="item-review">
                                <li>
                                  <i className="fa fa-star me-1"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star me-1"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star-half-alt me-1"></i>
                                </li>
                                <li>
                                  <i className="far fa-star me-1"></i>
                                </li>
                                <li>
                                  <i className="far fa-star"></i>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Product">
                        <div id="comments">
                          <div className="comments-area style-1">
                            <div className="widget-title">
                              <h4 className="title">Comments</h4>
                            </div>
                            <div className="clearfix">
                              <ol className="comment-list">
                                {commantBlog.map((data, ind) => (
                                  <li className="comment" key={ind}>
                                    <div className="comment-body">
                                      <div className="comment-author vcard">
                                        <img
                                          className="avatar photo"
                                          src={product.image2}
                                          alt=""
                                        />
                                      </div>
                                      <div className="comment-info">
                                        <div className="title">
                                          <h5 className="fn">{data.title}</h5>
                                          <div className="reply">
                                            <Link
                                              to={"#"}
                                              className="comment-reply-link"
                                            >
                                              Reply
                                            </Link>
                                          </div>
                                        </div>
                                        <p>
                                          Vivamus imperdiet erat id leo
                                          malesuada bibendum tristique in ipsum.
                                          Nulla vel elit ac ipsum maximus
                                          dapibus. Aenean aliquet euismod eros,
                                          quis dictum mauris congue a. Integer
                                          porttitor et eros non hendrerit.
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ol>
                            </div>
                            <div className="widget-title">
                              <h4 className="title">Leave Comment</h4>
                            </div>
                            <div className="clearfix">
                              {/* <!-- Form --> */}
                              <div
                                className="comment-respond style-1"
                                id="respond"
                              >
                                <form
                                  className="comment-form"
                                  id="commentform"
                                  method="post"
                                >
                                  <p className="comment-form-author">
                                    <label>
                                      First Name{" "}
                                      <span className="required">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      name="FirstName"
                                      placeholder="First Name"
                                      id="FirstName"
                                    />
                                  </p>
                                  <p className="comment-form-email">
                                    <label>
                                      Email <span className="required">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      placeholder="Email"
                                      name="email"
                                      id="email"
                                    />
                                  </p>
                                  <p className="comment-form-comment">
                                    <label>Message</label>
                                    <textarea
                                      rows="8"
                                      name="Message"
                                      placeholder="Message"
                                      id="Message"
                                    ></textarea>
                                  </p>
                                  <p className="form-submit">
                                    <button
                                      type="submit"
                                      className="btn effect btn-primary"
                                      id="submit"
                                    >
                                      Submit A Comment
                                      <i className="fas fa-long-arrow-alt-right m-l15"></i>
                                    </button>
                                  </p>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
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
