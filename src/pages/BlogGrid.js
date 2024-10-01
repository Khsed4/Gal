import React,{useState} from 'react';
import ModalVideo from 'react-modal-video'
import {Link} from 'react-router-dom';
//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';
//Components

import BlogGridSlider from '../components/BlogGridSlider';


//Images
import grid1 from './../assets/images/blog/blog-grid/pic1.jpg';
import grid4 from './../assets/images/blog/blog-grid/pic4.jpg';
import grid2 from './../assets/images/blog/blog-grid/pic2.jpg';
import grid5 from './../assets/images/blog/blog-grid/pic5.jpg';
import grid3 from './../assets/images/blog/blog-grid/pic3.jpg';
import grid6 from './../assets/images/blog/blog-grid/pic6.jpg';
import grid7  from './../assets/images/blog/blog-grid/pic7.jpg';

const VideoIcon = ()=>{
	const [isOpen, setOpen] = useState(false)
    return(
        <>
            <div className="video-btn sm">                
				<Link to={"#"} className="popup-youtube" onClick={()=> setOpen(true)} ><i className="fa fa-play" ></i></Link>
            </div>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="_FRZVScwggM" onClose={() => setOpen(false)} />
        </>
    )
}
const blogGridData =[
    {image: grid1, title:'Think Positive, Think Always Powering Your Business'},
    {image: grid4, title:'SuperEasy Ways To Learn Everything About Industry'},
    {image: grid2, title:'What You Can Learn From Bill Gates About Industry'},
    {image: grid5, title:'Does Industry Sometimes Make You Feel Stupid?'},
    {image: grid6, title:'Here A Quick Way To Solve A Problem with Industry', 
        playicon: <VideoIcon /> , chnageClass:"video-bx style-2 h-auto"
    },
    {image: grid7, title:'The Next 3 Things To Immediately Do About Industry'},
    {image: grid3, title:'Open The Gates For Industry By Using These Simple Tips'},
];

function BlogGrid(){
	//Video Modal
	//const [isOpen, setOpen] = useState(false)
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Blog Grid' parentPage='Home' childPage='Blog' />               
                <section className="content-inner">
                    <div className="container">
                        <div className="clearfix">
                            <ul id="masonry" className="row blog-masonry">
                                {blogGridData.map((item,ind)=>(
                                    <li className="card-container grid-item col-xl-4 col-md-6" key={ind}>
                                        <div className="dz-card style-1 shadow m-b30">
                                            <div className={`dz-media ${ item.chnageClass }`}>
                                                <Link to={'./blog-details'}><img src={item.image} alt="" /></Link>
                                                {item.playicon}
                                            </div>
                                            <div className="dz-info">
                                                <div className="dz-meta">
                                                    <ul>
                                                        <li className="post-date">August 30, 2019</li>
                                                    </ul>
                                                </div>
                                                <h4 className="dz-title"><Link to={"./blog-details"}>{item.title}</Link></h4>
                                                <p>Qui nunc nobis videntur parum clari, sollemnes in futurum  putamus parum claram legere.</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                <li className="card-container grid-item col-xl-4 col-md-6">
									<div className="dz-card style-1 shadow m-b30">
                                      <BlogGridSlider />  
									</div>  
                                </li>  
                                <li className="card-container grid-item col-xl-4 col-md-6">
                                    <div className="dz-card style-1 shadow m-b30">
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date">August 30, 2019</li>
                                                </ul>
                                            </div>
                                            <h4 className="dz-title"><Link to={'./blog-details'}>How To Make Your Industry Look Like A Million Bucks</Link></h4>
                                            <p>Qui nunc nobis videntur parum clari, sollemnes in futurum  putamus parum claram legere.</p>
                                        </div>
                                    </div>
                                </li> 
                            </ul>
                        </div>
                        <div className="row">		
                            <div className="col-xl-12 col-lg-12 text-center m-b30">
                                <Link to={'#'} className="btn btn-primary btn-border">LOAD MORE</Link>
                            </div>
                        </div>
                    </div>
                </section>    
            </div>
			
            <Footer />
        </>
    )
}
export default BlogGrid;