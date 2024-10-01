import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import Collapse from 'react-bootstrap/Collapse';
import {MenuListArray2} from './MenuListArray2';

import logo from './../assets/images/logo.png';
import logowhite from './../assets/images/logo-white.png';

function Header2(){
	
	//Sidebar
	const [openToggleBtn,setOpenToggleBtn] = useState(false);
	
	// for sticky header 
	const [headerFix2, setheaderFix2] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix2(window.scrollY > 50);
		});
	}, []); 
	
	/* for open menu bar */
	const [sidebarOpen2, setSidebarOpen2] = useState(false);
	useEffect(() => {
		var mainMenu = document.getElementById('OpenMenu2'); 
		if(mainMenu){
			if(sidebarOpen2){
				mainMenu.classList.add('show');
			}else{
				mainMenu.classList.remove('show');
			}
		}	
		
	});
	
	// Serach btn 
	const [openSearchTab,setOpenSearchTab ] = useState(false);
	
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
		<>	
			<header className="site-header mo-left header header-transparent style-2">		
				<div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix2 ? "is-fixed" : ""}`}>
					<div className="main-bar clearfix ">
						<div className="container-fluid clearfix">							
							<div className="logo-header mostion logo-dark">
								<Link to={"./"}><img src={logo} alt="" /></Link>
							</div>							
							<div className="logo-header mostion logo-white">
								{
									sidebarOpen2 === false ? (
										<Link to={"./"}><img src={logowhite} alt="" /></Link>
									) : (
										<Link to={"./"}><img src={logo} alt="" /></Link>
									)
								}								
							</div>	
							<button 
								className={`navbar-toggler navicon justify-content-end ${openToggleBtn ? 'open' : 'collapsed' }`}
								onClick={()=>setOpenToggleBtn(!openToggleBtn)}
								type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<div className="extra-nav">
								<div className="extra-cell">
									<ul>
										<li>
											<Link to={"#"} className="search-link" id="quik-search-btn"  onClick={()=>setOpenSearchTab(!openSearchTab)}>
												<i className="fas fa-search"></i>
											</Link>
										</li>
										<li>
											<Link to={"#"} className={`menu-btn ${sidebarOpen2 ? 'open' : '' }`} onClick={()=>setSidebarOpen2(!sidebarOpen2)}>
												<span></span>
												<span></span>
												<span></span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className={`dz-quik-search ${openSearchTab ? 'On d-block' : ''}`}>
								<form action="#">
									<input name="search" defaultValue="" type="text" className="form-control" placeholder="Enter Your Keyword ..." />
									<span id="quik-search-remove"><i className="ti-close" onClick={()=>setOpenSearchTab(false)} ></i></span>
								</form>
							</div>
							
							<div className="full-sidenav" id="OpenMenu2">
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
														<h4 className="title">Envato Pty Ltd 13/2 Permanent <br /> St Melbourne </h4>
													</li>
												</ul>
											</div>
											<div className="social-menu">
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
													<li><a target="_blank" rel="noreferrer"  href="https://www.instagram.com/?hl=en">
															<i className="fab fa-instagram"></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-lg-6">
											<h4>About Us</h4>
											<p>Aliquam erat volutpat. Nunc erat massa, porttitor vel egestas sit amet, tristique at massa. Donec posuere odio neque, in ultricies lorem aliquet eu. Donec venenatis libero a nulla placerat egestas.</p>
											<Link to={"./about-us"} className="btn btn-primary">READ MORE</Link>
										</div>
									</div>
								</div>
							</div>							
							<div  id="navbarNavDropdown"
								className={`header-nav navbar-collapse justify-content-end ${openToggleBtn ? ' collapse show' : ' collapse'}`}
							>
								<div className="logo-header">
									<Link to={"./"}><img src={logo} alt="" /></Link>
								</div>
								<ul className="nav navbar-nav navbar navbar-left">									
									{MenuListArray2.map((data,index) => {	
										var menuClass = data.classsChange;									
										return(
											<li key={index}
												className={`${menuClass} ${ active === data.title ? 'open' : ''}`}
												onClick={() => handleMenuActive(data.title)}
											>
												<Link to={"#"} >
													<span>{data.title}</span>
												</Link>	
												<Collapse in={active === data.title ? true :false}>
													<ul className={`${menuClass === "sub-menu-down" ? "sub-menu" : menuClass ==="has-mega-menu" ? "mega-menu" :""}`}>
														{data.content && data.content.map((data,index) => {
															return(
																<>
																	<li key={index}>
																		<Link to={data.to}>{data.title}</Link>
																		{menuClass === "has-mega-menu" &&
																			<ul>
																				{data.content&&data.content.map((data,index) => {
																					return(
																						<li key={index}><Link to={data.to}>{data.title}</Link></li>
																					)
																				})}
																			</ul>
																		}
																	</li>
																</>	
															)
														})}														
													</ul>
												</Collapse>
											</li>
										)
									})}								
								</ul>
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
										<li><a target="_blank" rel="noreferrer"  href="https://www.instagram.com/?hl=en">
												<i className="fab fa-instagram"></i>
											</a>
										</li>
									</ul>
								</div>	
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
export default Header2;