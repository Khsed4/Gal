import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom';

//Import Layout
import Header3 from './../layouts/Header3';
import Footer3 from './../layouts/Footer3';
import VideoPopup from './../components/VideoPopup';

//Import Components
import Home3BannerSlider from './../components/Index3/Home3BannerSlider';
import AboutUsSectionIndex3 from './../components/Index3/AboutUsSectionIndex3';
import AboutSlider from './../components/Index3/AboutSlider';
import TestimonialSlider from './../components/TestimonialSlider';
import ClientsSlider from './../components/ClientsSlider';
import IndustrialSlider2 from './../components/Index3/IndustrialSlider2';
import AccordionSection from './../components/Index3/AccordionSection';

//Images
import bg9 from './../assets/images/background/bg9.jpg';
import about4 from './../assets/images/about/about4.jpg';
import bg1 from './../assets/images/background/bg1.jpg';
import about29 from './../assets/images/about/about29.jpg';
import about30 from './../assets/images/about/about30.jpg';
import bg13 from './../assets/images/background/bg13.jpg';
import pic1  from './../assets/images/team/pic1.jpg';
import pic2  from './../assets/images/team/pic2.jpg';
import pic3  from './../assets/images/team/pic3.jpg';
import slider3  from './../assets/images/main-slider/slider3.jpg';
import bg14  from './../assets/images/background/bg14.jpg';

const teamblog = [
    {image: pic1, title:'MELENA MARSHALL'},
    {image: pic2, title:'DANIEL ORSON'},
    {image: pic3, title:'COLIN JAMESON'},
];

function Home3(){
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
            <Header3 />
            <div className="page-content bg-white">
                <div className="main-slider3">
                    <Home3BannerSlider />
                </div> 
                <section className="content-inner-1 section" style={{backgroundImage:'url('+ bg9 +')',backgroundSize: 'cover',backgroundPosition: 'top'}}>
                    <div className="container">
                       <AboutUsSectionIndex3 />
                    </div>
                </section>  
                <section className="content-inner-4 about-wrapper">
					<AboutSlider /> 
                </section>
                <section className="content-inner bg-gray bg-particles" id="particles-js">
                    <div className="container">
                        <div className="row about-style3 align-items-center">
                            <div className="col-lg-6 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <div className="about-thumb">
                                    <div className="about-video overlay-white-light">
                                        <img className="w-100" src={about4} alt="" /> 
										<VideoPopup classChange="popup-youtube play-btn4" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <div className="about-content">
                                    <div className="section-head style-1">
                                        <h2 className="title m-b20">We Are Always Best For Industrial Solution Always Best</h2>
                                        <p>Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor sed do consulting firms Et leggings across</p>
                                    </div>
                                    <ul className="list-arrow-right-circle white m-b40">
                                        <li>Standard dummy text ever since the 1500s</li>
                                        <li>When an unknown printer took a galley of type</li>
                                        <li>It has survived not only five centuries</li>
                                    </ul>
                                    <Link to={"./about-us"} className="btn btn-primary btn-border m-r10 m-b10">ABOUT US</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>	
                <section className="content-inner-1 bg-white aos-item" data-aos="fade-in" data-aos-duration="800" data-aos-delay="200">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h5 className="text-primary sub-title">Testimonials</h5>
                            <h2 className="title">What Our Clients Say!</h2>
                        </div>
                        <TestimonialSlider />
                    </div>
                </section>  
                <section className="content-inner overlay-black-middle dz-section-2" style={{backgroundImage:'url('+ bg1 +')'}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <div className="section-head style-1">
                                    <h5 className="text-primary sub-title">Industry United In Seeking</h5>
                                    <h2 className="title text-white">innovating to meet Tomorrow’s Challenges.</h2>
                                    <p className="text-white">We’re continually working to change the way people think about and engage with our products. A new story is beginning with a new vision for the future, an expertise across the entire industry cycle and the ambition</p>
                                </div>
                                <Link to={"./about-us"} className="btn btn-primary btn-border btn-border-white m-r10 m-b10">DOWNLOAD OUR BROCHURE</Link>
                            </div>
                            <div className="col-lg-5 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <div className="video-box rounded overflow-hidden overlay-effect">
                                    <img src={about29} alt="" />                                    
									<VideoPopup classChange="popup-youtube play-btn4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="content-inner-1">
                    <div className="container">
                        <div className="contact-area2 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                            <div className="row">
                                <div className="col-lg-6 mb-lg-0 m-b0 m-lg-b40 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                    <div className="dz-media">
                                        <img src={about30} alt="" />
                                        <div className="info">
                                            <h2 className="text-white">Request A Quote</h2>
                                            <p>There are many variations of passages </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                    <form className="dz-form dzForm m-b40" method="POST" action="script/contact_smtp.php">
                                        <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                        <div className="dzFormMsg"></div>		
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <input required type="text" className="form-control" name="dzOther[first_name]" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <input required type="text" className="form-control" name="dzEmail" placeholder="Email Adress" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <input required type="text" className="form-control" name="dzOther[phone_number]" placeholder="Phone No." />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <input required type="text" className="form-control" name="dzOther[phone_number]" placeholder="Phone No." />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="input-group">
                                                    <textarea required name="dzMessage" rows="5" className="form-control">Message</textarea>
                                                </div>
                                            </div>
                                        </div>
										{/*  <div className="input-group">
                                            <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                            <input className="form-control d-none" style={{display:'none'}} data-recaptcha="true" required data-error="Please complete the Captcha" />
                                        </div> */}
                                        <div>
                                            <button name="submit" type="submit" value="submit" className="btn btn-primary w-100 justify-content-center btn-border m-r10 m-b10">SUBMIT</button>
                                        </div>
                                    </form>
                                    <div className="call-box3">	
                                        <i className="fas fa-phone-alt icon"></i>
                                        <h4 className="title">123 45 789</h4>
                                        <span>09:00 Am - 12:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section className="content-inner-1 pt-0">
			        <div className="container">    
                        <ClientsSlider />
                    </div>
                 </section>   
                 <section className="content-inner-4 text-center overlay-black-dark" style={{backgroundImage:'url('+ bg13 +')',backgroundSize: 'cover',backgroundPosition: 'top'}}>
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">Dedicated Customer Teams & An Agile Services</h6>
                            <h2 className="title m-b20 text-white">Innovating to meet Tomorrow’s Challenges.</h2>
                        </div>
                        <Link to={"./about-us"} className="btn btn-primary btn-border-white btn-border m-r10 m-b10" >ABOUT US</Link>
                    </div>
                </section> 
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">Dedicated Customer Teams & An Agile Services</h6>
                            <h2 className="title m-b20">Innovating to meet</h2>
                        </div>
                        <div className="row justify-content-center">
                            {teamblog.map((item,index)=>(    
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="dz-team style-2 m-b30">
                                        <div className="dz-media">
                                            <img src={item.image} alt="" />
                                            <ul className="team-social">
                                                <li><a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="https://in.pinterest.com/" className="pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="dz-content">
                                            <h4 className="dz-name">{item.title}</h4>
                                            <h6 className="dz-position">Contractor</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="content-inner overlay-gradient-sec" style={{backgroundImage:'url(' + slider3 + ')',backgroundSize: 'cover',backgroundPosition: 'center'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 align-self-end m-b30">
                                <div className="about-wrapper-2 aos-item" >
                                    <IndustrialSlider2 />
                                </div>
                            </div>
                            <div className="col-lg-5 align-self-center m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <div className="section-head style-1">
                                    <h3 className="title m-b20 text-white">We Are Always Best For Industrial Solution</h3>
                                    <p className="text-white">Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across tempor</p>
                                </div>
                                <Link to={"./about-us"} className="btn btn-primary btn-border-white btn-border m-r10 m-b10" >ABOUT US</Link>
                            </div>
                        </div>
                    </div>
                </section>  
                <section className="content-inner bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <div className="section-head style-1">
                                    <h3 className="title m-b20">Checkout Our Recently Closed Projects Closed Projects </h3>
                                    <h6 className="sub-title  text-primary">Always Powering Your Business</h6>
                                </div>
                                <p>Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings </p>
                                <p className="m-b40">Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor.</p>
                                <Link to={"./about-us"} className="btn btn-primary btn-border m-r10 m-b10" >ABOUT US</Link>
                            </div>
                            <div className="col-lg-6 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <AccordionSection />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-1 overlay-black-middle" style={{backgroundImage:'url('+ bg14 +')',backgroundSize:'cover',backgroundPosition:'center' }}>
                    <div className="container">
                        <div className="section-head style-1 text-center aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                            <h3 className="title m-b20 text-white">Subscribe to Our Newsletter</h3>
                            <p className="text-white">Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor.</p>
                        </div>
                        <form className="dzSubscribe style-1 aos-item" ref={form} onSubmit={sendEmail}>
                            <div className="ft-subscribe">
                                <div className="dzSubscribeMsg text-white"></div>
                                <div className="ft-row">
                                    <input name="dzEmail" required="required" type="email" placeholder="Enter Email Address" className="form-control" />
                                    <button name="submit" value="Submit" type="submit" className="btn"><i className="fas fa-envelope"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>                   
            </div>
            <Footer3 />
        </>
    )
}
export default Home3;