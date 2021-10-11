import React, { Component } from 'react';
import './navbar.css';

export default class Navbar extends Component {
    componentDidMount(){
        document.querySelector('#home-link').classList.add('red');
        const header=document.querySelector('#header');
        const about=document.querySelector('#about');
        const services=document.querySelector('#services');
        const projects=document.querySelector('#projects');
        const team=document.querySelector('#team');
        const contact=document.querySelector('#contact');
        console.log(team.offsetTop-10);

        window.onscroll=()=>{
            if (window.scrollY>10){
                document.querySelector('.navigation-bar').classList.add('light-nav');
            }
            else{
                document.querySelector('.navigation-bar').classList.remove('light-nav');
            }

            if (window.scrollY>=header.offsetTop && window.scrollY<about.offsetTop){
                document.querySelector('#home-link').classList.add('red');
                document.querySelector('#about-link').classList.remove('red');
                document.querySelector('#services-link').classList.remove('red');
                document.querySelector('#projects-link').classList.remove('red');
                document.querySelector('#team-link').classList.remove('red');
                document.querySelector('#contact-link').classList.remove('red');
            }
            else if(window.scrollY>=about.offsetTop && window.scrollY<services.offsetTop){
                document.querySelector('#home-link').classList.remove('red');
                document.querySelector('#about-link').classList.add('red');
                document.querySelector('#services-link').classList.remove('red');
                document.querySelector('#projects-link').classList.remove('red');
                document.querySelector('#team-link').classList.remove('red');
                document.querySelector('#contact-link').classList.remove('red');
            }
            else if(window.scrollY>=services.offsetTop && window.scrollY<projects.offsetTop){
                document.querySelector('#home-link').classList.remove('red');
                document.querySelector('#about-link').classList.remove('red');
                document.querySelector('#services-link').classList.add('red');
                document.querySelector('#projects-link').classList.remove('red');
                document.querySelector('#team-link').classList.remove('red');
                document.querySelector('#contact-link').classList.remove('red');
            }
            else if(window.scrollY>=projects.offsetTop && window.scrollY<team.offsetTop-1){
                document.querySelector('#home-link').classList.remove('red');
                document.querySelector('#about-link').classList.remove('red');
                document.querySelector('#services-link').classList.remove('red');
                document.querySelector('#projects-link').classList.add('red');
                document.querySelector('#team-link').classList.remove('red');
                document.querySelector('#contact-link').classList.remove('red');
            }
            else if(window.scrollY>=team.offsetTop-1 && window.scrollY<contact.offsetTop-1){
                document.querySelector('#home-link').classList.remove('red');
                document.querySelector('#about-link').classList.remove('red');
                document.querySelector('#services-link').classList.remove('red');
                document.querySelector('#projects-link').classList.remove('red');
                document.querySelector('#team-link').classList.add('red');
                document.querySelector('#contact-link').classList.remove('red');
            }
            else{
                document.querySelector('#home-link').classList.remove('red');
                document.querySelector('#about-link').classList.remove('red');
                document.querySelector('#services-link').classList.remove('red');
                document.querySelector('#projects-link').classList.remove('red');
                document.querySelector('#team-link').classList.remove('red');
                document.querySelector('#contact-link').classList.add('red');
            }

            if(window.scrollY<100){
                document.querySelector('.top-arrow').classList.add('hide');
            }
            else{
                document.querySelector('.top-arrow').classList.remove('hide');
            }
        }
    }

    render() {
        return (
            <div className='navigation-bar'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a href="#"className="navbar-brand">
                                    <img src="assets/logo.png" alt="logo" />
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a id='home-link' className="nav-link active" aria-current="page" href="#header">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a id='about-link' className="nav-link" href="#about">About</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a id='services-link' className="nav-link" href="#services">Services</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a id='projects-link' className="nav-link" href="#projects">Projects </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a id='team-link' className="nav-link" href="#team">Team</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a id='contact-link' className="nav-link" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="navbar-btn ml-20 d-none d-sm-block">
                                    <a className="main-btn" href="#">
                                        <i className="lni lni-phone-set"/>&nbsp;&nbsp; +98 222 4444
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
