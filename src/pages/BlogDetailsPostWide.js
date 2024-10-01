//import {Link} from 'react-router-dom';

//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//components
import BlogDetailsWideSection from './../components/BlogDetailsWideSection';
import FooterSingUp from './../components/FooterSingUp';



export default function BlogDetailsPostWide(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Blog Details Wide' parentPage='Home' childPage='Blog' />
                <section className="content-inner">
                    <div className="min-container">
                        <div className="row">
                            <div className="col-xl-12 m-b40">
                                <BlogDetailsWideSection />
                            </div>
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