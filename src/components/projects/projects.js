import React, { Component } from 'react';
import './projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Projects extends Component {
    componentDidMount(){
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                    breakpoint: 576,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
              ],
            customPaging: () => (
            <div
                style={{
                    width: '25px',
                    height: '15px',
                    'border-radius': '50px',
                    'background-color': 'rgba(235,54,86,.7)',
                    'marginTop':'40px'
                }}
            >
            </div>
            ), 
            slidesToScroll: 3
          };
        return (
            <div id='projects'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h5>FEATURED WORKS</h5>
                            <h3>PROJECTS YOU MAY LOVE</h3>
                        </div>
                    </div>
                </div>
                <div className="container-fluid slider-container">
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings}>
                                <div className='slide container'>
                                    <div className="slide-img">
                                        <img src="assets/p-1.jpeg" alt="" />
                                    </div>
                                    <div className="slide-text">
                                        <a>
                                            Home Interior Design
                                        </a>
                                    </div>
                                </div>
                                <div className='slide container'>
                                    <div className="slide-img">
                                        <img src="assets/p-2.jpeg" alt="" />
                                    </div>
                                    <div className="slide-text">
                                        <a>
                                            Home Interior Design
                                        </a>
                                    </div>
                                </div>
                                <div className='slide container'>
                                    <div className="slide-img">
                                        <img src="assets/p-3.jpeg" alt="" />
                                    </div>
                                    <div className="slide-text">
                                        <a>
                                            Home Interior Design
                                        </a>
                                    </div>
                                </div>
                                <div className='slide container'>
                                    <div className="slide-img">
                                        <img src="assets/p-4.jpeg" alt="" />
                                    </div>
                                    <div className="slide-text">
                                        <a>
                                            Home Interior Design
                                        </a>
                                    </div>
                                </div>
                                <div className='slide container'>
                                    <div className="slide-img">
                                        <img src="assets/p-5.jpeg" alt="" />
                                    </div>
                                    <div className="slide-text">
                                        <a>
                                            Home Interior Design
                                        </a>
                                    </div>
                                </div>
                                <div className='slide container'>
                                    <div className="slide-img">
                                        <img src="assets/p-2.jpeg" alt="" />
                                    </div>
                                    <div className="slide-text">
                                        <a>
                                            Home Interior Design
                                        </a>
                                    </div>
                                </div>
                                <div className='slide container'>
                                    <div className="slide-img">
                                        <img src="assets/p-4.jpeg" alt="" />
                                    </div>
                                    <div className="slide-text">
                                        <a>
                                            Home Interior Design
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
