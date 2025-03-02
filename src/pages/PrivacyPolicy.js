import {Link} from 'react-router-dom';
//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//Components
import FooterSingUp from './../components/FooterSingUp';



function PrivacyPolicy(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Privacy Policy'  parentPage='Home' childPage='Pages' />
                {/* <!-- Privacy Policy --> */}
                <section className="section-full content-inner inner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-b30">
                                <h4 className="title">The Galaxy Lube Privacy Policy was updated on 25 June 2022.</h4>
                                <p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<Link to={"./contact-us"}> Contact Us </Link>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <h4 className="title">Who We Are and What This Policy Covers</h4>
                                <p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <h4 className="title">What personal information we collect</h4>
                                <ul className="list-circle primary m-a0">
                                    <li>The Galaxy Lube Privacy Policy was updated on 25 June 2018. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </li>
                                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                    <li>Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                                    <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                    <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                </ul>
                            </div>
                            <div className="col-lg-4 m-b30">
                                <aside className="side-bar sticky-top right">
                                    
                                    <div className="service_menu_nav widget style-1">
                                        <ul className="menu">
                                            <li className="menu-item"><Link to={"./about-us"}>About Us</Link></li>
                                            <li className="menu-item active"><Link to={"./privacy-policy"}>Privacy Policy</Link></li>
                                            <li className="menu-item"><Link to={"./help-desk"}>Help Desk</Link></li>
                                            <li className="menu-item"><Link to={"./contact-us"}>Contact Us</Link></li>
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
export default PrivacyPolicy;