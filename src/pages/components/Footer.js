import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className='mt-5'>
                <div className='container-fluid'>
                    <div className='row container mx-auto px-0 py-5'>
                        <div className='col-md-6'>
                            <Link className='navbar-brand' to=""><img src="https://naxa.com.np/792f5bf2487bd27628a54fe64a712630.png" style={{ height: "3.8ch" }} alt="" /></Link>
                            <div>
                                <p className='fw-bold my-2'>Naxa Pvt. Ltd.</p>
                                <p className='my-4 text-secondary'>Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal</p>
                                <p className='my-4 text-secondary'>14416543</p>
                                <p className='my-4 text-secondary'>info@naxa.com.np</p>
                            </div>
                        </div>

                        <div className='d-flex col-md-6'>
                            <div className='' style={{ width: "50%" }}>
                                <p className='fw-bold'>Services</p>
                                <p className='fw-bold links'>Portfolio</p>
                            </div>

                            <div className='ms-auto' style={{ width: "50%" }}>
                                <p className='fw-bold'>Company</p>
                                <p className='fw-bold links'>About us</p>
                                <p className='fw-bold links'>Work with us</p>
                                <p className='fw-bold links'>Contact</p>
                            </div>
                        </div>

                        <div className='' style={{ width: "100%" }}>
                            <i style={{ color: "#ffab00" }} className='me-3 fs-4 fa-brands fa-facebook-f'></i>
                            <i style={{ color: "#ffab00" }} className='me-3 fs-4 fa-brands fa-linkedin-in'></i>
                            <i style={{ color: "#ffab00" }} className='me-3 fs-4 fa-brands fa-twitter'></i>
                            <i style={{ color: "#ffab00" }} className='me-3 fs-4 fa-brands fa-instagram'></i>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer