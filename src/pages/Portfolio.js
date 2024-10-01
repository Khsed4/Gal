import React from 'react';
import Masonry,{ResponsiveMasonry} from "react-responsive-masonry";
//import { SRLWrapper } from "simple-react-lightbox";
import {Tab, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//Components
import FooterSingUp from './../components/FooterSingUp';

//Images
import pic1  from './../assets/images/work/work-2/pic1.jpg';
import pic2  from './../assets/images/work/work-2/pic2.jpg';
import pic3  from './../assets/images/work/work-2/pic3.jpg';
import pic4  from './../assets/images/work/work-2/pic4.jpg';
import pic5  from './../assets/images/work/work-2/pic5.jpg';
import pic6  from './../assets/images/work/work-2/pic6.jpg';

const  masonaryBlog1 = [
    { image: pic1 , classChange:'height-sm'},
    { image: pic2 , classChange:'height-lg'},
    { image: pic3, classChange:'height-sm'},
    { image: pic4, classChange:'height-sm'},
    { image: pic5, classChange:'height-lg'},
    { image: pic6, classChange:'height-sm'},
];

const  masonaryBlog2 = [
    { image: pic2 , classChange:'height-lg'},
    { image: pic3, classChange:'height-sm'},
];
const  masonaryBlog3 = [
    { image: pic2 , classChange:'height-lg'},
];

const  masonaryBlog4 = [
    { image: pic1 , classChange:'height-sm'},
    { image: pic5, classChange:'height-lg'},
   
];
const  masonaryBlog5 = [
    { image: pic4, classChange:'height-sm'},
    { image: pic6, classChange:'height-sm'},
];

function Portfolio(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Portfolio' parentPage='Home' childPage='Pages' />
                {/* <!-- Projects --> */}
                <section className="content-inner-1">
                    <div className="container">
                        <Tab.Container defaultActiveKey='All' >
                            <div className="site-filters style-1 clearfix center mb-5">
                                <Nav as="ul" className="filters" data-toggle="buttons">
                                    <Nav.Item as="li" className="btn" >
                                        <input type="radio" />
                                        <Nav.Link eventKey="All" >Show All</Nav.Link> 
                                    </Nav.Item>
                                    <Nav.Item as="li"   className="btn">
                                        <input type="radio" />
                                        <Nav.Link eventKey="Agricultural">Agricultural</Nav.Link> 
                                    </Nav.Item>
                                    <Nav.Item as="li"  className="btn">
                                        <input type="radio" />
                                        <Nav.Link  eventKey="Chemical">Chemical</Nav.Link> 
                                    </Nav.Item>
                                    <Nav.Item as="li"  className="btn">
                                        <input type="radio" />
                                        <Nav.Link  eventKey="Mechanical">Mechanical</Nav.Link> 
                                    </Nav.Item>
                                    <Nav.Item as="li"  className="btn">
                                        <input type="radio" />
                                        <Nav.Link  eventKey="Power">Power Energy</Nav.Link> 
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="All">
                                    <div className="clearfix">
										<ResponsiveMasonry
											columnsCountBreakPoints={{350: 1, 580: 2}}
										>
											<Masonry  gutter="30px"> 
												{masonaryBlog1.map((data,i)=>(
													<>
														<div className="image-tooltip-effect dz-box style-2">
															<Link to={'./portfolio-details'} className={`dz-media ${ data.classChange}`}  style={{backgroundImage:'url('+ data.image +')'}}></Link>
															<div className="dz-info">
																<h4 className="title m-b10">Power & Energy</h4>
																<h6 className="sub-title text-primary m-b0">100 projects</h6>
															</div>
														</div>                                                
													</> 
													
												))}    
											</Masonry>   
										</ResponsiveMasonry>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Agricultural">
                                    <div className="clearfix">
										<ResponsiveMasonry
											columnsCountBreakPoints={{350: 1, 580: 2}}
										>
											<Masonry gutter="30px"> 
												{masonaryBlog2.map((data,i)=>(
													<>
														<div className="image-tooltip-effect dz-box style-2">
															<Link to={'./portfolio-details'} className={`dz-media ${ data.classChange}`}  style={{backgroundImage:'url('+ data.image +')'}}></Link>
															<div className="dz-info">
																<h4 className="title m-b10">Power & Energy</h4>
																<h6 className="sub-title text-primary m-b0">100 projects</h6>
															</div>
														</div>                                                
													</> 
													
												))}    
											</Masonry>   
										</ResponsiveMasonry>	
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Chemical">
                                    <div className="clearfix">
										<ResponsiveMasonry
											columnsCountBreakPoints={{350: 1, 580: 2}}
										>
											<Masonry gutter="30px"> 
												{masonaryBlog3.map((data,i)=>(
													<>
														<div className="image-tooltip-effect dz-box style-2">
															 <Link to={'./portfolio-details'} className={`dz-media ${ data.classChange}`}  style={{backgroundImage:'url('+ data.image +')'}}></Link>
															<div className="dz-info">
																<h4 className="title m-b10">Power & Energy</h4>
																<h6 className="sub-title text-primary m-b0">100 projects</h6>
															</div>
														</div>                                                
													</> 
													
												))}    
											</Masonry>   
										</ResponsiveMasonry>	
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Mechanical">
                                    <div className="clearfix">
										<ResponsiveMasonry
											columnsCountBreakPoints={{350: 1, 580: 2}}
										>
											<Masonry  gutter="30px"> 
												{masonaryBlog4.map((data,i)=>(
													<>
														<div className="image-tooltip-effect dz-box style-2">
															<Link to={'./portfolio-details'} className={`dz-media ${ data.classChange}`}  style={{backgroundImage:'url('+ data.image +')'}}></Link>
															<div className="dz-info">
																<h4 className="title m-b10">Power & Energy</h4>
																<h6 className="sub-title text-primary m-b0">100 projects</h6>
															</div>
														</div>                                                
													</> 
													
												))}    
											</Masonry>  
										</ResponsiveMasonry>	
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Power">
                                    <div className="clearfix">
										<ResponsiveMasonry
											columnsCountBreakPoints={{350: 1, 580: 2}}
										>
											<Masonry gutter="30px"> 
												{masonaryBlog5.map((data,i)=>(
													<>
														<div className="image-tooltip-effect dz-box style-2">
															<Link to={'./portfolio-details'} className={`dz-media ${ data.classChange}`}  style={{backgroundImage:'url('+ data.image +')'}}></Link>
															<div className="dz-info">
																<h4 className="title m-b10">Power & Energy</h4>
																<h6 className="sub-title text-primary m-b0">100 projects</h6>
															</div>
														</div>                                                
													</> 
												))}    
											</Masonry>   
										</ResponsiveMasonry>	
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>                                
                        </Tab.Container>   
                    </div>
                </section>             
                <section className="section-full dz-subscribe style-1">
                    <FooterSingUp />
                </section>
            </div>
            <Footer />
        </>
    )
}
export default Portfolio;