import React, { Component } from 'react';
import './contact.css';
import { Formik } from 'formik';

export default class Contact extends Component {
    render() {
        function showError(){
            document.querySelector('.error-message').classList.remove('hide');
        }
        function hideError(){
            document.querySelector('.error-message').classList.add('hide');
        }
        return (
            <div id='contact' className='bg-light'>
                <div className="container contact-view-1">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4>CONTACT US</h4>
                            <h3>GET IN TOUCH</h3>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-5">
                        <div className="col-lg-8">
                            <Formik initialValues={{ name:'', email: '', subject: '', phone:'' ,message :'' ,errorMessage:''}} validate={values => {
                                const errors = {};
                                if (!values.name) {
                                    errors.name = 'Name is required.';
                                } 
                                if (!values.email) {
                                    errors.email = 'Valid email is required.';
                                } 
                                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = 'Invalid email address.';
                                }
                                if (!values.subject) {
                                    errors.subject = 'Subject is required.';
                                } 
                                if (!values.phone) {
                                    errors.phone = 'Phone is required.';
                                } 
                                if (!values.message) {
                                    errors.message = 'Please,leave us a message.';
                                }
                                if(!values.message|| !values.message|| !values.message ||!values.message ||!values.message){
                                    errors.errorMessage='Please complete the form and try again.';
                                }
                                else{
                                    errors.errorMessage='Oops! Something went wrong and we couldn\'t send your message.';
                                }
                                return errors;
                            }}>
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleSubmit,
                                    handleBlur,
                                    isSubmitting,
                                }) => (
                                <form className='contact-form col-lg-8 w-100' onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="name" placeholder='Your Name' name="name" onChange={handleChange} onBlur={handleBlur} onClick={hideError} value={values.name} />
                                            <p>{errors.name && touched.name && errors.name}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <input className='col-md-6' type="text" placeholder='Your Email' name="email" onChange={handleChange} onBlur={handleBlur} onClick={hideError} value={values.email} />
                                            <p>{errors.email && touched.email && errors.email}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder='Subject' name="subject" onChange={handleChange} onBlur={handleBlur} onClick={hideError} value={values.subject} />
                                            <p>{errors.subject && touched.subject && errors.subject}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" placeholder='Phone' name="phone" onChange={handleChange} onBlur={handleBlur} onClick={hideError} value={values.phone} />
                                            <p>{errors.phone && touched.phone && errors.phone}</p>
                                        </div>
                                        <div className="col-12">
                                            <textarea type="text" placeholder='Your message' name="message" onChange={handleChange} onBlur={handleBlur} onClick={hideError} value={values.message} />
                                            <p>{errors.message && touched.message && errors.message}</p>
                                        </div>
                                        <div className="col-12">
                                            <p className='error-message hide'>{errors.errorMessage && touched.errorMessage && errors.errorMessage}</p>
                                        </div>
                                        <button className='col-3' type="submit" disabled={isSubmitting} onClick={showError}>SEND MESSAGE</button>
                                    </div>
                                </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
                <div className="container-fluid contact-view-2">
                    <div className="row">
                        <div className="col-lg-7 col-12 map-container">
                            <iframe className='map' id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1889.716882797263!2d29.94291447737484!3d31.207810802906433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5d821dee8fd%3A0x2155d145501e691f!2z2YPZhNmK2Kkg2KfZhNit2KfYs9io2KfYqiDZiNi52YTZiNmFINin2YTYqNmK2KfZhtin2Kog2KzYp9mF2LnZhyDYp9mE2KfYs9mD2YbYr9ix2YrYqQ!5e0!3m2!1sar!2seg!4v1633470309543!5m2!1sar!2seg" />
                        </div>
                        <div className="col-lg-5 col-0 map-bg"/>
                    </div>
                </div>
            </div>
        )
    }
}
