import {Link} from 'react-router-dom';
//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//Components
import FooterSingUp from './../components/FooterSingUp';

function HelpDesk(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Help Desk' parentPage='Home' childPage='Pages' />
                <section className="section-full content-inner bg-white">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Left part start --> */}
                            <div className="col-lg-8 col-md-7 col-sm-12 inner-text">
                                <h2 className="title">Help Desk</h2>
                                <p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h4 className="title">Emergency Service</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                    text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is 
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                    text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <h4 className="title">Tips </h4>
                                <ul className="list-check primary m-b30">
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</li>
                                    <li>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</li>
                                    <li>Printer took a galley of type and scrambled it to make a type specimen book. </li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy book. </li>
                                    <li>Eorem ipsum dolor sit amete printing and typesetting industry. </li>
                                </ul>
                                <h4  className="title">Health Care</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                    text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply 
                                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  when an 
                                    unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                                    the industry's standard dummy text ever since the  when an unknown printer took a galley of type and 
                                    scrambled it to make a type specimen book. </p>
                                <h4 className="title">Our Help </h4>
                                <ul className="list-check primary">
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</li>
                                    <li>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</li>
                                    <li>Printer took a galley of type and scrambled it to make a type specimen book. </li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy book. </li>
                                    <li>Eorem ipsum dolor sit amete printing and typesetting industry. </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12 m-b30">
                                <aside className="side-bar sticky-top right">
                                    
                                    <div className="service_menu_nav widget style-1">
                                        <ul className="menu">
                                            <li className="menu-item"><Link to={"./about-us"}>About Us</Link></li>
                                            <li className="menu-item"><Link to={'./privacy-policy'}>Privacy Policy</Link></li>
                                            <li className="menu-item active"><Link to={'./help-desk'}>Help Desk</Link></li>
                                            <li className="menu-item"><Link to={'./contact-us'}>Contact Us</Link></li>
                                        </ul>
                                    </div>
                                    
                                </aside>
                            </div>
                        </div>
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
export default HelpDesk;