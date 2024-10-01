import React from 'react';
import { SRLWrapper , useLightbox} from "simple-react-lightbox";
import Masonry,{ResponsiveMasonry} from "react-responsive-masonry";
import {Tab, Nav} from 'react-bootstrap';


//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//Components
import FooterSingUp from './../components/FooterSingUp';

//Images
import pic1  from './../assets/images/gallery/pic1.jpg';
import pic10  from './../assets/images/gallery/pic10.jpg';
import pic5  from './../assets/images/gallery/pic5.jpg';
import pic12  from './../assets/images/gallery/pic12.jpg';
import pic13  from './../assets/images/gallery/pic13.jpg';
import pic14  from './../assets/images/gallery/pic14.jpg';
import pic15  from './../assets/images/gallery/pic15.jpg';
import pic4  from './../assets/images/gallery/pic4.jpg';
import pic16  from './../assets/images/gallery/pic16.jpg';


const  masonaryBlog1 = [
    { image: pic1  },
    { image: pic10 },
    { image: pic5 },
    { image: pic12 },
    { image: pic13 },
    { image: pic14 },
    { image: pic15 },
    { image: pic4 },
    { image: pic16 },
];
const masonaryBlog2 = [
    { image: pic1  },
    { image: pic5 },
    { image: pic4 },
];
const masonaryBlog3 =[
    { image: pic10 },
    { image: pic13 },
];
const masonaryBlog4 =[
    { image: pic15 },
    { image: pic16 },
];

const masonaryBlog5 =[
    { image: pic14 },
    { image: pic12 },
];


const options = {
	buttons: {
		showDownloadButton: false,		
	},
	
}

function GalleryMasonry(){
    const { openLightbox } = useLightbox()
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Gallery Masonry' parentPage='Home' childPage='Pages' />
                {/* <!-- Projects --> */}
                <section className="content-inner">
                    <div className="container">
                        <Tab.Container defaultActiveKey='All' >
                            <div className="site-filters style-1 clearfix center mb-5">
                                <Nav as="ul" className="filters" data-toggle="buttons">
                                    <Nav.Item as="li" className="btn" >
                                        <input type="radio" />
                                        <Nav.Link eventKey="All" >All Pictures</Nav.Link> 
                                    </Nav.Item>
                                    <Nav.Item as="li"   className="btn">
                                        <input type="radio" />
                                        <Nav.Link eventKey="Chemical">Chemical</Nav.Link> 
                                    </Nav.Item>
                                    <Nav.Item as="li"  className="btn">
                                        <input type="radio" />
                                        <Nav.Link  eventKey="Mechanical">Mechanical</Nav.Link> 
                                    </Nav.Item>
                                    <Nav.Item as="li"  className="btn">
                                        <input type="radio" />
                                        <Nav.Link  eventKey="Plants">Plants</Nav.Link> 
                                    </Nav.Item>
                                    <Nav.Item as="li"  className="btn">
                                        <input type="radio" />
                                        <Nav.Link  eventKey="Power">Power Energy</Nav.Link> 
                                    </Nav.Item>
                                </Nav>
                            </div>
							<SRLWrapper options={options}>
								<Tab.Content>
									<Tab.Pane eventKey="All">                                    
										
											<ResponsiveMasonry
												columnsCountBreakPoints={{350: 1, 767: 2, 991: 3}}
											>
												<Masonry  gutter="20px"> 
													{masonaryBlog1.map((data,i)=>(
														<>
															<div className="dz-box style-4">
																<div className="dz-media">
																	<img src={data.image} alt="" />
																</div>
																<span data-exthumbimage={data.image} data-src={data.image} className="view-btn lightimg" title=""
																	onClick={() => openLightbox(i)}
																>   <i className="fas fa-plus"></i>
																</span>
															</div>
														</> 
													))} 
												</Masonry> 
											</ResponsiveMasonry>	
											  
									</Tab.Pane>
									<Tab.Pane eventKey="Chemical">
									  
											<ResponsiveMasonry
												columnsCountBreakPoints={{350: 1, 767: 2, 991: 3}}
											>
												<Masonry gutter="20px"> 
													{masonaryBlog2.map((data,i)=>(
														<>
															<div className="dz-box style-4 ">
																<div className="dz-media">
																	<img src={data.image} alt="" />
																</div>
																<span data-exthumbimage={data.image} data-src={data.image} className="view-btn lightimg" title=""
																	onClick={() => openLightbox(i)}
																>   <i className="fas fa-plus"></i>
																</span>
															</div>
														</> 
													))} 
												</Masonry> 
											</ResponsiveMasonry>	
									   
									</Tab.Pane>
									<Tab.Pane eventKey="Mechanical">
									   
											<ResponsiveMasonry
												columnsCountBreakPoints={{350: 1, 767: 2, 991: 3}}
											>
												<Masonry gutter="20px"> 
													{masonaryBlog3.map((data,i)=>(
														<>
															<div className="dz-box style-4 ">
																<div className="dz-media">
																	<img src={data.image} alt="" />
																</div>
																<span data-exthumbimage={data.image} data-src={data.image} className="view-btn lightimg" title=""
																	onClick={() => openLightbox(i)}
																>   <i className="fas fa-plus"></i>
																</span>
															</div>
														</> 
													))} 
												</Masonry> 
											</ResponsiveMasonry>	
										
									</Tab.Pane>
									<Tab.Pane eventKey="Plants">
										
											<ResponsiveMasonry
												columnsCountBreakPoints={{350: 1, 767: 2, 991: 3}}
											>
												<Masonry gutter="20px"> 
													{masonaryBlog4.map((data,i)=>(
														<>
															<div className="dz-box style-4 ">
																<div className="dz-media">
																	<img src={data.image} alt="" />
																</div>
																<span data-exthumbimage={data.image} data-src={data.image} className="view-btn lightimg" title=""
																	onClick={() => openLightbox(i)}
																>   <i className="fas fa-plus"></i>
																</span>
															</div>
														</> 
													))} 
												</Masonry> 
											</ResponsiveMasonry>	
										
									</Tab.Pane>
									<Tab.Pane eventKey="Power">
										
											<ResponsiveMasonry
												columnsCountBreakPoints={{350: 1, 767: 2, 991: 3}}
											>
												<Masonry gutter="20px"> 
													{masonaryBlog5.map((data,i)=>(
														<>
															<div className="dz-box style-4">
																<div className="dz-media">
																	<img src={data.image} alt="" />
																</div>
																<span data-exthumbimage={data.image} data-src={data.image} className="view-btn lightimg" title=""
																	onClick={() => openLightbox(i)}
																>   <i className="fas fa-plus"></i>
																</span>
															</div>
														</> 
													))} 
												</Masonry> 
											</ResponsiveMasonry>	
										
									</Tab.Pane>
								</Tab.Content>
                                </SRLWrapper> 
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
export default GalleryMasonry;