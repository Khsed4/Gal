import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import logowhite from './../assets/images/logo-white.png';
import logo from './../assets/images/logo.png';

export default function Header4 (){
    //Sidebar
	const [openToggleBtn,setOpenToggleBtn] = useState(false);

    const [headerFix4, setheaderFix4] = React.useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setheaderFix4(window.scrollY > 50);
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
    return(
        <>
            <header className="site-header mo-left header style-4">
		
		
                {/* <!-- Main Header --> */}
                <div  className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix4 ? "is-fixed" : "" } `}>
                    <div className="main-bar clearfix ">
                        <div className="container-fluid clearfix">
                            
							<div className="logo-header mostion logo-dark">
                                <Link to={"./"}><img src={logo} alt="" /></Link>
                            </div> 
                            <div className="logo-header mostion logo-white">
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
                                    <div className="search-inhead">
                                        <div className="dz-quik-search On">
                                            <form action="#">
                                                <input name="search" value="" type="text" className="form-control" placeholder="Search..." />
                                                <span id="quik-search-remove"><i className="ti-close"></i></span>
                                            </form>
                                        </div>
                                        <Link to={"#"} className="search-link" id="quik-search-btn" >
                                            <i className="fas fa-search"></i>
                                        </Link>
                                    </div>
                                    <Link to={"./contact-us"} className="btn btn-primary d-xl-inline-flex d-none btn-quote">REQUEST A QUOTE</Link>
                                </div>
                            </div>
                            {/* <!-- Extra Nav --> */}
                            
                            <div  
                                className={`header-nav navbar-collapse justify-content-center ${openToggleBtn ? ' collapse show' : ' collapse'}`}
                            >
                                <div className="logo-header">
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