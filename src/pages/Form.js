import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Form = () => {

    const [image, setImage] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [contact, setContact] = useState()
    const [file, setFile] = useState()

    return (
        <div>
            <Header />
            <div className='bg-light py-5'>
                <div className='form-div col-md-6 mx-auto px-5 py-5'>
                    <h4 className='fw-bold'>Work With Us!</h4>
                    <p className='my-4'>We are hiring new talents to join our team.</p>
                    <form action="">
                        <div className='row my-3'>
                            <div className='form-group col-md-6'>
                                <input id="fname" className='inp border py-3 px-4' type="text" placeholder='First Name' />
                            </div>
                            <div className='form-group col-md-6'>
                                <input id='lname' className='inp border py-3 px-4' type="text" placeholder='Last Name' />
                            </div>
                        </div>

                        <div className='form-group my-3'>
                            <input id='email' className='inp border py-3 px-4' type="text" placeholder='Email' />
                        </div>
                        <div className='form-group my-3'>
                            <input id='address' className='inp border py-3 px-4' type="text" placeholder='Address' />
                        </div>
                        <div className='form-group my-3'>
                            <input id='contact' className='inp border py-3 px-4' type="text" placeholder='Contact' />
                        </div>

                        <div className='my-3 row'>
                            <div className='col-md-6'>
                                <div>
                                    <input type="file" hidden />
                                    <div className='border rounded p-4 d-flex align-items-center justify-content-center'>
                                        <div>
                                            <span className='d-block text-center'><i class="fa-solid fa-image text-secondary" style={{ fontSize: "3rem" }}></i></span>
                                            <p className='d-block'>Upload Photo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>

                        <div className='action-btn py-1 my-5'>
                            <button type="button" className='btn d-block mx-auto action-text fw-bold'><span style={{ color: "#05f" }}>Apply Now</span><i className='fa-solid fa-arrow-right'></i></button>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Form