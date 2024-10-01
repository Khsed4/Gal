import {Link} from 'react-router-dom';
//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//Components
import ClientsSlider from './../components/ClientsSlider';
import FooterSingUp from './../components/FooterSingUp';

import price1 from './../assets/images/pricing/pic1.jpg';
import price2 from './../assets/images/pricing/pic2.jpg';
import price3 from './../assets/images/pricing/pic3.jpg';

const priceBlog = [
    {image: price1, title:'Power & Energy', price:'74'},
    {image: price2, title:'Petroleum Refinery', price:'84'},
    {image: price3, title:'Oil & Gas', price:'99'},
];

function Pricing(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Our Pricing'  parentPage='Home' childPage='Pages' />
                {/* <!-- Pricing Table --> */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">	
                             {priceBlog.map((data,index)=>(
                                <div className="col-lg-4 col-md-6 m-b30 " key={index}>
                                    <div className="pricingtable-wrapper style-1">
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-media">
                                                <img src={data.image} alt="" />
                                            </div>
                                            <div className="pricingtable-head">
                                                <div className="sub-title">TV + INTERNET</div>
                                                <h2 className="pricingtable-title">{data.title}</h2>						 
                                            </div>
                                            <ul className="pricingtable-features">
                                                <li>Support and Analysis</li>
                                                <li>Suggesting Ingredients</li>
                                                <li>Measuring Performance</li>
                                                <li>Technical Consultation</li>
                                            </ul>
                                            <div className="pricingtable-price"> 
                                                <h3 className="pricingtable-bx">
                                                    <small>$</small>{data.price}
                                                    <small className="ext">.99
                                                        <span className="pricingtable-type">/MO</span>
                                                    </small>
                                                </h3>
                                            </div>
                                            <div className="pricingtable-footer"> 
                                                <Link to={'./contact-us'} className="btn btn-primary btn-border">CONTACT US</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
export default Pricing;