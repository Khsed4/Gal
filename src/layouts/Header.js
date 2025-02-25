import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
//images
import logowhite from './../assets/images/Galaxy-Lubricants-Logo.png';
import logo from './../assets/images/Galaxy-Lubricants-Logo.png';

import Collapse from 'react-bootstrap/Collapse';
import {MenuListArray} from './HeaderMenuList';

function Header(){
	
	/* for sticky header */
	const [headerFix, setheaderFix] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 50);
		});
	}, []); 
	
	/* for open menu Toggle btn  */
	const [sidebarOpen, setSidebarOpen] = useState(false);	
	const showSidebar = () => setSidebarOpen(!sidebarOpen);
	/*  Toggle btn End  */
	
	useEffect(() => {
		var mainMenu = document.getElementById('OpenMenu'); 
		var mainNavShow = document.getElementsByClassName('clearfix')[0].classList; 
		//console.log(mainNavShow);
		//console.log('mainNavShow');
		if(mainMenu){
			if(sidebarOpen){
				mainMenu.classList.add('show');
				mainNavShow.add('show');
				
			}else{
				mainMenu.classList.remove('show');
				mainNavShow.remove('show');
			}
		}	
	});
	
	
	
	
	// Menu dropdown list 
	const [active , setActive] = useState('Home')
    const handleMenuActive = status => {
		setActive(status)
        if(active === status){
			setActive('');
		}
    }
	// Menu dropdown list End
		
	return(
		<header className="site-header mo-left header-transparent header-sidenav-1">
			{/* <!-- main header --> */}
			<div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
				<div className="main-bar clearfix" >
					<div className="container-fluid">
						<div className="header-content-bx">
							{/*  website logo */}
							<div className="logo-header logo-dark">
								<Link to={"#"}><img src={logo} alt="" /></Link>
							</div>
							<div className="logo-header logo-white">
								<Link to={"#"}><img src={logowhite} alt="" /></Link>
							</div>
							{/* <div className="logo-header logo-white">
								<Link to={"./"}>
									{ sidebarOpen === false ?
										(
											<img src={logowhite} alt=""/>
										)
										:
										(
											<img src={logo} alt=""/>
										)
									}
								</Link>
							</div> */}
							<div className="service-list">
								<ul>
									<li>
										<i className="la la-phone"></i>
										<span>Make A Call</span>
										<h4 className="title">+1800-001-658</h4>
									</li>
									<li>
										<i className="la la-clock-o"></i>
										<span>Email Address</span>
										<h4 className="title">Website@info.com</h4>
									</li>
									<li>
										<i className="la la-map"></i>
										<span>Location</span>
										<h4 className="title">Envato Pty Ltd 13/2</h4>
									</li>
								</ul>
							</div>
							<div className="extra-nav">
								<ul>
									<li className="search-btn">
										<Link to={"#"} className={`menu-btn ${sidebarOpen ? 'open' : '' }`} onClick={showSidebar}>
											<span></span>
											<span></span>
											<span></span>
										</Link>
									</li>
								</ul>
							</div>
							<div className="header-nav navbar-collapse full-sidenav navbar"  id="OpenMenu">
								<div className="flsbg">
									<span className="bg-wrap">
										<span></span>
									</span>
									<span className="bg-wrap">
										<span></span>
									</span>
									<span className="bg-wrap">
										<span></span>
									</span>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-lg-6">
											<div className="logo-header logo-dark">
												<Link to={"./"}><img src={logo} alt="" /></Link>
											</div>
											
											<ul className="nav navbar-nav">

												{MenuListArray.map((data,index) => {										
													return(
														<li  key={index} className="sub-menu-down" >
															<Link to={'#'} className={`${ active === data.title ? '' : 'dz-open'}`}
																onClick={() => handleMenuActive(data.title)}
															>
																<span>{data.title}</span>
															</Link>	
															<Collapse in={active === data.title ? true :false}>
																<ul  className={`${active === data.title ? 'sub-menu-open' : ''} sub-menu`}>
																	{data.content&&data.content.map((data,index) => {
																		return(
																			<li key={index}><Link to={data.to}>{data.title}</Link></li>														
																		)
																	})}
																</ul>
															</Collapse>
														</li>
													)
												})}
											</ul>											
										</div>	
										<div className="col-lg-6">
											<div className="service-list">
												<ul>
													<li>
														<i className="la la-phone"></i>
														<span>Make A Call</span>
														<h4 className="title">+1800-001-658</h4>
													</li>
													<li>
														<i className="far fa-envelope"></i>
														<span>Email Address</span>
														<h4 className="title">Website@info.com</h4>
													</li>
													<li>
														<i className="la la-map"></i>
														<span>Location</span>
														<h4 className="title">Envato Pty Ltd 13/2 Permanent <br /> St Melbourne </h4>
													</li>
												</ul>
											</div>
											<div className="social-menu">
												<ul>
													<li><a  href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" ></i></a></li>
													<li><a  href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
													<li><a  href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
													<li><a  href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer"><i className="fab fa-instagram"/></a></li>
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
			
		</header>	
	)
} 
export default Header;