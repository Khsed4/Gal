import React from 'react';
import {Link} from 'react-router-dom';

//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//Components
import FooterSingUp from './../components/FooterSingUp';
import BlogRightSidebarSlider from './../components/BlogRightSidebarSlider';
import SidebarSection from './../components/SidebarSection';
import BlogSideNavLink from './../components/BlogSideNavLink';

import large1  from './../assets/images/blog/large/pic1.jpg';
import large2  from './../assets/images/blog/large/pic2.jpg';
import large3  from './../assets/images/blog/large/pic3.jpg';



const blogGridData = [
    {image: large1, title:"Agency Doesn't Have To Be Hard. Read These 9 Tricks Go Get A Head Start." },
    {image: large2, title:"The Most Common Agency Debate Isn't As Simple As You May Think" },
    {image: large3, title:'Time Is Running Out! Think About These 10 Ways To Change Your Agency' },
];



function BlogRightSidebar(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Blog Large Right Sidebar' parentPage='Home' childPage='Blog' />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 m-b40">
                                {blogGridData.map((item,ind)=>(
                                    <div className="dz-card style-1 shadow m-b30" key={ind}>
                                        <div className="dz-media">
                                            <Link to={'./blog-details'}><img src={item.image} alt="" /></Link>
                                        </div>
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date">August 30, 2019</li>
                                                </ul>
                                            </div>
                                            <h3 className="dz-title"><Link to={"./blog-details"}>{item.title}</Link></h3>
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eget aliquet nibh. Integer tincidunt odio enim, quis tempor sapien tristique consequat. Maecenas consequat tempor ipsum, quis tempus orci mattis et. Praesent mollis scelerisque mattis.</p>
                                        </div>
                                    </div>
                                ))}  
                                
                                <BlogRightSidebarSlider /> 
                                <nav aria-label="Blog Pagination">
                                   <BlogSideNavLink />
                                </nav>
                            </div>    
                            <div className="col-xl-4 col-lg-4">
                                {/* Blog large Side bar  */}
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
export default BlogRightSidebar;