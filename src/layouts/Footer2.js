import {Link} from 'react-router-dom';

import logowhite from './../assets/images/logo-white.png';
import pic1 from './../assets/images/blog/recent-blog/pic1.jpg';
import pic2 from './../assets/images/blog/recent-blog/pic2.jpg';

function Footer2(){
    return(
        <>
            <footer className="site-footer style-1" id="footer">
                {/*<!-- Footer Top -->*/}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-sm-6 col-12 ">
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-white">
                                        <Link to={"./"}><img src={logowhite} alt=""/></Link> 
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
									</p>
                                    <div className="dz-social-icon">
                                        <ul>
                                            <li><a className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
                                            <li><a className="fab fa-instagram" href="https://www.instagram.com/?hl=en"></a></li>
                                            <li><a className="fab fa-twitter" href="https://twitter.com/?lang=en"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6 col-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <div className="widget widget_services">
                                    <h4 className="footer-title">EXPLORE</h4>
                                    <ul>
                                        <li><Link to={"#"}>Home</Link></li>
                                        <li><Link to={"#"}>About Us</Link></li>
                                        <li><Link to={"#"}>Portfolio</Link></li>
                                        <li><Link to={"#"}>Pricing</Link></li>
                                        <li><Link to={"#"}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-6 col-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                <div className="widget widget_services">
                                    <h4 className="footer-title">SERVICES</h4>
                                    <ul>
                                        <li><Link to={"#"}>Management</Link></li>
                                        <li><Link to={"#"}>Material</Link></li>
                                        <li><Link to={"#"}>Mechanical</Link></li>
                                        <li><Link to={"#"}>Chemical</Link></li>
                                        <li><Link to={"#"}>Fuel & Gas</Link></li>
                                        <li><Link to={"#"}>Power</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-sm-6 col-12 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
                                <div className="widget recent-posts-entry">
                                    <h4 className="footer-title">LATEST NEWS</h4>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dz-media"> 
                                                <img src={pic1} alt="" />
                                            </div>
                                            <div className="dz-info">
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-date"> 7 March, 2022</li>
                                                    </ul>
                                                </div>
                                                <h6 className="title"><Link to={"./blog-details"}>Aliqua sodales vestibulum risus nterdum malesuad</Link></h6>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="dz-media"> 
                                                <img src={pic2} alt="" />
                                            </div>
                                            <div className="dz-info">
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-date"> 6 March, 2022 </li>
                                                    </ul>
                                                </div>
                                                <h6 className="title"><Link to={"./blog-details"}>How To Make Money From The AGENCY Phenomenon</Link></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*<!-- Footer Bottom -->*/}
                <div className="footer-bottom text-center">
                    <div className="container">
                        <div className="ft-inner">
                            <div className="row">
                                <div className="col-lg-12"> 
                                    <span className="copyright-text">Copyright © 2025 <a href="https://galaxylube.com/" target="_blank">Galaxy Lube</a>. All rights reserved.</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer2;