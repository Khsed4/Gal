import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { SRLWrapper , useLightbox} from "simple-react-lightbox";
import ModalVideo from 'react-modal-video'

//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//Components
//import VideoPopup from './../components/VideoPopup';
import FooterSingUp from './../components/FooterSingUp';

//images
import work1 from './../assets/images/work/work-2/pic1.jpg';
import work2 from './../assets/images/work/work-2/pic2.jpg';
import work3 from './../assets/images/work/work-2/pic3.jpg';
import work4 from './../assets/images/work/work-2/pic4.jpg';
import work5 from './../assets/images/work/work-2/pic5.jpg';
import work6 from './../assets/images/work/work-2/pic6.jpg';
import work7 from './../assets/images/work/work-2/pic7.jpg';

const dataBlogCol =[
    {image: work2, image2: work3 },
    {image: work4, image2: work5},    
];
const dataBlog = [
    {image: work1},
    {image: work6},
    {image: work7},
];

function PortfolioCollage(){
    const { openLightbox } = useLightbox()
	const [isOpen, setOpen] = useState(false)
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Portfolio Collage' parentPage='Home' childPage='Pages' />

                <section className="content-inner">
                    <div className="container">
                        
						<SRLWrapper>
							<div className="row lightgallery">
									{dataBlogCol.map((item, index)=>(
										<div className="col-md-6 col-lg-3 col-sm-6">
											<div className="dz-box style-5 m-b30">
												<Link to={"#"} className="dz-media height-sm overlay-primary" style={{backgroundImage:'url('+ item.image +')'}}></Link>
												<div className="overlay-bx">
													<div className="overlay-icon"> 
														<Link to={"#"} className="popup-youtube" onClick={()=> setOpen(true)} ><i className="fa fa-play" ></i></Link>
														<span thumbnail={item.image} data-exthumbimage={item.image} data-src={item.image} className="view-btn lightimg" title=""
														   onClick={() => openLightbox(index)}
														>
															<i className="fas fa-search"></i>
														</span> 
													</div>
												</div>
											</div>
											<div className="dz-box style-5 m-b30">
												<Link to={"#"} className="dz-media height-sm overlay-primary" style={{backgroundImage:'url('+ item.image2 +')'}}></Link>
												<div className="overlay-bx">
													<div className="overlay-icon"> 
														<Link to={"#"} className="popup-youtube" onClick={()=> setOpen(true)} ><i className="fa fa-play" ></i></Link>
														<span data-exthumbimage={item.image2} data-src={item.image2} className="view-btn lightimg" title=""
															onClick={() => openLightbox(index)}
														 ><i className="fas fa-search"></i>
														</span> 
													</div>
												</div>
											</div>
										</div>
									))}
								
								{dataBlog.map((item, index)=>(
									<div className="col-md-12 col-lg-6" key={index}>
										<div className="dz-box style-5 m-b30">
											<Link to={"#"} className="dz-media height-md overlay-primary" style={{backgroundImage:'url('+ item.image +')'}}></Link>
											<div className="overlay-bx">
												<div className="overlay-icon"> 
													<Link to={"#"} className="popup-youtube" onClick={()=> setOpen(true)} ><i className="fa fa-play" ></i></Link>
													<span data-exthumbimage={item.image} data-src={item.image} className="view-btn lightimg" title=""
														onClick={() => openLightbox(index)}
													>
														<i className="fas fa-search"></i>
													</span> 
												</div>
											</div>
										</div>
									</div>
								))}    
							</div>
						</SRLWrapper>	
                    </div>
                </section>
                <section className="section-full dz-subscribe style-1">
                    <FooterSingUp />
                </section>
            </div>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_FRZVScwggM" onClose={() => setOpen(false)} />
            <Footer />
        </>
    )
}
export default PortfolioCollage;