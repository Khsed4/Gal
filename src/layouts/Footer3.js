import React from 'react';
import {Link} from 'react-router-dom'; 

import logowhite from './../assets/images/logo-white.png';
import recentBlog1 from './../assets/images/blog/recent-blog/pic1.jpg';
import recentBlog2 from './../assets/images/blog/recent-blog/pic2.jpg';

export default function Footer3(){
    return(
        <>
            <footer className="site-footer style-3 bg-secondary" id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-sm-8 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-white">
                                        <Link to={'./'}><img src={logowhite} alt="" /></Link> 
                                    </div>
                                    <div className="widget widget_getintuch">
                                        <ul>
                                            <li>
                                                <i className="flaticon-placeholder"></i>
                                                <span>1247/Plot No. 39, 15th Phase, Huab Colony, Kukatpally, Hyderabad</span>
                                            </li>
                                            <li>
                                                <i className="flaticon-call"></i>
                                                <span>1234 456 7895 <br /> 1234 456 7895</span>
                                            </li>
                                            <li>
                                                <i className="flaticon-chat-1"></i> 
                                                <span>info@example.com <br/>services@example.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-4 col-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <div className="widget widget_services">
                                    <h4 className="footer-title">Our Links</h4>
                                    <ul>
                                        <li><Link to={"./"}>Home</Link></li>
                                        <li><Link to={"./about-us"}>About Us</Link></li>
                                        <li><Link to={"./services"}>Services</Link></li>
                                        <li><Link to={"./blog-grid"}>News</Link></li>
                                        <li><Link to={"./contact-us"}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-4 col-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                <div className="widget widget_services">
                                    <h4 className="footer-title">Other Links</h4>
                                    <ul>
                                        <li><Link to={"#"}>FAQ</Link></li>
                                        <li><Link to={"#"}>Support</Link></li>
                                        <li><Link to={"#"}>Help</Link></li>
                                        <li><Link to={"#"}>Privacy Policy</Link></li>
                                        <li><Link to={"#"}>Terms Of Use</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-sm-8 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
                                <div className="widget recent-posts-entry">
                                    <h4 className="footer-title">Latest Post</h4>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dz-media"> 
                                                <img src={recentBlog1} alt="" />
                                            </div>
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"./blog-details"}>Aliqua sodales vestibulum risus nterdum malesuad</Link></h6>
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-date"> <i className="las la-calendar"></i> 7 March, 2022</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="dz-media"> 
                                                <img src= {recentBlog2} alt="" />
                                            </div>
                                            <div className="dz-info">
                                                <h6 className="title"><Link to={"./blog-details"}>How To Make Money From The Agency Phenomenon</Link></h6>
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-date"> <i className="las la-calendar"></i> 7 March, 2022 </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer bottom part --> */}
                <div className="container">
                    <div className="footer-bottom">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-8 text-md-start text-center"> 
                                <span className="copyright-text">Copyright © 2022 <a href="https://dexignzone.com/" target="_blank">DexignZone</a>. All rights reserved.</span> 
                            </div>
                            <div className="col-lg-6 col-md-4 text-md-end text-center"> 
                                <div className="dz-social-icon float-md-end float-center">
                                    <ul className="justify-content-center">
                                        <li><a className="fab fa-facebook-f" target="_blank" href="https://www.facebook.com/"></a></li>
                                        <li><a className="fab fa-instagram" target="_blank" href="https://www.instagram.com/?hl=en"></a></li>
                                        <li><a className="fab fa-twitter" target="_blank" href="https://twitter.com/?lang=en"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}