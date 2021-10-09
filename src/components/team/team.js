import React, { Component } from 'react';
import './team.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Team extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows:false,
            speed: 500,
            slidesToShow: 1,
            customPaging: () => (
            <div
                style={{
                    width: '20px',
                    height: '15px',
                    'border-radius': '50px',
                    'background-color': 'rgba(255,255,255,.5)',
                    marginTop:'25px'
                }}
            >
            </div>
            ), 
            slidesToScroll: 1
          };
        return (
            <div id='team'>
                <div className="container team-view-1 bg-light">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4>MEET THE TEAM</h4>
                            <h3>OUR EXPERT DESIGNERS</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12 member wow fadeInUp" data-wow-duration='1.5s' data-wow-delay='.4s'>
                            <div className="img-container">
                                <img src="assets/team-1.jpeg" alt="team-member-photo" />
                            </div>
                            <div className="text-container text-center">
                                <a className='member-name' href="#">Rob Hope</a>
                                <p>CEO & Founder</p>
                                <ul class="social mt-25 d-flex justify-content-center list-unstyled">
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-facebook-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-twitter-original" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-linkedin-original" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 member wow fadeInUp" data-wow-duration='1.5s' data-wow-delay='.8s'>
                            <div className="img-container">
                                <img src="assets/team-2.jpeg" alt="team-member-photo" />
                            </div>
                            <div className="text-container text-center">
                                <a className='member-name' href="#">Patric Green</a>
                                <p>Chief Designer</p>
                                <ul class="social mt-25 d-flex justify-content-center list-unstyled">
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-facebook-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-twitter-original" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-linkedin-original" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 member wow fadeInUp" data-wow-duration='1.5s' data-wow-delay='1.2s'>
                            <div className="img-container">
                                <img src="assets/team-3.jpeg" alt="team-member-photo" />
                            </div>
                            <div className="text-container text-center">
                                <a className='member-name' href="#">Daryl Dixon</a>
                                <p>Consultant</p>
                                <ul class="social mt-25 d-flex justify-content-center list-unstyled">
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-facebook-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-twitter-original" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-linkedin-original" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 member wow fadeInUp" data-wow-duration='1.5s' data-wow-delay='1.6s'>
                            <div className="img-container">
                                <img src="assets/team-4.jpeg" alt="team-member-photo" />
                            </div>
                            <div className="text-container text-center">
                                <a className='member-name' href="#">Mark Parker</a>
                                <p>Intern</p>
                                <ul class="social mt-25 d-flex justify-content-center list-unstyled">
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-facebook-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-twitter-original" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="lni lni-linkedin-original" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container team-view-2">
                    <img src="assets/shape.png" alt="" className="team-shape team-shape-1" />
                    <img src="assets/shape.png" alt="" className="team-shape team-shape-2" />
                    <img src="assets/shape.png" alt="" className="team-shape team-shape-3" />
                    <div className="team-bg">
                        <div className="row">
                            <div class="col-xl-4 offset-xl-7 col-lg-5 offset-lg-6 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                                <Slider {...settings}>
                                    <div className="team-slide text-center">
                                        <div className="team-img-container">
                                            <img src="assets/t-1.jpeg" alt="member image" />
                                            <i className='lni lni-quotation' />
                                        </div>
                                        <div className="team-text-container">
                                            <p>Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.</p>
                                            <h5>Fajar</h5>
                                            <span>Random Customer</span>
                                        </div>
                                    </div>
                                    <div className="team-slide text-center">
                                        <div className="team-img-container">
                                            <img src="assets/t-2.jpeg" alt="member image" />
                                            <i className='lni lni-quotation' />
                                        </div>
                                        <div className="team-text-container">
                                            <p>Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.</p>
                                            <h5>Alina</h5>
                                            <span>Tesla Motors</span>
                                        </div>
                                    </div>
                                    <div className="team-slide text-center">
                                        <div className="team-img-container">
                                            <img src="assets/t-3.jpeg" alt="member image" />
                                            <i className='lni lni-quotation' />
                                        </div>
                                        <div className="team-text-container">
                                            <p>Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus vel erat ces, commodo lectus eu, finibus diam. m ipsum dolor sit amet, ectetur.</p>
                                            <h5>Celina</h5>
                                            <span>CEO, Alo</span>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
