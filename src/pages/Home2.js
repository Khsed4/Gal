import React,{useEffect, useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import swal from "sweetalert2";	
import {Link} from 'react-router-dom';
import {VideoPopup2} from './../components/VideoPopup';
import CountUp from 'react-countup';
import { SRLWrapper } from "simple-react-lightbox";
//Layouts
import Header2 from './../layouts/Header2';
import Footer2 from './../layouts/Footer2';
//components
import Home2BannerSlider from './../components/Index2/Home2BannerSlider';
import TeamSliderIndex2 from './../components/Index2/TeamSliderIndex2';
import AccordionBlog from './../components/Index2/AccordionBlog';
import ServiceSlider from './../components/Index2/ServiceSlider';
import ExperSectionIndex2 from './../components/Index2/ExperSectionIndex2';
import MarketSlider2 from './../components/Index2/MarketSlider2';
import FooterSingUp from './../components/FooterSingUp';

//Images
import about1 from './../assets/images/about/about1.jpg';
import bg6 from './../assets/images/background/bg6.jpg';
import Bg6Png from './../assets/images/background/bg6.png';
import about24 from './../assets/images/about/about24.jpg';
import bg1 from './../assets/images/background/bg1.jpg';
import about25 from './../assets/images/about/about25.jpg';
import about26 from './../assets/images/about/about26.jpg';
import about27 from './../assets/images/about/about27.jpg';
import bg7 from './../assets/images/background/bg7.jpg';
import bg3 from './../assets/images/background/bg3.png';
import about10 from './../assets/images/about/about10.jpg';
import about11 from './../assets/images/about/about11.jpg';
import bg7png from './../assets/images/background/bg7.png';
import about28 from './../assets/images/about/about28.jpg';

import pic1 from './../assets/images/work/work-2/pic1.jpg';
import pic2 from './../assets/images/work/work-2/pic2.jpg';
import pic3 from './../assets/images/work/work-2/pic3.jpg';
import pic4 from './../assets/images/work/work-2/pic4.jpg';
import pic5 from './../assets/images/work/work-2/pic5.jpg';
import pic6 from './../assets/images/work/work-2/pic6.jpg';
import pic7 from './../assets/images/work/work-2/pic7.jpg';
import pic8 from './../assets/images/work/work-2/pic8.jpg';
import pic9 from './../assets/images/work/work-2/pic9.jpg';

const counterSection = [
	{ title: 'Projects Completed', number:'35'},
	{ title: 'Award Winnin', number:'1435'},
	{ title: 'Work facilities', number:'750'},
];

const progressBlog = [
	{ title: 'Power &amp; Energy Sector', barnum:'85%'},
	{ title: 'Oil &amp; Gas Engineering', barnum:'60%'},
	{ title: 'Mechanical Engineering', barnum:'95%'},
];

const recentWorkBlog = [
	{classEffect:'col-xl-3', image:pic1, title:'Flexible Manufacturing', number:'150'},
	{classEffect:'col-xl-3', image:pic2, title:'Power & Energy', number:'100'},
	{classEffect:'col-xl-6', image:pic3, title:'All Maintenace', number:'120'},
	{classEffect:'col-xl-6', image:pic4, title:'Construction Machines', number:'50'},
	{classEffect:'col-xl-3', image:pic5, title:'Best Engineering', number:'160'},
	{classEffect:'col-xl-3', image:pic6, title:'Flexible Manufacturing', number:'250'},
	{classEffect:'col-xl-3', image:pic7, title:'Best Engineering', number:'90'},
	{classEffect:'col-xl-3', image:pic8, title:'Flexible Manufacturing', number:'200'},
	{classEffect:'col-xl-6', image:pic9, title:'Best Engineering', number:'350'	},
];

const counterBlog = [
	{iconbtn: <i className="flaticon-list" />,  title:'Expert Exployee', countnumber:'2374'},	
	{iconbtn: <i className="flaticon-trophy" />,title:'Project Complited', countnumber:'4563'},	
	{iconbtn: <i className="flaticon-users" />,  title:'Award Winning', countnumber:'1475'},	
	{iconbtn: <i className="flaticon-engineer-2"/>,title:'Happy Client', countnumber:'1024'},	
];

function Home2(){

	//Add split-active event
	const [splitEvent, setsplitEvent] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setsplitEvent(window.scroll > 96);
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll);
	},[]) 
	
	//forms 
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
			<Header2 />
			<div className="page-content bg-white">
				<div className="main-slider2">
					<Home2BannerSlider />
				</div>
				<section className="content-inner bg-white">
					<div className="container">
						<div className="row about-style2 align-items-center">
							<div className="col-lg-6 m-b30">
								<div className="about-content aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
									<div className="section-head style-1">
										<h6 className="sub-title text-primary">Welcome to Indiro.</h6>
										<h3 className="title m-b20">We Are Here to Increase your Knowlege With Experience</h3>
										<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration which don’t look even slightly believable. It Is A Long Established Fact.</p>
									</div>
									<Link to={"#"} className="btn btn-primary">READ MORE <i className="fas fa-long-arrow-alt-right m-l15"></i></Link>
								</div>
							</div>
							<div className="col-lg-6 m-b30">
								<div className="row align-items-end aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
									<div className="col-sm-8 m-b30">	
										<div className="about-thumb">
											<div className={splitEvent ? "split-box" : "split-box split-active"}>
												<div>
													<img className="w-100" src={about1} alt="" />
												</div>
											</div>
											<VideoPopup2 />
										</div>
									</div>
									<div className="col-sm-4">
										{counterSection.map((data,ind)=>(
											<div className="counter-style-1 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" key={ind}>
												<div className="counter-num text-primary">
													<h2 className="counter text-primary"><CountUp end={data.number} duration={3} /></h2>
													<small>+</small>
												</div>
												<h5 className="counter-text">{data.title}</h5>
											</div>
										))}	
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="content-inner-1 service-wrapper" style={{backgroundImage:'url('+ bg6 +')', backgroundSize:'cover', backgroundPosition:'top'}}>
					<div className="container">
						<div className="service-box">
							<div className="row align-items-center">
								<div className="col-lg-7 m-b30 aos-item" data-aos="zoom-out" data-aos-duration="800" data-aos-delay="400">
									<div className="section-head style-1">
										<h3 className="title m-b20">Providing Full Range of High Services Solution</h3>
										<p>Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divideProgressively maintain extensive </p>
									</div>
									<Link to={"./services"} className="btn btn-primary">READ MORE <i className="fas fa-long-arrow-alt-right m-l15"></i></Link>
								</div>
								<div className="col-lg-5 aos-item" data-aos="zoom-out" data-aos-duration="800" data-aos-delay="800">
									<div className="icon-bx-wraper left style-3 m-b20">
										<div className="icon-lg text-primary"> 
											<span className="icon-cell"><i className="flaticon-factory-1"></i></span>
										</div>
										<div className="icon-content">
											<h4 className="dz-title">A Full Services</h4>
											<p>Progressively maintain extensive infomediaries via extensible niches.</p>
										</div>
									</div>
									<div className="icon-bx-wraper left style-3 m-b20">
										<div className="icon-lg text-primary"> 
											<span className="icon-cell"><i className="flaticon-engineer-1"></i></span>
										</div>
										<div className="icon-content">
											<h4 className="dz-title">All Maintenace</h4>
											<p>Progressively maintain extensive infomediaries via extensible niches.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="content-inner-2" style={{backgroundImage:'url('+ Bg6Png +')',backgroundSize:'cover', 	backgroundPosition:'center' }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-5 m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
								<div className="dz-media border-primary border-bottom-10 m-r20 m-md-r0">
									<img src={about24} alt="" />
								</div>
							</div>
							<div className="col-lg-7 align-self-center">
								<div className="section-head style-1 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
									<h3 className="title m-b20">High Performance Services For Multiple Industries!</h3>
									<p>Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta </p>
								</div>
								{progressBlog.map((data, index)=>(
									<div className="progress-bx style-1 m-b30 aos-item" key={index}>
										<div className="progress-info">
											<h5 className="title">{data.title}</h5>
											<h5 className="progress-value">{data.barnum}</h5>
										</div>
										<div className="progress">
											<div className="progress-bar" style={{width: data.barnum }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								))}
								
							</div>
						</div>
					</div>
				</section>	
				<section className="content-inner-2">
					<div className="container-fluid">	
						<div className="section-head style-1 text-center aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
							<h6 className="sub-title text-primary">Explore Recent Work</h6>
							<h2 className="title m-b20">We've Done Lot's Projects Let's Check Some Here</h2>
						</div>
						<SRLWrapper>
							<div className="row sp15 aos-item" data-aos="fade-in" data-aos-duration="800" data-aos-delay="400">
								{recentWorkBlog.map((data, index)=>(		
									<div  className={`col-md-6 m-b15  ${ data.classEffect} `} key={index}>
										<div className="image-tooltip-effect dz-box style-2">
											<Link to={"./portfolio-details"} className="dz-media height-md" style={{ backgroundImage:'url('+data.image +')'}}></Link>
											<div className="dz-info">
												<h4 className="title m-b10">{data.title}</h4>
												<h6 className="sub-title text-primary m-b0">{data.number} projects</h6>
											</div>
										</div>
									</div>
								))}
							</div>
						</SRLWrapper>	
					</div>		
				</section>	
				<section className="content-inner-1">
					<div className="container">	
						<div className="section-head style-1 text-center aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
							<h6 className="sub-title text-primary">Our Experts</h6>
							<h2 className="title m-b20">Team & Advisory board</h2>
						</div>
						<div className="team-swiper-1 btn-center-lr">
							<TeamSliderIndex2 />
						</div>			
					</div>			
				</section>
				<section className="content-inner bg-img-fix overlay-primary-dark" style={{backgroundImage: 'url('+ bg1 +')'}}>
					<div className="container">
						<div className="row">
							{counterBlog.map((item, index)=>(	
								<div className="col-lg-3 col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" key={index}>
									<div className="counter-style-3 m-b30">
										<div className="icon-bx icon-md text-white">
											{item.iconbtn}
										</div>
										<div className="counter-info">
											<div className="counter-num">
												<h2 className="counter text-white"> <CountUp end={item.countnumber} duration={3} /> </h2>
											</div>
											<h5 className="counter-text text-white">{item.title}</h5>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>	
				<section className="content-inner">
					<div className="container">
						<div className="row about-style15 align-items-center">
							<div className="col-lg-7 m-b30">
								<div className="row p-r20 p-md-r0">
									<div className="col-sm-8">
										<div className="dz-media m-b30">
											<img src={about25} alt="" className="aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" />
										</div>
									</div>
									<div className="col-sm-4">
										<div className="about-media">
											<img  src={about26} alt="" className="aos-item p-b30" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" />
											<img src={about27} alt="" className="aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" />
										</div>
									</div>
								</div>
							</div>
							<AccordionBlog />
							
						</div>
					</div>
				</section>	
				<section className="content-inner-2 service-wrapper-2 overlay-black-dark" style={{backgroundImage:'url('+ bg7 +')',	backgroundSize: 'cover'}}>
					<div className="container">
						<div className="section-head style-1 text-center aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
							<h6 className="sub-title text-primary">Our Services</h6>
							<h2 className="title m-b20 text-white">High Performance Services For Multiple Industries!</h2>
						</div>
						<div className="btn-center-lr">
							<ServiceSlider />
						</div>
					</div>
				</section>		
				<section className="content-inner-1">
					<div className="container">	
						<MarketSlider2 />
					</div>
				</section>	
				<ExperSectionIndex2 />	
				<section className="content-inner " style={{backgroundImage:'url('+ bg3 +')', backgroundPosition:'bottom',	backgroundSize:'cover'}}>
					<div className="container">
						<div className="row">
							<div className="col-lg-6 m-b30">
								<div className="row h-100 sp15">
									<div className="col-6">
										<div  className={`split-box w-100 h-100 ${splitEvent ? "" : "split-active"}`}>
											<div className="dz-media h-100 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
												<img className="w-100 h-100 object-cover" src={about10} alt="" />
											</div>
										</div>
									</div>
									<div className="col-6">
										<div className={`split-box w-100 h-100 ${splitEvent ? "" : "split-active"}`}>
											<div className="dz-media h-100 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
												<img className="w-100 h-100 object-cover" src={about11} alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 m-b30 align-self-center">
								<div className="about-content">
									<div className="section-head style-1 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
										<h2 className="title m-b20">We Are Always Best Industrial Solution</h2>
										<p>Aenean fermentum congue risus ut blandit. Cras sed fermentum felis. Cras quis bibendum libero. Sed dictum, nibh at placerat rhoncus, </p>
									</div>
									<div className="row m-b40">
										<div className="col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
											<ul className="list-check-circle primary">
												<li>Power & Energy</li>
												<li>Chemical Engineering</li>
												<li>Energy & Power Engineering</li>
												<li>Information architecture</li>
											</ul>
										</div>
										<div className="col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
											<ul className="list-check-circle primary">
												<li>Oil & Gas Engineering</li>
												<li>User interface design</li>
												<li>Civil Enginering</li>
												<li>Mining Engineering</li>
											</ul>
										</div>	
									</div>
									<div className="call-box aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">	
										<i className="fas fa-phone-alt icon"></i>
										<span>CALL TO GET A FREE ESTIMATE</span>
										<h4 className="title">92 123 456 0000</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>	
				<section className="content-inner" style={{backgroundImage:'url('+ bg7png +')'}}>
					<div className="container">
						<div className="row">
							<div className="col-lg-6 m-b30">
								<div className="contact-area1 m-r20 m-md-r0 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
									<div className="section-head style-1">
										<h6 className="sub-title text-primary">CONTACT US</h6>
										<h3 className="title m-b20">Request A Quote</h3>
									</div>
									<form className="dz-form dzForm" ref={form} onSubmit={sendEmail}>
										<input type="hidden" className="form-control" name="dzToDo" defaultValue="Contact" />
										<div className="dzFormMsg"></div>		
										<div className="input-group">
											<input required type="text" className="form-control" name="name" placeholder="Full Name" />
										</div>
										<div className="input-group">
											<input required type="text" className="form-control" name="email" placeholder="Email Adress" />
										</div>
										<div className="input-group">
											<input required type="text" className="form-control" name="dzOther[phone_number]" placeholder="Phone No." />
										</div>
										<div className="input-group">
											<textarea required name="message" rows="5" className="form-control" defaultValue="Message" />
										</div>
										{/* <div className="input-group">
											<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
											<input className="form-control d-none" style={{display:'none'}} data-recaptcha="true" required data-error="Please complete the Captcha" />
										</div> */}
										<div>
											<button name="submit" type="submit" defaultValue="submit" className="btn btn-primary">SUBSCRIBE NOW</button>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-6 m-b30 align-self-center">
								<div className="section-head style-1 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
									<h3 className="title m-b20">We Are Always Best For Industrial Solution</h3>
								</div>
								<ul className="list-check primary m-b40 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
									<li>Think Positive, Think Always</li>
									<li>Everyone Loves Got An Incredible</li>
									<li>Our Professional Team Works</li>
									<li>We Are Laregest Independent</li>
								</ul>
								<div  className={`split-box ${splitEvent ? "" : "split-active"}`}>
									<img src={about28} alt="" className="aos-item w-100" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section-full dz-subscribe style-1">
					<FooterSingUp />
				</section>				
			</div>	
			<Footer2 />	
		</>
	)
}
export default Home2;