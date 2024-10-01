import {Link} from 'react-router-dom';

//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//images 
import product1 from './../assets/images/product/item1.jpg';
import product2 from './../assets/images/product/item2.jpg';
import product3 from './../assets/images/product/item3.jpg';
import product4 from './../assets/images/product/item4.jpg';
import product5 from './../assets/images/product/item5.jpg';
import product6 from './../assets/images/product/item6.jpg';
import product7 from './../assets/images/product/item7.jpg';
import product8 from './../assets/images/product/item8.jpg';
import product9 from './../assets/images/product/item9.jpg';

const shopProduct = [
    { image:product1, title:'Denim Jeans', price:<h4 className="item-price">$400</h4>,   badge:'Sale', badgeClass:'bg-success'  },
    { image:product2, title:'Outlaw Jacket', 
        price:<h4 className="item-price"><del>$232</del> <span className="text-primary">$192</span></h4>,    
    },
    { image:product3, title:'Tennis Shorts', price:<h4 className="item-price">$384</h4>,  badge:'Sale', badgeClass:'bg-danger'  },
    { image:product4, title:'Plain Multicolored', 
        price:<h4 className="item-price"><del>$500</del> <span className="text-primary">$299</span></h4>,    
    },
    { image:product5, title:'Cashmere Sweater', price:<h4 className="item-price">$280</h4>,  badge:'Hot', badgeClass:'bg-danger'  },
    { image:product6, title:'Cotton Jacket', price:<h4 className="item-price">$198</h4>,  badge:'Trending', badgeClass:'bg-info'  },

    { image:product7, title:'Merlon Jeans', badge:'New', badgeClass:'bg-danger',
        price:<h4 className="item-price"><del>$850</del> <span className="text-primary">$500</span></h4>,    
    },
    { image:product8, title:'Cotton Polo Shirt', price:<h4 className="item-price">$700</h4>, },

    { image:product9, title:'Short Sleeved Hoodie', badge:'New', badgeClass:'bg-danger',
        price:<h4 className="item-price"><del>$400</del> <span className="text-primary">$200</span></h4>,    
    },
];

export default function ShopGrid3(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Shop Grid 3' parentPage='Home' childPage='Shop' />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            {shopProduct.map((item,ind)=>(
                                <div className="col-lg-4 col-sm-6" key={ind}>	
                                    <div className="item-box m-b30">
                                        <div className="item-img">
                                            <img src={item.image} alt="" />
                                            <span className={`badge ${ item.badgeClass}`}>{item.badge}</span>
                                            <div className="item-info-in">
                                                <ul>
                                                    <li><Link to={"#"}><span className="material-icons">shopping_cart</span></Link></li>
                                                    <li><Link to={"#"}><span className="material-icons">visibility</span></Link></li>
                                                    <li><Link to={"#"}><span className="material-icons">favorite_border</span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="item-info text-center">
                                            <h4 className="item-title"><Link to={"./product-details"}>{item.title}</Link></h4>
                                            <ul className="item-review">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fas fa-star-half-alt"></i></li>
                                                <li><i className="far fa-star"></i></li>
                                            </ul>
                                            {item.price}
                                        </div>
                                    </div>
                                </div>  
                            ))}    
                        </div>   
                    </div>   
                </section>    
            </div>
            <Footer />
        </>
    )
}        