import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom';

//Images
import logowhite from './../assets/images/logo-white.png';
import RecentBlog1 from './../assets/images/blog/recent-blog/pic1.jpg';

function Footer5(){
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
            <footer className="site-footer style-5" id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row m-b30">
                            <div className="col-lg-5 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-white">
                                        <Link to={"./"}><img src={logowhite} alt="" /></Link> 
                                    </div>
                                    <p>Etiam nisi ligula, convallis ut blandit et, pellentesque tempus odio vivamus elementum dui malesuada gravida interdum.</p>
                                    <div className="dz-social-icon">
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
                            <div className="col-lg-7 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <form className="dzSubscribe" ref={form} onSubmit={sendEmail}>
                                    <div className="ft-subscribe">
                                        <h4 className="footer-title">Subscribe To Our Newsletter</h4>
                                        <div className="dzSubscribeMsg text-white"></div>
                                        <div className="ft-row">
                                            <input name="dzEmail" required="required"  type="email" placeholder="Your Email Addess" className="form-control" />
                                            <button name="submit" value="Submit" type="submit" className="btn btn-primary">Subscribe Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-sm-8 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <div className="widget widget_about">
                                    <h4 className="footer-title">Contact Us</h4>
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
                                                <img src={RecentBlog1} alt="" />
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
                                                <img src={RecentBlog1} alt="" />
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
                <div className="footer-bottom">
                    <div className="container">
                        <span className="copyright-text">Copyright © 2022 <a href="https://dexignzone.com/" target="_blank" rel="noreferrer" >DexignZone</a>. All rights reserved.</span> 
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer5;