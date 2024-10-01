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



const cartDetial = [
    {id: 1, image:pic1, name:'Cotton Polo Shirt', price:'700',  price2:'1058', number: 0 },
    {id: 2, image:pic2, name:'Merlon Jeans', price:'500',  price2:'1200' , number: 0},
    {id: 3, image:pic3, name:'Cashmere Sweater', price:'280', price2:'1400', number: 0},
];

function ShopCart(){
    const [shopData, setShopData] = useState(cartDetial);
    const handleDeleteClick = (shopId) => {
        const newItem = [...shopData];    
        const index = shopData.findIndex((data)=> data.id === shopId);
        newItem.splice(index, 1);
        setShopData(newItem);
    }
	
	const handleNumPlus = (e) =>{
		let temp = shopData.map((data) => {
            if (e === data.id) {
                return { ...data, number: data.number + 1 };
            }
            return data;
        });
        setShopData(temp);
	}
	const handleNumMinus = (e) =>{

		let temp = shopData.map((data) => {
            if (e === data.id) {
                return { ...data, number: data.number > 0 ? data.number - 1 : data.number };
            }
            return data;
        });
        setShopData(temp);
	}
	
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Cart' parentPage='Home' childPage='Shop' />
                {/* <!-- Projects --> */}
                <section className="content-inner-1">
                    <div className="container">
                        <div className="table-responsive">
                            <table className="table cart">
                                <thead>
                                    <tr>
                                    <th>Product</th>
									<th></th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Total</th>
									<th className="text-center">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shopData.map((data, index)=>(
                                        <tr key={index}>
                                            <td><img src={data.image} alt="" /></td>
                                            <td>{data.name}</td>
                                            <td>${data.price}</td>
                                            <td>
                                                <div className="quantity btn-quantity style-1">													
													<button className="btn btn-plus" type="button" onClick={()=> {handleNumPlus(data.id)}}><i className="ti-plus"></i></button>
														<input  type="text"  className="quantity-input" value={data.number}  />
													<button className="btn btn-minus " type="button" onClick={()=>{handleNumMinus(data.id)}}><i className="ti-minus"></i></button>
                                                </div>
                                            </td>
                                            <td><strong>${data.price2}</strong></td>
                                            <td className="text-center">
                                                <Link to={"#"} onClick={()=>handleDeleteClick(data.id)}>
                                                    <i className="fas fa-times"></i>
                                                </Link>
                                            </td>   
                                        </tr>
                                    ))}    
                                    <tr>
                                        <td colSpan="6">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-5 col-6 mb-md-0 mb-3">
                                                    <div className="cart-coupon-wrapper">
                                                        <i className="fas fa-cut cutter"></i>
                                                        <input type="text" name="coupon_code" className="form-control" defaultValue="" placeholder="Coupon code" />
                                                        <button type="submit" className="btn">
                                                            <i className="fas fa-chevron-right"></i>
                                                        </button>
                                                    </div>											
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-7 text-md-end text-start">
                                                    <Link to={"#"} className="btn btn-sm btn-outline-secondary m-r10 mb-md-0 mb-2">Continue Shoping</Link>
                                                    <button className="btn btn-sm btn-secondary" type="submit">Update Cart</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
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
export default ShopCart;