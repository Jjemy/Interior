import React, { Component } from 'react';
import './about.css';

export default class About extends Component {
    render() {
        return (
            <div id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 banner">
                            <div className="img-container">
                                <img src="assets/about-1.png" className='about-img' alt="about-img" />
                                <img src="assets/about-2.png" className='about-img img-2' alt="about-img" />
                            </div>
                            <button className='about-btn' data-aos='fade-right' data-aos-duration='1500' data-aos-once='true'><span>27</span>YEARS EXPERIENCE</button>
                        </div>
                        <div className="col-lg-6 about-text">
                            <h4>ABOUT US</h4>
                            <h3>REASONS TO CHOOSE</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                            <br/><br/>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <a className="about-btn" href="#">LEARN MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
