import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom';
import { SRLWrapper } from "simple-react-lightbox";

//Images
import logowhite  from './../assets/images/logo-white.png';
import gallery1  from './../assets/images/gallery/pic1.jpg';
import gallery2  from './../assets/images/gallery/pic2.jpg';
import gallery3  from './../assets/images/gallery/pic3.jpg';
import gallery4  from './../assets/images/gallery/pic4.jpg';
import gallery5  from './../assets/images/gallery/pic5.jpg';
import gallery6  from './../assets/images/gallery/pic6.jpg';

const galleryBlog = [
    {image:gallery1},
    {image:gallery2},
    {image:gallery3},
    {image:gallery4},
    {image:gallery5},
    {image:gallery6},
];

export default function Footer4(){
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, 'd9b2e0f5fc72cb94792110e8ff2028f3-us16')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	};	
    return(
        <>
            <footer className="site-footer style-4" id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row footer-icon-wraper">
                            <div className="col-lg-4 col-md-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <div className="icon-bx-wraper style-9 m-b30">
                                    <div className="icon-bx-sm border border-primary">
                                        <Link to={"#"} className="icon-cell"><i className="flaticon-placeholder"></i></Link> 
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dz-tilte text-white">Location</h4>
                                        <p>1247/Plot No. 39, 15th Phase, Huab Colony, Kukatpally, Hyderabad</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <div className="icon-bx-wraper style-9  m-b30">
                                    <div className="icon-bx-sm border border-primary">
                                        <Link to={"#"} className="icon-cell"><i className="flaticon-alarm-clock-1"></i></Link> 
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dz-tilte text-white">Working Hours</h4>
                                        <p>Mon To Fri 8am - 10pm <br />Sat 8am - 8pm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                <div className="icon-bx-wraper style-9  m-b30">
                                    <div className="icon-bx-sm border border-primary">
                                        <Link to={"#"} className="icon-cell"><i className="flaticon-call"></i></Link> 
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="dz-tilte text-white">Contact Us</h4>
                                        <p>info@gmail.com <br />+91 874 8974 874</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-sm-8 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <div className="widget widget_about p-r50 p-sm-r0">
                                    <div className="footer-logo logo-white">
                                        <Link to={"./"}><img src={logowhite} alt="" /></Link> 
                                    </div>
                                    <p className="m-b30">Integer vitae eleifend risus, in ultricies nulla. Sed euismod molestie massa.</p>
                                    
                                    <form className="dzSubscribe style-2 m-b30" ref={form} onSubmit={sendEmail}>
                                        <div className="dzSubscribeMsg text-white"></div>
                                        <div className="form-group">
                                            <div className="input-group mb-0">
                                                <input name="dzEmail" required="required" type="email" className="form-control shadow" placeholder="Email Address..." />
                                                <div className="input-group-addon">
                                                    <button name="submit" value="Submit" type="submit" className="btn btn-primary"><i className="fas fa-paper-plane"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    
                                    <div className="dz-social-icon style-2">
                                        <ul>
                                            <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
                                                    <i className="fab fa-facebook-f"></i>	
                                                </a>
                                            </li>
                                            <li><a target="_blank" rel="noreferrer"  href="https://twitter.com/?lang=en">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li><a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/">
                                                    <i className="fab fa-linkedin-in"></i>	
                                                </a>
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
                                        <li><Link to={"./pricing"}>Pricing</Link></li>
                                        <li><Link to={"./blog-grid"}>News</Link></li>
                                        <li><Link to={"./contact-us"}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-5 col-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                <div className="widget widget_services">
                                    <h4 className="footer-title">Other Services</h4>
                                    <ul>
                                        <li><Link to={"#"}>Construction</Link></li>
                                        <li><Link to={"#"}>Maintenance</Link></li>
                                        <li><Link to={"#"}>Engineering</Link></li>
                                        <li><Link to={"#"}>Power & Energy</Link></li>
                                        <li><Link to={"#"}>Chemical research</Link></li>
                                        <li><Link to={"#"}>24x7 Support</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
                                <div className="widget widget_gallery">
                                    <h4 className="footer-title">Gallery</h4>
                                    <ul className="lightgallery">
										<SRLWrapper>
											{galleryBlog.map((data, i)=>(
												<li key={i}>
													<div className="dz-post-thum dz-img-effect">
														<span data-exthumbimage={data.image} data-src={data.image} className="lightimg" title="Image 1 Title will come here">		
															<img src={data.image} alt="" /> 
														</span>
													</div>
												</li>
											))}  
										</SRLWrapper>	
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer bottom part --> */}
                <div className="footer-bottom">
                    <div className="container">
                        <span className="copyright-text">Copyright © 2022 <a href="https://dexignzone.com/" target="_blank" rel="noreferrer">DexignZone</a>. All rights reserved.</span> 
                    </div>
                </div>
            </footer>
        </>
    )
}