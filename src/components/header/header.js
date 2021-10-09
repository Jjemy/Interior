import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div id='header' className='header d-flex align-items-center'>
                <div className="shape shape-1">
                    <img src="assets/shape-1.png" alt="shape" />
                </div>
                <div className="shape shape-2">
                    <img src="assets/shape-2.png" alt="shape" />
                </div>
                <div className="shape shape-3">
                    <img src="assets/shape-3.png" alt="shape" />
                </div>
                <div className="shape shape-4">
                    <img src="assets/shape-4.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 col-sm-10 text">
                            <div className="text">
                                <h4 class="wow fadeInUp" data-wow-duration='1.5s' data-wow-delay='1s'>YOUR TRUSTED</h4>
                                <h1 class='wow fadeInUp' data-wow-duration='1.5s' data-wow-delay='2s'><span>Interior</span> Design Partner for Home or Office</h1>
                                <a class='wow fadeInUp' href="#contact" data-wow-duration='1.5s' data-wow-delay='2.3s'>GET A FREE QUOTE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-image bg_cover"/>
            </div>
        )
    }
}
