import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop2 from "react-scroll-to-top";
import ScrollToTop from './../layouts/ScrollToTop';
import DarkTheme from './../layouts/DarkTheme';
import Home from './Home';
import AboutUs from './AboutUs';
import CompanyHistory from './CompanyHistory';
import ContactUs from './ContactUs';
import ErrorPage from './ErrorPage';
import GalleryMasonry from './GalleryMasonry';
import Team from './Team';
import ShopGrid3 from './ShopGrid3';
import ProductDetails from './ProductDetails';
import Services from './Services';






function Index(){
	return(
		<BrowserRouter basename="/">
			<div className="page-wraper">
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about-us' exact component={AboutUs} />
				
					<Route path='/company-history' exact component={CompanyHistory} />
					<Route path='/contact-us' exact component={ContactUs} />
					<Route path='/error-404' exact component={ErrorPage} />
				
					<Route path='/gallery-masonry' exact component={GalleryMasonry} />
					<Route path='/services' exact component={Services} />
							
					<Route path='/team' exact component={Team} />
					
					<Route path='/shop-grid-3' exact component={ShopGrid3} />
					<Route path='/product-details' exact component={ProductDetails} />
				
					
				</Switch>
				<ScrollToTop />
				<ScrollToTop2 className="styles_scroll-to-top__2A70v  fas fa-arrow-up scroltop" smooth />
			</div>
			<DarkTheme /> 
			
		 </BrowserRouter>			
	)
} 
export default Index;