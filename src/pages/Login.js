//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';


function Login(){
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Login' parentPage='Home' childPage='Shop' />
                <section className="content-inner-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="login-wrapper">
                                    <form className="login-form">
                                        <div className="form-group">
                                            <label>Username or email address <span className="text-danger">*</span></label>
                                            <input type="text" name="username" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password <span className="text-danger">*</span></label>
                                            <input type="password" name="username" className="form-control" />
                                        </div>
                                        <div className="form-check m-b15">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
                                            <label className="form-check-label" htmlFor="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                        </div>
                                        <button className="btn btn-primary" type="submit">Submit form</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
export default Login;