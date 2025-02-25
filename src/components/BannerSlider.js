import React,{useState} from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images
import Slider1 from './../assets/images/main-slider/slider1.jpg';
import Slider9 from './../assets/images/main-slider/slider9.jpg';
import Slider10 from './../assets/images/main-slider/slider10.jpg';

import bg1 from './../assets/images/bnr/bnr6.jpg';
import bg2 from './../assets/images/bnr/bnr3.jpg';
import bg3 from './../assets/images/bnr/bnr6.jpg';

// import Swiper core and required modules
//import {Autoplay,  Navigation } from "swiper";

import SwiperCore, { Autoplay, Parallax,Thumbs, Pagination, Navigation, EffectFade} from 'swiper';
SwiperCore.use([Parallax, Autoplay, Pagination , Navigation, EffectFade]);

const bannerBlog = [
	{bgimage: bg1, title:'Unleash the Power of Your Engine' , decription:"Our premium oils, lubricants, and grease are designed to maximize your engine's performance. Trust the best for smooth operations and long-lasting power."},
	{bgimage: bg2, title:'Engineered for Excellence' ,decription:"Experience superior lubrication and protection with our top-tier engine oils and greases. Keep your car running like new with products that go the extra mile"},
	{bgimage: bg3, title:'Maximize Efficiency, Minimize Wear' ,decription:"Our advanced oils and lubricants reduce friction and wear, ensuring your engine stays in peak condition. Drive with confidence, knowing you’ve chosen the best."},
	{bgimage: bg1, title:'Protect What Powers You' ,decription:"Our oils and greases deliver unmatched protection against the toughest conditions. Keep your engine safe and running smoothly, mile after mile."},
	{bgimage: bg2, title:'Fuel Your Car’s Performance',decription:"Engineered for ultimate protection and performance, our oils and lubricants are the ideal choice for drivers who demand the best for their car’s engine." }
];

const bannerSlider2 = [
	{image: bg1 },
	{image: bg2 },
	{image: bg3 },
];

export default function BannerSlider() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)

	const paginationRef = React.useRef(null)
	
	return (
		<>
			<Swiper className="swiper-container main-swiper1 banner-inner"	
				speed= {1500}
				parallax= {true}
				effect={"fade"}
				loop={false}
				autoplay = {{
				    delay: 3000,
				}}
				thumbs={{ swiper: thumbsSwiper }}
				pagination = {{
					//el: paginationRef.current
					clickable: true,
					el: ".swiper-pagination-slider1",
					type: "progressbar",
				}}
				
				
				 onSwiper={(swiper) => {
					// Delay execution for the refs to be defined
					setTimeout(() => {
					  // Override prevEl & nextEl now that refs are defined
					  swiper.params.navigation.prevEl = navigationPrevRef.current
					  swiper.params.navigation.nextEl = navigationNextRef.current

					  // Re-init navigation
					  swiper.navigation.destroy()
					  swiper.navigation.init()
					  swiper.navigation.update()
					})
				 }}
				 
				modules={[Autoplay, Navigation, Pagination, Thumbs, EffectFade]}
			>	

				{bannerBlog.map((item, ind)=>(
					<SwiperSlide  style={{backgroundImage: "url(" + item.bgimage + ")"}} key={ind}>
						<div className="banner-content">
							<div className="row">
								<div className="col-lg-8 col-md-10">
									<h1 className="title" data-swiper-parallax="-500">{item.title}</h1>
									<p data-swiper-parallax="-1000">{item.decription}</p>
									<Link to={"./about-us"} data-swiper-parallax="-1500" className="btn btn-primary btn-icon m-r10 m-b10">READ MORE <i className="fas fa-arrow-right"></i></Link>
									<Link to={"./contact-us"} data-swiper-parallax="-2000" className="btn btn-dark btn-icon m-r10 m-b10">GET IN TOUCH <i className="fas fa-arrow-right"></i></Link>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}	
				<div className="swiper-button" style={{zIndex : 1}}>
					<div className="swiper-button-prev" ref={navigationPrevRef}><i className="las la-angle-left"></i></div>
					<div className="swiper-button-next" ref={navigationNextRef}><i className="las la-angle-right"></i></div>
				</div>	
			</Swiper>

			<div className="image-slider__pagination" ref={paginationRef}>
				<div className="image-slider__current">1</div>
				<div className="swiper-pagination swiper-pagination-slider1"></div>
				<div className="image-slider__total">{bannerBlog.length}</div>
			</div>
			
			<Swiper className="swiper-container slider-thumbs-wraper main-swiper-thumb1"
				slidesPerView={1}
				spaceBetween={0}
				//watchslidesvisibility= {true}
				watchSlidesProgress= {true}
				autoplay= {{
					delay: 2500,
				}}
				onSwiper={setThumbsSwiper}
				modules={[ Pagination, Navigation]}
			>			
				{bannerSlider2.map((d,i)=>(
					<SwiperSlide key={i}>
						<div className="slider-thumbs overlay-black-dark">
							<img src={d.image} alt="" />
						</div>
					</SwiperSlide>
				))}				
				
			</Swiper>			
		</>
	)
}