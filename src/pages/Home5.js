import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video'

//layout
import Header5 from './../layouts/Header5';
import Footer5 from './../layouts/Footer5';

import VideoPopup from './../components/VideoPopup';
import Banner5Slider from './../components/Index5/Banner5Slider';
import ServiceSlider3Blog from './../components/Index5/ServiceSlider3Blog';
import FeaturelSliderThumb from './../components/Index5/FeaturelSliderThumb';
import SwiperPortfolioProject from './../components/Index5/SwiperPortfolioProject';
import ServicesTabSection from './../components/Index5/ServicesTabSection';

//images
import bnr3 from './../assets/images/bnr/bnr3.jpg';
import pattern1 from './../assets/images/dotted.png';
import bg16 from './../assets/images/background/bg16.jpg';
import about5 from './../assets/images/about/about5.jpg';
import bg17 from './../assets/images/background/bg17.jpg';
import bg4 from './../assets/images/background/bg4.jpg';
import bg18 from './../assets/images/background/bg18.jpg';
import bg5 from './../assets/images/background/bg5.jpg';
import about17 from './../assets/images/about/about17.jpg';
import price1 from './../assets/images/pricing/pic1.jpg';
import price2 from './../assets/images/pricing/pic2.jpg';
import price3 from './../assets/images/pricing/pic3.jpg';
import bg19 from './../assets/images/background/bg19.jpg';
import about18 from './../assets/images/about/about18.jpg';

const contactUsBlog = [
    {title:'10+ Years of Experience', para:'ISO 9001 Certification' },
    {title:'24/7 availability', para:'call any day, anytime' },
    {title:'No Obligation Quote', para:'Work with detailed reports' },
]

const priceBlog = [
    {image: price1, title:'Power & Energy', price:'74'},
    {image: price2, title:'Petroleum Refinery', price:'84'},
    {image: price3, title:'Oil & Gas', price:'99'},
];

export default function Home5(){
	//Video Modal
	const [isOpen, setOpen] = useState(false)
	
    //Add split-active event
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
            <Header5 />
            <div className="page-content bg-white">
                <div className="main-slider5 overlay-black-dark" style={{backgroundImage:'url('+ bnr3 +')'}}>
                    <div className="banner-inner">
                        <Banner5Slider />
                    </div>
                </div>     

                <section className="content-inner-1 " style={{backgroundImage:'url('+ pattern1 +')'}}>
                    <div className="container">
                        <div className="section-head text-center style-1">
                            <h5 className="text-primary sub-title">Our Services</h5>
                            <h2 className="title m-b20">We Are Always Best For Industrial Solution</h2>
                            <p>Aenean fermentum congue risus ut blandit. Cras sed fermentum felis. Cras quis bibendum libero. Sed dictum, nibh at placerat rhoncus, felis enim interdum purus.</p>
                        </div>
                        <ServiceSlider3Blog  />   
                    </div>
                </section>
                <section className="content-inner feature-wrapper overlay-gadient-sec overflow-hidden" style={{backgroundImage:'url('+ bg16 +')'}}>
                    <div className="container">
                        <FeaturelSliderThumb />
                    </div>
                </section>
                <section className="content-inner bg-white">
                    <div className="container">
                        <div className="row about-style4 align-items-center">
                            <div className="col-lg-6 m-b30">
                                <div className={`split-box ${ splitEvent ? '' : 'split-active'}` }>
                                    <div className="about-thumb">
                                        <img className="w-100" src={about5} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <div className="about-content aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                    <div className="section-head style-1">
                                        <h5 className="sub-title text-primary">What We do</h5>
                                        <h2 className="title m-b20">We Are Always Best For Industrial Solution</h2>
                                        <p>Aenean fermentum congue risus ut blandit. Cras sed fermentum felis. Cras quis bibendum libero. Sed dictum, nibh at placerat rhoncus, </p>
                                    </div>
                                    <blockquote className="blockquote style-1">
                                        <div className="quote-info">
                                            <h4>Adam Stone</h4>
                                            <cite> CEO at Google INC </cite>
                                        </div>
                                        <p>Sed elit quam, iaculis sed semper sit amet udin vitae nibh. magna akal semper Fusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup.</p>
                                    </blockquote>
                                    <p className="m-b30">Industries, the countries they reside in, and the economies of those countries are interlinked in a complex web of interdependence.</p>
                                    <Link to={"./about-us"} className="btn btn-primary btn-border m-r10 m-b10">Learn about</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content-inner-1 overlay-black-dark" style={{backgroundImage:'url('+ bg17 +')',backgroundSize:'cover', backgroundPosition:'bottom'}}>
			        <div className="container-fluid">
                        <div className="section-head text-center style-1">
                            <h5 className="sub-title text-primary">Our Projects</h5>
                            <h2 className="title text-white m-b20">Featured Projects</h2>
                        </div>
                        <SwiperPortfolioProject />
                    </div>
                </section>        

                <section className="content-inner overlay-gadient-white" style={{backgroundImage:'url('+ bg4 +')', backgroundSize:'cover'}}>
			        <div className="container">
                        <ServicesTabSection />
                    </div>   
                </section>

                <section className="content-inner-4 overlay-black-middle" style={{backgroundImage:'url('+ bg18  +')',backgroundSize:'cover', backgroundPosition:'center'}}>
                    <div className="container">
                        <div className="section-head style-1 text-center mb-0">                    
							<VideoPopup  classChange="popup-youtube play-btn1 text-white mx-auto m-b40" />
                            <h5 className="sub-title text-primary">Watch Our Video</h5>
                            <h2 className="title m-b20 text-white">We Are Always Best For Industrial Solution</h2>
                            <p className="text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. </p>
                        </div>
                    </div>
                </section>
                <section className="content-inner section" style={{backgroundImage:'url(' + bg5 + ')', backgroundSize:'cover' , backgroundPosition:'bottom'}}>
                    <div className="container">
                        <div className="row about-style10">
                            <div className="col-lg-6 m-b30 align-self-center aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                <div className="about-content">
                                    <div className="section-head style-1">
                                        <h5 className="sub-title text-primary">Latest Cose Studies</h5>
                                        <h2 className="title m-b20">We Are Always Best For Industrial Solution</h2>
                                        <p>Aenean fermentum congue risus ut blandit. Cras sed fermentum felis. Cras quis bibendum libero. Sed dictum, nibh at placerat rhoncus, felis enim interdum purus, in elementum nibh nisl et ligula. Aliquam a sollicitudin orci. </p>
                                    </div>
                                    <Link to={"./services"} className="btn btn-primary btn-border m-r10 m-b10">VIEW MORE</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30">
                                <div className="row spno">
                                    <div className="col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                        <ul className="list-check-circle primary">
                                            <li>Power & Energy</li>
                                            <li>Chemical Engineering</li>
                                            <li>Energy & Power Engineering</li>
                                            <li>Information architecture</li>
                                            <li>Oil & Gas Engineering</li>
                                            <li>User interface design</li>
                                            <li>Civil Enginering</li>
                                            <li>Mining Engineering</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                        <div className="dz-media h-100">	
                                            <img className="h-100 object-cover" src={about17} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>    
                <section className="content-inner overlay-black-dark" style={{backgroundImage:'url('+ bg19 +')',backgroundSize:'cover',backgroundPosition:'center'}}>
                    <div className="container">
                        <div className="section-head text-center style-1">
                            <h5 className="text-primary sub-title">Choose Your Plan</h5>
                            <h2 className="title text-white">We Are Always Best</h2>
                        </div>
                        <div className="row">	
                            {priceBlog.map((data,index)=>(
                                <div className="col-lg-4 col-md-6 m-b30 " key={index}>
                                    <div className="pricingtable-wrapper style-1">
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-media">
                                                <img src={data.image} alt="" />
                                            </div>
                                            <div className="pricingtable-head">
                                                <div className="sub-title">TV + INTERNET</div>
                                                <h2 className="pricingtable-title">{data.title}</h2>						 
                                            </div>
                                            <ul className="pricingtable-features">
                                                <li>Support and Analysis</li>
                                                <li>Suggesting Ingredients</li>
                                                <li>Measuring Performance</li>
                                                <li>Technical Consultation</li>
                                            </ul>
                                            <div className="pricingtable-price"> 
                                                <h3 className="pricingtable-bx">
                                                    <small>$</small>{data.price}
                                                    <small className="ext">.99
                                                        <span className="pricingtable-type">/MO</span>
                                                    </small>
                                                </h3>
                                            </div>
                                            <div className="pricingtable-footer"> 
                                                <Link to={"./contact-us"} className="btn btn-primary btn-border">CONTACT US</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </section>
                <section className="content-inner bg-gray">
                    <div className="container">
                        <div className="row about-style11">
                            <div className="col-lg-7 m-b30 aos-item" >
                                <div className="dz-media overlay-black-light">	
                                    <img src={about18} alt="" />
                                    <div className="video-btn">
										{/* <VideoPopup classChange="popup-youtube play-btn6" /> */}
										<Link to={"#"} className="popup-youtube play-btn6" onClick={()=> setOpen(true)} ><i className="fa fa-play" ></i></Link>
                                        <p>video Presentaion</p>
                                    </div>
                                    <div className="exp-box">
                                        <h4 className="year">50+</h4>
                                        <span>Years of Experience</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 m-b30 align-self-center aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <div className="about-content">
                                    <div className="section-head style-1">
                                        <h5 className="sub-title text-primary">Contact Us</h5>
                                        <h2 className="title m-b20">Industry United In Seeking Rate </h2>
                                        <p>Aenean fermentum congue risus ut blandit. Cras sed fermentum felis. Cras quis bibendum libero. Sed dictum, nibh at placerat rhoncus, felis enim interdum purus, in elementum nibh nisl et ligula. Aliquam a sollicitudin orci. </p>
                                    </div>
                                    <Link to={"./contact-us"} className="btn btn-primary btn-border m-r10 m-b10">CONTACT US</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {contactUsBlog.map((data, index)=>(
                                <div className="col-lg-4 m-b30 aos-item" key={index}>
                                    <div className="check-box box-hover">
                                        <h4 className="title">{data.title}</h4>
                                        <p>{data.para}</p>
                                    </div>
                                </div>
                            ))}                            
                        </div>
                    </div>
                </section>
				<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_FRZVScwggM" onClose={() => setOpen(false)} />
            </div>
            <Footer5 />
        </>
    )
}