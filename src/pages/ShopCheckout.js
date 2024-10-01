//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';


const orderData = [
    {title:'Order Subtotal', price:'$125.96'},
    {title:'Shipping', price:'Free Shipping'},
    {title:'Coupon',  price:'$28'},
];


const  InputSection =({title})=>{
    return(
        <>
            <div className="col-sm-12">
                <div className="form-group m-b30">
                    <label className="mb-2">{title} <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" />
                </div>
            </div>
        </>
    )
}

function ShopCheckout(){    
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Checkout' parentPage='Home' childPage='Shop' />
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="m-b30">Billing details</h2>
                                <form className="dz-form dzForm">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group m-b30">
                                                <label className="mb-2">First Name<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group m-b30">
                                                <label className="mb-2">Last Name<span className="text-danger">*</span></label>
                                                <input type="text" className="form-control"  />
                                            </div>
                                        </div>                                        
                                        <InputSection title='Company name (optional)' />
                                        <div className="col-sm-12">
                                            <div className="form-group m-b30">
                                                <label className="mb-2">Country <span className="text-danger">*</span></label>
                                                <select className="form-control default-select">
                                                    <option>India</option>
                                                    <option>Indonesia</option>
                                                    <option>Iraq</option>
                                                    <option>Iran</option>
                                                    <option>Italy</option>
                                                    <option>Japan</option>
                                                    <option>Kenya</option>
                                                    <option>Laos</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group m-b30">
                                                <label className="mb-2">Street address <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" placeholder="House number and street name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group m-b30">
                                                <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                                            </div>
                                        </div>
                                        <InputSection title='Town / City' />
                                        <div className="col-sm-12">
                                            <div className="form-group m-b30">
                                                <label className="mb-2">State / County  <span className="text-danger">*</span></label>
                                                <select className="form-control default-select">
                                                    <option>India</option>
                                                    <option>Indonesia</option>
                                                    <option>Iraq</option>
                                                    <option>Iran</option>
                                                    <option>Italy</option>
                                                    <option>Japan</option>
                                                    <option>Kenya</option>
                                                    <option>Laos</option>
                                                </select>
                                            </div>
                                        </div>                                        
                                        <InputSection title='Postcode / ZIP' />
                                        <InputSection title='Phone' />
                                        <InputSection title='Email address' />
                                        
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <form className="shop-form">
                                    <div className="order-total-card">
                                        <h4 className="m-b30">Order Total</h4>
                                        <table className="table table-bordered check-tbl">
                                            <tbody>
                                                {orderData.map((item, index)=>(
                                                    <tr key={index}>
                                                        <td>{item.title}</td>
                                                        <td className="product-price">{item.price}</td>
                                                        
                                                    </tr>
                                                ))}
                                                
                                                <tr>
                                                    <td><strong className="text-black">Total</strong></td>
                                                    <td className="product-price-total"><strong className="text-black">$506.00</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <div className="payment-card">
                                        <h4 className="m-b30">Payment Method</h4>
                                        <div className="m-b30">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Direct bank transfer
                                                    <span>
                                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    Check payments
                                                    <span>
                                                        Please send a check to store name, store street, store town, store state / county, store postcode.
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                    Cash on delivery
                                                    <span>
                                                        Pay with cash upon delivery.
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"  defaultChecked/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                    PayPal
                                                    <span>
                                                        You can pay with your credit card if you don’t have a PayPal account.
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary d-block w-100">Place Order</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </section>    
                
            </div>
            <Footer />
        </>
    )
}
export default ShopCheckout;