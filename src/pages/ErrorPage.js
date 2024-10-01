import {Link} from 'react-router-dom';

import bnr1 from './../assets/images/bnr/bnr1.jpg';

export default function ErrorPage(){
    return(
        <>
            <div className="error-page overlay-black-light" style={{backgroundImage: 'url('+ bnr1 +')'}}>
                <div className="error-inner text-center">
                    <div className="dz_error" data-text="404">404</div>
                    <h2 className="error-head">We are sorry. But the page you are looking for cannot be found.</h2>
                    <Link to={"./"} className="btn btn-primary btn-border white-border">BACK TO HOMEPAGE</Link>
                </div>
            </div>
        </>
    )
}