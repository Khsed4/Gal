import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//components
import BlogDetailsWideSection from './../components/BlogDetailsWideSection';
import SidebarSection from './../components/SidebarSection';
import FooterSingUp from './../components/FooterSingUp';

export default function BlogDetails(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Blog Details' parentPage='Home' childPage='Blog' />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b40">
                                <BlogDetailsWideSection />
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <SidebarSection />
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