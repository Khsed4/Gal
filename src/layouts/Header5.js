import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

//images
import logowhite from './../assets/images/logo-white.png';
import logo from './../assets/images/logo.png';

export default function Header5(){
     //Sidebar
	const [openToggleBtn,setOpenToggleBtn] = useState(false);

     /* for sticky header */
	const [headerFix, setheaderFix] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix(window.scrollY > 130);
		});
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));		
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
        function checkLi(current) {		
            //SubMenu.forEach(el => (current !== el) ? el.classList.remove('none') : '');
            navUl.forEach(el => (current !== el) ? el.classList.remove('open') : '');
			setTimeout(() => {
				current.classList.toggle('open');				
			}, 100);		
        }

	}, []); 
	
    // Serach btn 
	const [openSearchTab,setOpenSearchTab ] = useState(false);
    
    return(
        <>
            <header className="site-header mo-left header style-5">		
                <div className="top-bar">
                    <div className="container">
                        <div className="dz-topbar-inner d-flex justify-content-between align-items-center">
                            <div className="dz-topbar-left">
                                <ul>
                                    <li><i className="fas fa-envelope"></i> info@example.com</li>
                                    <li><i className="fas fa-map-marker-alt"></i> 15/B Miranda House, New York, US</li>
                                </ul>
                            </div>
                            <div className="dz-topbar-right">
                                <ul className="dz-social">
                                    <li><a target="_blank" rel="noreferrer" target="_blank" className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
                                    <li><a target="_blank" rel="noreferrer" target="_blank" className="fab fa-instagram" href="https://www.instagram.com/"></a></li>
                                    <li><a target="_blank" rel="noreferrer" target="_blank" className="fab fa-twitter" href="https://twitter.com/"></a></li>
                                    <li><a target="_blank" rel="noreferrer" target="_blank" className="fab fa-youtube" href="https://www.youtube.com/"></a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="middle-bar bg-white">
                    <div className="container">
                        {/* <!-- website logo  --> */}
                        <div className="middle-area">
                            <div className="logo-header logo-dark">
                                <Link to={"./"}><img src={logo} alt="" /></Link>
                            </div>
							<div className="logo-header logo-white">
								<Link to={"#"}><img src={logowhite} alt="" /></Link>
							</div>
                            <div className="extra-nav">
                                <div className="service-info">
                                    <span>Office and Factory</span>
                                    <h4 className="title">(+1) 123-456 7894</h4>
                                </div>
                                <Link to={'#'} className="search-link" id="quik-search-btn" 
                                    onClick={()=>setOpenSearchTab(!openSearchTab)}
                                >
                                    <i className="fas fa-search"></i>
                                </Link>
                            </div>
                            <div className={`dz-quik-search ${openSearchTab ? 'On d-block' : ''}`}>
                                <form action="#">
                                    <input name="search" value="" type="text" className="form-control" placeholder="Enter Your Keyword ..." />
                                    <span id="quik-search-remove"><i className="ti-close"   onClick={()=>setOpenSearchTab(false)}></i></span>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                {/* <!-- Main Header --> */}
                <div className={`sticky-header main-bar-wraper navbar-expand-lg  ${headerFix ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-white  d-md-block d-lg-none">
                                <Link to={"./"}><img src={logowhite} alt="" /></Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button 
                                className={`navbar-toggler navicon justify-content-end ${openToggleBtn ? 'open' : 'collapsed' }`}
                                onClick={()=>setOpenToggleBtn(!openToggleBtn)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link to={"#"} className="btn btn-primary d-sm-inline-flex d-none btn-border btn-border-white m-r10 m-b10">REQUEST A QUOTE</Link>
                                </div>
                            </div>
                            {/* <!-- Extra Nav --> */}
                            
                            <div
                                className={`header-nav navbar-collapse justify-content-start ${openToggleBtn ? ' collapse show' : ' collapse'}`}

                            >
                                <div className="logo-header ">
                                    <Link to={"./"}><img src={logo} alt="" /></Link>
                                </div>
                                <ul className="nav navbar-nav navbar navbar-left">	
                                    <li className="sub-menu-down"><Link to={"#"}><span>Home</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={"./"}>Home 1</Link></li>
											<li><Link to={"./index-2"}>Home 2</Link></li>
											<li><Link to={"./index-3"}>Home 3</Link></li>
											<li><Link to={"./index-4"}>Home 4</Link></li>
											<li><Link to={"./index-5"}>Home 5</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-mega-menu"><Link to={"#"}>Pages</Link>
                                        <ul className="mega-menu">
                                            <li><Link to={"#"}>Pages</Link>
                                                <ul>
                                                    <li><Link to={"./about-me"}>About Me</Link></li>													
													<li><Link to={"./about-us"}>About Us</Link></li>
													<li><Link to={"./coming-soon"}>Coming Soon</Link></li>
													<li><Link to={'./team'}>Team</Link></li>
                                                </ul>
                                            </li>
                                            <li> <Link to={"#"}>Pages</Link>
                                                <ul>
                                                    <li><Link to={'company-history'}>Company History</Link></li>                                                   
                                                    <li><Link to={'contact-us'}>Contact Us</Link></li>
                                                    <li><Link to={'error-404'}>Error 404</Link></li>
                                                </ul>
                                            </li>
                                            <li> <Link to={"#"}>Pages</Link>
                                                <ul>
                                                    <li><Link to={'./gallery-grid-4'}>Gallery Grid 4</Link></li>
                                                    <li><Link to={'./gallery-masonry'}>Gallery Masonry</Link></li>
                                                    <li><Link to={'./help-desk'}>Help Desk</Link></li>
                                                </ul>
                                            </li>
                                            <li> <Link to={"#"}>Pages</Link>
                                                <ul>
                                                    <li><Link to={'./pricing'}>Pricing Table</Link></li>
                                                    <li><Link to={'./privacy-policy'}>Privacy Policy</Link></li>
                                                    <li><Link to={'./services'}>Services</Link></li> 
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-down"><Link to={"#"}><span>Portfolio</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'./portfolio'}>Portfolio 1</Link></li>                                          
                                            <li><Link to={'./portfolio-collage'}>Portfolio Collage</Link></li>                                           
                                            <li><Link to={'./portfolio-details'}>Portfolio Details</Link></li> 
                                        </ul>
                                    </li>
                                    <li className="sub-menu-down"><Link to={"#"}><span>Shop</span></Link>
                                        <ul className="sub-menu">
                                            <li><Link to={'./shop-grid-3'}>Shop Grid 3</Link></li>                                           
                                            <li><Link to={'./product-details'}>Product Details</Link></li>
                                            <li><Link to={'./shop-wishlist'}>Wishlist</Link></li>
                                            <li><Link to={'./shop-checkout'}>Checkout</Link></li>
                                            <li><Link to={'./shop-cart'}>Cart</Link></li>
                                            <li><Link to={'./login'}>Login</Link></li>
                                        </ul>
                                    </li>
                                    <li className="sub-menu-down"><Link to={"#"}><span>Blog</span></Link>
                                        <ul className="sub-menu">
											<li><Link to={'./blog-grid'}>Blog Grid</Link></li>
                                            <li><Link to={'./blog-large-right-sidebar'}>Blog Right Sidebar</Link></li>
                                            <li><Link to={'./blog-list-sidebar'}>Blog List Sidebar</Link></li>
                                            <li><Link to={'./blog-list-left-sidebar'}>Blog List Left Sidebar</Link></li>
                                            <li><Link to={'./blog-details-post-wide'}>Post Wide View</Link></li>
                                            <li><Link to={'./blog-details'}>Blog Details</Link></li>
                                        
                                        </ul>
                                    </li>
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
                {/* <!-- Main Header End --> */}
            </header>
        </>
    )
}