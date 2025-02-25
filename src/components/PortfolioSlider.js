import React from "react";
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Images

import work1 from './../assets/images/product/MOTOR-OIL-CNG-1-265x300.png';
import work2 from './../assets/images/product/MULTI-GRADE-MOTOR-OIL-247x300.png';
import work3 from './../assets/images/product/5L-GALAXY-PANTHER-DIESEL-ENGINE-OIL-API-CH4-SAE-15W40-copy-243x300.png';



// import Swiper core and required modules
import { Navigation } from "swiper";


const protfolioBlog = [
	{ image: work1, title:'Premium Oils & Lubricants for Peak Performance', description:"Our high-quality oils and lubricants are engineered to provide superior protection and performance for your engine. Experience smoother operation, better fuel efficiency, and enhanced longevity with every drive."},
	{ image: work2, title:'The Ultimate Grease for Unmatched Protection',description:"Our grease is designed for heavy-duty performance, offering the highest level of protection against friction, wear, and extreme temperatures. Keep your machinery and vehicles running smoothly with the best grease on the market."},
	{ image: work3, title:'Hydraulic Oils for Powerful Performance',description:"Our hydraulic oils are formulated to meet the demands of high-pressure systems, ensuring reliable and efficient operation. Trust our hydraulic oils to keep your equipment running at its best, even in the toughest conditions."},
	{ image: work3, title:'Sea Oil for Extreme Durability',description:"Designed for maritime environments, our sea oil offers exceptional protection against corrosion and wear, ensuring that your equipment performs flawlessly in harsh sea conditions. Trust our sea oil for long-lasting durability on the water."}
]; 
const titleStyle = {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '20px',
  };

  const descriptionStyle = {
    textAlign: 'left',
    fontSize: '18px',
    lineHeight: '1.6',
    margin: '0 20px',
  };
  const imgStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };
function PortfolioSlider() {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)

	return (
		<>
			<div className="row spno">
				<div className="col-lg-4 align-self-center px-lg-3 px-0 mb-lg-0 mb-4 aos-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
					<div className="m-l60 m-r60 m-lg-l20 m-lg-r20 m-md-l0 m-md-r0">
						<div className="section-head style-1">
							<h2 className="title m-b20" style={titleStyle}>Galaxy: Powering Performance Across Industries</h2>
							<p style={descriptionStyle}>Galaxy delivers top-tier oils, lubricants, greases, hydraulic fluids, and sea oils, designed for maximum protection and performance in any environment. Engineered for excellence, our products keep your engines and equipment running smoothly and reliably.</p>
						</div>
						<div className="swiper-button">
							<div className="btn-prev swiper-button-prev-portfolio"  ref={navigationPrevRef}><i className="las la-angle-left"></i></div>
							<div className="btn-next swiper-button-next-portfolio" ref={navigationNextRef}><i className="las la-angle-right"></i></div>
						</div>
					</div>
				</div>
				<div className="col-lg-8 aos-item" data-aos="fade-left" data-aos-duration="800" data-aos-delay="500">
					<Swiper className="swiper-container swiper-portfolio-1"						
						speed= {1500}
						parallax= {true}
						slidesPerView={3}
						spaceBetween= {0}
						loop={true}
						autoplay= {{
						   delay: 3000,
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
						modules={[Navigation]}
						breakpoints = {{
							1200: {
								slidesPerView: 3,
							},
							992: {
								slidesPerView: 2,
							},
							591: {
								slidesPerView: 2,
							},
							320: {
								slidesPerView: 1,
							},
						}}						
					>	
					
						{protfolioBlog.map((item,ind)=>(
							<SwiperSlide key={ind}>
								<div className="dz-box style-1">
									<div className="dz-media">
										<img src={item.image} alt=""  style={imgStyle}/>
									</div>
									<div className="dz-info">
										<h3 className="title m-b10"><Link to={"#"}>{item.title}</Link></h3>
										
									</div>
								</div>
							</SwiperSlide>
						))}										
					</Swiper>	
				</div>
			</div>	
			
		</>
	)
}
export default PortfolioSlider;