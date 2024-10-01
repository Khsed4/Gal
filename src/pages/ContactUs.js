import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'
import swal from "sweetalert2";	

//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';


//Components
import ClientsSlider from './../components/ClientsSlider';
import FooterSingUp from './../components/FooterSingUp';

//images
import bg18 from './../assets/images/background/bg18.jpg';

export default function ContactUs(){

    const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('service_gfykn6i', 'template_iy1pb0b', e.target, 'HccoOtZS6GHw-N-m6')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
		  swal('Good job!', 'form successfuly submmited', "success");
	};
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Contact Us'  parentPage='Home' childPage='Pages' />
                <section className="content-inner-2 pt-0">
                    <div className="map-iframe">
                        <iframe title="contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219" style={{border:'0', width:'100%', minHeight:'100%', marginBottom: '-8px'}} allowFullScreen></iframe>
                    </div>
                </section>
                <section className="contact-wraper1" style={{backgroundImage: 'url('+ bg18 +')'}}>	
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="contact-info">
                                    <div className="section-head text-white style-1">
                                        <h3 className="title text-white">Get In Touch</h3>
                                        <p>If you are interested in working with us, please get in touch.</p>
                                    </div>
                                    <ul className="no-margin">
                                        <li className="icon-bx-wraper text-white left m-b30">
                                            <div className="icon-md">
                                                <span className="icon-cell">
                                                    <i className="flaticon-placeholder-1"></i>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className=" dz-tilte text-white">Our Address</h4>
                                                <p className="font-18">1247/Plot No. 39, 15th Phase, Huab Colony, Kukatpally, Hyderabad</p>
                                            </div>
                                        </li>
                                        <li className="icon-bx-wraper text-white left m-b30">
                                            <div className="icon-md">
                                                <span className="icon-cell">
                                                    <i className="flaticon-message"></i>
                                                </span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="dz-tilte text-white">Our Email</h4>
                                                <p className="font-18">info@gmail<br />services@gmail.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 m-b40">
                                <div className="contact-area1 m-r20 m-md-r0">
                                    <div className="section-head style-1">
                                        <h6 className="sub-title text-primary">CONTACT US</h6>
                                        <h3 className="title m-b20">Get In Touch With Us</h3>
                                    </div>
                                    <form className="dz-form dzForm" ref={form} onSubmit={sendEmail}>
                                        <input type="hidden" className="form-control" name="dzToDo" defaultValue="Contact" />
                                        <div className="dzFormMsg"></div>		
                                        <div className="input-group">
                                            <input required type="text" className="form-control" name="dzName" placeholder="Full Name" />
                                        </div>
                                        <div className="input-group">
                                            <input required type="text" className="form-control" name="email" placeholder="Email Adress" />
                                        </div>
                                        <div className="input-group">
                                            <input required type="text" className="form-control" name="dzPhoneNumber" placeholder="Phone No." />
                                        </div>
                                        <div className="input-group">
                                            <textarea required name="message" rows="5" className="form-control">Message</textarea>
                                        </div>
                                        {/* <div className="input-group">
                                            <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                            <input className="form-control d-none" style={{display:'none'}} data-recaptcha="true" required data-error="Please complete the Captcha" />
                                        </div> */}
                                        <div>
                                            <button name="submit" type="submit" value="submit" className="btn w-100 btn-primary btn-border">CONTACT US</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-full content-inner-5">
			        <div className="container"> 
                        <ClientsSlider />
                    </div>
                </section> 
                <section className="section-full dz-subscribe style-1">
                    <FooterSingUp />
                </section>

            </div>
            <Footer />    
        </>
    )
}