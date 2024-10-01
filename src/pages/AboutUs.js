import React from 'react';

//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';
//components
import DonutChart from './../components/DonutChart';
import AboutUsSectionIndex3 from './../components/Index3/AboutUsSectionIndex3';
import ExperSectionIndex2 from './../components/Index2/ExperSectionIndex2';
import TeamSliderIndex2 from './../components/Index2/TeamSliderIndex2';
import ClientsSlider from './../components/ClientsSlider';
import FooterSingUp from './../components/FooterSingUp';

//images
import bg9 from './../assets/images/background/bg9.jpg';

//Radial svg section
const radialBlog = [
    {title:'All Maintenance', datanum:'43'},
    {title:'Projects Completed', datanum:'73'},
    {title:'Work Employed', datanum:'67'},
    {title:'Work facilities', datanum:'95'},
];

function AboutUs(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='About Us'  parentPage='Home' childPage='Pages' />
                <section className="content-inner-1 section" style={{backgroundImage:'url('+ bg9 +')', backgroundSize: 'cover', backgroundPosition: 'top'}}>
                    <div className="container">
                        <AboutUsSectionIndex3 />
                    </div> 
                </section>
                <ExperSectionIndex2 />
                <section className="content-inner-2 bg-white">
                    <div className="container">                        
                         <div className="row">
                            {radialBlog.map((item, index) =>(   
                                <div className="col-lg-3 col-sm-6 m-b30 aos-item" key={index}>
                                    <div className="text-center">                                       
                                        <div className="radial-progress m-b20 d-flex justify-content-center">
                                            <DonutChart value={item.datanum} backgroundColor="rgba(254,76,28,1)"
                                                backgroundColor2= "rgba(242, 242, 242)"
                                            />	
                                            <small className="percentage">{item.datanum}%</small>                   
                                        </div>  
                                        <h3 className="title m-b0">{item.title}</h3>
                                        <p className="sub-title m-b0">Construction Simulator</p>
                                    </div>
                                </div>
                            ))}
                        </div>   
                    </div>
                </section>  
                <section className="content-inner-2">
                    <div className="container">	
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">Our Experts</h6>
                            <h2 className="title m-b20">Team & Advisory board</h2>
                        </div>
                        <div className="team-swiper-1 btn-center-lr">
                            <TeamSliderIndex2 />
                        </div>      
                    </div>      
                </section>     
                <section className="section-full content-inner-5">
			        <div className="container"> 
                        <ClientsSlider />
                    </div>
                </section>  
                <section className="section-full bg-white dz-subscribe style-1">
                    <FooterSingUp />
                </section>                  
            </div>
            <Footer />
        </>
    )
}
export default AboutUs;