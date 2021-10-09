import React, { Component } from 'react';
import './services.css';

export default class Services extends Component {
    render() {
        return (
            <div id='services' className='bg-light'>
                <div className="container">
                    <div className="row sevices-title">
                        <div className="col-12 d-flex flex-column align-items-center">
                            <h5>OUR SERVICES</h5>
                            <h3>WHAT WE DO?</h3>
                        </div>
                    </div>
                    <div className="row services-container">
                        <div className="service col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-duration='1.5s' data-wow-delay='.4s'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center text-center">
                                        <i className='lni lni-paint-roller pb-3'/>
                                        <h4>Interior Design</h4>
                                        <p>Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-duration='1.5s' data-wow-delay='.8s'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center text-center">
                                        <i className='lni lni-blackboard pb-3'/>
                                        <h4>Design Consultancy</h4>
                                        <p>Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-duration='1.5s' data-wow-delay='1.2s'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center text-center">
                                        <i className='lni lni-home pb-3'/>
                                        <h4>Residential Design</h4>
                                        <p>Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-duration='1.5s' data-wow-delay='.4s'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center text-center">
                                        <i className='lni lni-briefcase pb-3'/>
                                        <h4>Commercial Design</h4>
                                        <p>Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-duration='1.5s' data-wow-delay='.8s'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center text-center">
                                        <i className='lni lni-handshake pb-3'/>
                                        <h4>Hospitality Design</h4>
                                        <p>Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-duration='1.5s' data-wow-delay='1.2s'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center text-center">
                                        <i className='lni lni-grow pb-3'/>
                                        <h4>Co-working Space Design</h4>
                                        <p>Mauris aliquam, turpis sed mattis placerat, justo risus pellentesque quam, id finibus risus arcu eget neque.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
