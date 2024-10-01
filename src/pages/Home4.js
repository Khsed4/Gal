import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video';

//Layouts
import Header4 from './../layouts/Header4';
import Footer4 from './../layouts/Footer4';
//import VideoPopup from './../components/VideoPopup';

///Components
import ServiceSliderIndex4 from './../components/Index4/ServiceSliderIndex4';
import DonutChart from './../components/DonutChart';
import TestimonialSliderIndex4 from './../components/Index4/TestimonialSliderIndex4';

//Images
import bnr2 from './../assets/images/bnr/bnr2.jpg';
import pic1 from './../assets/images/bnr/pic1.jpg';
import about12 from './../assets/images/about/about12.jpg';
import about13 from './../assets/images/about/about13.jpg';
import bg20 from './../assets/images/background/bg20.jpg';
import about14 from './../assets/images/about/about14.jpg';
import bg21 from './../assets/images/background/bg21.jpg';
import project1 from './../assets/images/projects/project1.jpg';
import bg1 from './../assets/images/background/bg1.jpg';
import service9 from './../assets/images/services/pic9.jpg';
import bg15 from './../assets/images/background/bg15.jpg';
import grid1 from './../assets/images/blog/blog-grid/pic1.jpg';
import grid2 from './../assets/images/blog/blog-grid/pic2.jpg';

// studies blog
const studiesBlog = [
    {iconClass:'flaticon-conveyor',title:'Industrial Automation', number:'1'},
    {iconClass:'flaticon-tool',title:'Industrial Construction', number:'2'},
    {iconClass:'flaticon-server-1',title:'Industrial Engineering', number:'3'},
];

//Radial svg section
const radialBlog = [
    {title:'All Maintenance', datanum:'43'},
    {title:'Projects Completed', datanum:'73'},
    {title:'Work Employed', datanum:'67'},
    {title:'Work facilities', datanum:'95'},
];

// Altest article
const articlesBlog = [
    {image: grid1, title:'5 Ways Technology Today at Improved Business.'},
    {image: grid2, title:'Think Positive, Think Always Powering Your Business.'},
];

export default function Home4(){
	const [isOpen, setOpen] = useState(false)
    const [splitEvent, setsplitEvent] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setsplitEvent(window.scroll > 96);
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll);
	},[]) 
    return(
        <>
            <Header4 />
            <div className="page-content bg-white">
                <div className="banner-one overlay-black-light" style={{backgroundImage:'url('+bnr2 +')'}}>
                    <div className="banner-inner">
                        <div className="banner-media overlay-black-middle">
                            <img src={pic1} alt="" />
                        </div>
                        <div className="banner-content">
                            <h1 className="m-b20" >Your Partner for Future Innovation</h1>
                            <div className="video-bx">
								<Link to={"#"} className="popup-youtube play-btn5" onClick={()=> setOpen(true)} ><i className="fa fa-play" ></i></Link>
                                <span className="video-text">about<br />Indiro</span>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content-inner">
                    <div className="container">
                        <div className="row about-style7">
                            <div className="col-lg-6 m-b30 align-self-center aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <div className="about-content">
                                    <div className="section-head style-1">
                                        <h5 className="sub-title text-primary">Latest Cose Studies</h5>
                                        <h2 className="title m-b20">INDUSTRIES PROVIDE BEST SERVICES</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable.It Is A Long Established Fact.he majority have suffered alteration which don’t look even slightly believable.It Is A Long Established Fact.</p>
                                    </div>
                                    <Link to={"./about-us"} className="btn btn-primary btn-border m-r10 m-b10">VIEW MORE</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <div className="about-media">	
                                    <div className={`split-box ${splitEvent ? "" : "split-active"}`}>
                                        <div>
                                            <img className="main-img aos-item"  src={about12} alt="" />
                                        </div>
                                    </div>
                                    <img className="ov-img aos-item"  src={about13} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-2 overlay-black-dark" style={{backgroundImage:'url('+ bg20 +')',backgroundPosition:'center', backgroundSize:'cover'}}>
                    <div className="container-fluid p-0">
                        <div className="section-head style-1 text-center">
                            <h5 className="sub-title text-primary">Watch Our Video</h5>
                            <h2 className="title m-b20 text-white">We Are Always Best For Industrial Solution</h2>
                        </div>
                        <ServiceSliderIndex4 />
                    </div>   
                </section>    
                <section className="content-inner bg-white">
                    <div className="container">
                        <div className="section-head text-center style-1">
                            <h5 className="text-primary sub-title">Latest Cose Studies</h5>
                            <h2 className="title">We Are Always Best</h2>
                        </div>
                        <div className="row justify-content-center">
                            {studiesBlog.map((data,index)=>(
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="icon-bx-wraper center style-5 m-b30">
                                        <div className="icon-bx-lg rounded-0 text-primary" data-num={data.number}>
                                            <i class={data.iconClass}></i>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dz-title">{data.title}</h4>
                                            <p>Aenean fermentum congue risus ut blandit. Cras sed fermentum felis. Cras quisdum</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="content-inner bg-gray">
                    <div className="container">
                        <div className="row about-style8">
                            <div className="col-lg-6 m-b30 align-self-center aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                <div className="about-content">
                                    <div className="section-head style-1">
                                        <h5 className="sub-title text-primary">Latest Cose Studies</h5>
                                        <h3 className="title m-b20">Providing Full Range Of High Services Solution</h3>
                                        <p>We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the We develop </p>
                                    </div>
                                    <Link to={"./about-us"} className="btn btn-primary btn-border m-r10 m-b10">ABOUT US</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <div className="dz-media">	
                                    <div className="split-box">
                                        <img src={about14} alt="" className="aos-item"  />
                                    </div>
                                    <ul className="list-check-circle white aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
                                        <li>Quality Control System</li>
                                        <li>Environmental Sensitivity</li>
                                        <li>Personalised Solutions</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>Insdustries And Technologies!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-inner dz-section-1">
                    <div className="bg-img overlay-black-middle" style={{backgroundImage:'url('+ bg21 +')',backgroundSize:'cover', backgroundPosition:'center'}}></div>
                    <div className="container">
                        <div className="section-head style-1 text-center ">
                            <h5 className="sub-title text-primary">Latest Cose Studies</h5>
                            <h2 className="title text-white m-b20">Featured Projects</h2>
                        </div>
                        <div className="video-box m-b40  border-primary border-bottom-10">
                            <img src={project1} alt="" /> 
							<Link to={"#"} className="popup-youtube play-btn2" onClick={()=> setOpen(true)} ><i className="fa fa-play" ></i></Link>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                <div className="section-head style-1">
                                    <h2 className="title m-b20">We Are Always Best Industrial Solution</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
                                <p>Aenean fermentum congue risus ut blandit. Cras sed fermentum felis. Cras quis bibendum libero. Sed dictum, nibh at placerat rhoncus, felis enim interdum purus, in elementum nibh nisl et ligula. Aliquam a sollicitudin orci. </p>
                            </div>
                        </div> 
                        <div className="row">
                            {radialBlog.map((item, index) =>(   
                                <div className="col-lg-3 col-sm-6 m-b30 aos-item" key={index}>
                                    <div className="text-center">                                        
                                        <div className="radial-progress m-b20 d-flex justify-content-center">
                                            <DonutChart value={item.datanum} backgroundColor="rgba(254,76,28,1)"
                                                backgroundColor2= "rgba(242, 242, 242)"
                                            />	
                                             <small className="percentage">{item.datanum}%</small>                   
                                        </div>   
                                         
                                        <h3 className="title m-b0">{item.title}</h3>
                                        <p className="sub-title m-b0">Construction Simulator</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>                
                </section> 
                <section className="content-inner-1 overlay-black-light overflow-hidden" style={{ backgroundImage:'url('+ bg1 +')',backgroundSize:'cover',backgroundPosition:'center'}}>
                    <div className="bg-half-img overlay-black-light aos-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200" style={{backgroundImage:'url('+ service9 +')'}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="best-service-box aos-item" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
                                    <h2 className="title text-white m-b15">Industries Provide Best Services</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                                    <ul className="list-check-circle info-desc primary m-b30">
                                        <li>Company:<span>Ethan Hunt</span></li>
                                        <li>Completion:<span>February 5th, 2017</span></li>
                                        <li>Project Type:<span>Villa, Residence</span></li>
                                        <li>Architects:<span>Ventro</span></li>
                                    </ul>
                                    <Link to={"./services"} className="btn btn-primary btn-border btn-border-white m-r10 m-b10">READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
                <section className="content-inner bg-white">
                    <div className="container">
                        <div className="section-head text-center style-1">
                            <h5 className="text-primary sub-title">Testimonials</h5>
                            <h2 className="title">Clients Say About Us</h2>
                        </div>
                        <TestimonialSliderIndex4 />   
                    </div>
                </section>  
                <section className="content-inner-1" style={{backgroundImage:'url('+ bg15 +')',backgroundSize:'cover' , backgroundPosition:'center'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="contact-area1 text-center m-r20 m-md-r0 aos-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                                    <div className="section-head style-1">
                                        <h3 className="title m-b20">Feel Free To Get In Touch!</h3>
                                    </div>
                                    <form className="dz-form dzForm" method="POST" action="script/contact_smtp.php">
                                        <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                        <div className="dzFormMsg"></div>		
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                    </div>
                                                    <input required type="text" className="form-control" name="dzOther[first_name]" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                                    </div>
                                                    <input required type="text" className="form-control" name="dzEmail" placeholder="Email Adress" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-phone-alt"></i></span>
                                                    </div>
                                                    <input required type="text" className="form-control" name="dzOther[phone_number]" placeholder="Phone No." />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="input-group">
                                                    <textarea required name="dzMessage" rows="5" className="form-control">Message</textarea>
                                                </div>
                                            </div>
                                            {/* <div className="input-group">
                                                <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                <input className="form-control d-none" style={{display:'none'}} data-recaptcha="true" required data-error="Please complete the Captcha" />
                                            </div> */}
                                        </div>
                                        <div>
                                            <button name="submit" type="submit" value="submit" className="btn btn-border btn-primary">SUBSCRIBE NOW</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>   
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head text-center style-1">
                            <h5 className="text-primary sub-title">Latest Blog</h5>
                            <h2 className="title">Latest Articles Updated</h2>
                        </div>
                        <div className="row">
                            {articlesBlog.map((data, index)=>(
                                <div className="col-lg-6 aos-item" key={index}>
                                    <div className="dz-card style-3 overlay-shine m-b30">
                                        <div className="dz-media">
                                            <Link to={"./blog-details"}><img src={data.image} alt="" /></Link>
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date"><i className="far fa-calendar-alt"></i> 7 March, 2022</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="dz-info">
                                            <h2 className="dz-title"><Link to={"./blog-details"}>{data.title}</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            ))}            
                        </div>
                        <div className="text-center m-b30">
                            <Link to={"./blog-details"} className="btn btn-primary btn-border m-r10 m-b10">VIEW MORE</Link>
                        </div>
                    </div>
                </section>   
				<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_FRZVScwggM" onClose={() => setOpen(false)} />				
             </div>   
             <Footer4 />
        </>
    )
}