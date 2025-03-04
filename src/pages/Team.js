//Layouts
import Header from './../layouts/CommanHeader';
import Footer from './../layouts/Footer2';
import PageTitle from './../layouts/PageTitle';

//Components
import FooterSingUp from './../components/FooterSingUp';

//Images
import team1 from './../assets/images/team/pic1.jpg';
import team2 from './../assets/images/team/pic2.jpg';
import team3 from './../assets/images/team/pic3.jpg';
import team4 from './../assets/images/team/pic4.jpg';
import team5 from './../assets/images/team/pic5.jpg';
import team6 from './../assets/images/team/pic6.jpg';
import React, { useEffect, useState } from "react";
import { getData } from "../services/apiService"; // Import API service

const teamdataBlog = [
    {image: team1, title:'Liam Nemit'},
    {image: team2, title:'Daniel Orson'},
    {image: team3, title:'Cristina Van'},
    {image: team4, title:'Colin Jameson'},
    {image: team5, title:'Peter Farel'},
    {image: team6, title:'Gina Cooper'},
];

function Team(){
    const [team, SetTeam] = useState([]);
      useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData("/team/");
        SetTeam(data);
      
        console.log(data,'data')
      } catch (error) {
        console.error("Failed to fetch Team Memebers:", error);
      }
    };

    fetchProducts();
  }, []);
    return(
        <>
            <Header />
            <div className="page-content bg-white">
                <PageTitle  title='Our Team'  parentPage='Home' childPage='Pages' />
                     
                <section className="content-inner">
                    <div className="container">
                        <div className="row">
                            {team.map((item,i)=>(

                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="dz-team style-1 text-center m-b30">
                                        <div className="dz-media">
                                            <img src={`http://142.93.4.113/${item.image}`}  alt=" " />
                                            <ul className="team-social">
                                                <li><a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="https://in.pinterest.com/" className="pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="dz-content">
                                            <h4 className="dz-name">{item.name}</h4>
                                            <h6 className="dz-position text-primary">{item.occupation}</h6>
                                        </div>
                                    </div>
                                </div>         
                            ))}

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
export default Team;