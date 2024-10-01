import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { SRLWrapper , useLightbox} from "simple-react-lightbox";
import ModalVideo from 'react-modal-video';

//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//Components
//import VideoPopup from './../components/VideoPopup';
import ClientsSlider from './../components/ClientsSlider';
import FooterSingUp from './../components/FooterSingUp';

//Images
import port1 from './../assets/images/portfolio/pic1.jpg';
import port3 from './../assets/images/portfolio/pic3.jpg';
import port4 from './../assets/images/portfolio/pic4.jpg';
import port2 from './../assets/images/portfolio/pic2.jpg';

const  lightGallery= [
    {classChang:'col-12', image: port1, },
    {classChang:'col-sm-6', image: port3, },
    {classChang:'col-sm-6', image: port4, },
];

const iconBoxWraper = [
    {icon:'fas fa-user', title:'CLIENT', subtitle:'Martin Stewart'},
    {icon:'fas fa-users-cog', title:'ARCHITECT', subtitle:'Jimmy Smith'},
    {icon:'fas fa-map-marker-alt', title:'LOCATION', subtitle:'Jimmy Smith'},
    {icon:'fas fa-ruler-combined', title:'SIZE', subtitle:'1,200m2'},
    {icon:'fas fa-synagogue', title:'TYPE', subtitle:'Residential Project'},
];

function PortfolioDetails(){
	const [isOpen, setOpen] = useState(false)
    const { openLightbox } = useLightbox()
    const options = {
        settings:{
            slideAnimationType: 'slide',
            
        }
    };
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Portfolio Details' parentPage='Home' childPage='Pages' />

                <section className="section-full content-inner-2 port-detail1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="section-head">
                                    <h6 className="sub-title letter-s5">YEAR 2022</h6>
                                    <h3 className="title">Creating Authentic and Character for most Luxury Residential</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 m-b30">
                                <div className="dz-content">
                                    <p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Drinking vinegar jean vinegar stumptown yr pop-up artisan. laborum. Drinking vinegar jean vinegar stumptown yr pop-up artisan.</p>
                                </div>
                            </div>
                        </div>
                        <SRLWrapper options={options} >                        
                            <div className="row m-b30 lightgallery">
                                {lightGallery.map((data, index)=>(
                                    <div className={`m-sm-b15 m-b30 ${ data.classChang }`}  key={index}>
                                        <div className="dz-box style-4">
                                            <div className="dz-media height-md">
                                                <img src={data.image} alt="" />
                                            </div>
                                            <span data-exthumbimage={data.image} data-src={data.image} className="view-btn lightimg" title="" onClick={() => openLightbox(index)}>
                                                <i className="fas fa-plus"></i>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <div className="col-12 m-sm-b15 m-b30">
                                    <div className="dz-media video-box">
                                        <img src={port2} className="rounded" alt="" />
                                        <div className="video-btn">                                            
											<Link to={"#"} className="popup-youtube play-btn6" onClick={()=> setOpen(true)} ><i className="fa fa-play" ></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SRLWrapper>    
                        <div className="row justify-content-center m-b15">
                            {iconBoxWraper.map((data, ind)=>(
                                <div className="col-xl col-md-4 col-sm-6" key={ind}>
                                    <div className="icon-bx-wraper left style-8 m-b30">
                                        <div className="icon-bx-sm radius"> 
                                            <span className="icon-cell text-dark">
                                                <i className={data.icon}></i>
                                            </span> 
                                        </div>
                                        <div className="icon-content">
                                            <h5 className="dz-title m-b0">{data.title}</h5>
                                            <p>{data.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}                             
                            
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="dz-content m-b30">
                                    <p>Fusce et sagittis metus. Nunc vel varius enim. Aliquam finibus lorem quis purus sollicitudin vehicula. Aenean at mi orci. Vestibulum posuere quam eu ex pharetra fermentum. Sed tempor, lorem sed viverra congue, leo eros tincidunt arcu, sit amet accumsan.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="dz-content m-b30">
                                    <p>Proin nibh massa, finibus eu lacus sit amet, tristique imperdiet orci. Curabitur dictum mi vel velit maximus finibus. Donec vel odio varius, ultricies dolor ac, efficitur ante. Nunc id lorem eu neque sodales pharetra. In imperdiet, arcu at hendrerit luctuss.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-full content-inner-5">
			        <div className="container"> 
                        <ClientsSlider />
                    </div>
                </section>  
                <section className="section-full dz-subscribe style-1">
                    <FooterSingUp />
                </section>
				<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_FRZVScwggM" onClose={() => setOpen(false)} />
            </div>    
            <Footer />
        </>
    )
}
export default PortfolioDetails;