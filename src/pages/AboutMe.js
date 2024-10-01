import React from 'react';
import {Link} from 'react-router-dom';

//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//Components
import FooterSingUp from './../components/FooterSingUp';

import bg4 from './../assets/images/background/bg4.png';
import about22 from './../assets/images/about/about22.jpg';

const iconDetailBlog = [
    {icon:'flaticon-conveyor', title:'Power & Energy'},
    {icon:'flaticon-engineer-1', title:'All Maintenace'},
    {icon:'flaticon-tanker', title:'Chemical Research'},
    {icon:'flaticon-engineer-1', title:'Civil Enginering'},
    {icon:'flaticon-cart', title:'Mining Engineering'},
    {icon:'flaticon-radiation', title:'Chemical Engineering'},
];

function AboutMe(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='About Me' parentPage='Home' childPage='Pages' />
                 {/* <!-- About --> */}
                <section className="content-inner" style={{backgroundImage:'url('+ bg4 +')', backgroundSize:'cover', backgroundPosition:'bottom'}}>
                    <div className="container">
                        <div className="row about-style14">
                            <div className="col-lg-6 m-b30">
                                <div className="dz-media">	
                                    <img src={about22} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 m-b30 align-self-center">
                                <div className="about-content">
                                    <div className="section-head style-1">
                                        <h2 className="title m-b20">Hi, i am rezaul. expert web design & web developer</h2>
                                    </div>
                                    <div className="info">
                                        <p className="m-b30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ rehenderit in volup</p>
                                        <Link to={"#"} className="btn btn-primary btn-border m-r10 m-b10">REQUEST A QUOTE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Iconbox  --> */}
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head text-center style-1">
                            <h2 className="title">What We Do?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                        </div>
                        <div className="row">
                            {iconDetailBlog.map((data, ind)=>(
                                <div className="col-lg-4 col-md-6" key={ind}>
                                    <div className="icon-bx-wraper left style-7 m-b30">
                                        <div className="icon-lg text-primary m-b20"> 
                                            <span className="icon-cell">
                                                <i class={data.icon}></i>
                                            </span> 
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="dz-title m-b10">{data.title}</h4>
                                            <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incidid abore et dolore magna aliqua</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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
export default AboutMe;