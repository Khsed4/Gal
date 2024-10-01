import React,{useState} from 'react';
import {Link} from 'react-router-dom';

//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//Images
import pic1  from './../assets/images/product/small/pic1.jpg';
import pic2  from './../assets/images/product/small/pic2.jpg';
import pic3  from './../assets/images/product/small/pic3.jpg';
import pic4  from './../assets/images/product/small/pic4.jpg';
import pic5  from './../assets/images/product/small/pic5.jpg';


const productDetial = [
    {id: 1, image:pic1, name:'Cotton Polo Shirt', price:'700', status:'Available', statusClass:'text-success' },
    {id: 2,image:pic2, name:'Merlon Jeans', price:'500', status:'UnAvailable', statusClass:'text-danger' },
    {id: 3, image:pic3, name:'Cashmere Sweater', price:'280', status:'Available', statusClass:'text-success' },
    {id: 4, image:pic4, name:'Plain Multicolored', price:'299', status:'Available', statusClass:'text-success' },
    {id: 5, image:pic5, name:'Tennis Shorts', price:'384', status:'UnAvailable', statusClass:'text-danger' },
];

function ShopWishlist(){

    const [shopData, setShopData] = useState(productDetial);
    const handleDeleteClick = (shopId) => {
        const newItem = [...shopData];    
        const index = shopData.findIndex((data)=> data.id === shopId);
        newItem.splice(index, 1);
        setShopData(newItem);
    }
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Wishlist' parentPage='Home' childPage='Shop' />
                {/* <!-- Projects --> */}
                <section className="content-inner-1">
                    <div className="container">
                        <div className="table-responsive">
                            <table className="table wishlist">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product Name</th>
                                        <th>Unit price</th>
                                        <th>Stock status</th>
                                        <th className="text-center">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shopData.map((data, index)=>(
                                        <tr key={index}>
                                            <td><img src={data.image} alt="" /></td>
                                            <td>{data.name}</td>
                                            <td>${data.price}</td>
                                            <td><span className={data.statusClass}>{data.status}</span></td>
                                            <td className="text-center">
                                                <Link to={"#"} onClick={()=>handleDeleteClick(data.id)}>
                                                    <i className="fas fa-times"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>        
                
            </div>
            <Footer />
        </>
    )
}
export default ShopWishlist;