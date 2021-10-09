import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <div className="container">
                    <div className="row">
                        <div className="column-1 col-lg-3 col-md-4 col-sm-8 pt-5">
                            <a href="#"><img src="assets/logo.png" alt="logo" /></a>
                            <p className='mt-4'><i className='lni lni-phone' /> +1880 123 456 789</p>
                            <p><i className='lni lni-envelope' /> contact@yourmail.com</p>
                            <p><i className='lni lni-map' /> 1234 Avenue New York, US</p>
                            <ul className='footer-social list-unstyled'>
                                <li className='social-item'><a href="#"><i className="lni lni-facebook-filled" /></a></li>
                                <li className='social-item'><a href="#"><i className="lni lni-twitter-filled" /></a></li>
                                <li className='social-item'><a href="#"><i className="lni lni-google" /></a></li>
                                <li className='social-item'><a href="#"><i className="lni lni-instagram" /></a></li>
                            </ul>
                        </div>
                        <div className="footer-column col-lg-3 col-md-4 col-sm-6 pt-5">
                            <h4>Essential Links</h4>
                            <a href="#">About</a>
                            <a href="#">Projects</a>
                            <a href="#">Support</a>
                        </div>
                        <div className="footer-column col-lg-3 col-md-4 col-sm-6 pt-5">
                            <h4>Services</h4>
                            <a href="#">Product Design</a>
                            <a href="#">Research</a>
                            <a href="#">Office Management</a>
                        </div>
                        <div className="footer-column col-lg-3 col-md-5 col-sm-8 pt-5">
                            <h4>Newsletter</h4>
                            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
                            <form action="#">
                                <input type="email" placeholder="info@contact.com" />
                                <button><i class="lni lni-angle-double-right"></i></button>
                            </form>
                        </div>
                    </div>
                    <p className='copyright text-center'>Copyright 2022 by YourCompany.</p>
                </div>
            </div>
        )
    }
}
