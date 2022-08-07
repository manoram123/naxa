import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import validator from 'validator';
import { toast } from 'react-toastify';

const Form = () => {

    const [image, setImage] = useState()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")

    const validate = () => {
        if (validator.isEmpty(firstName) || validator.isEmpty(lastName)) {
            return { fieldId: "name", message: "Please enter your name." }
        }
        if (!validator.isEmail(email)) {
            return { fieldId: "email", message: "Please enter a valid email." }
        }
        if (validator.isEmpty(address)) {
            return { fieldId: "address", message: "Please enter your address." }
        }
        if (validator.isEmpty(contact)) {
            return { fieldId: "address", message: "Please enter your contact number." }
        }
    }

    const handleImg = (image) => {
        image.url = URL.createObjectURL(image)
        setImage(image)
    }

    const handleSubmit = () => {
        const valid = validate()
        if (valid) {
            console.log(valid.fieldId)
            toast.error(valid.message, { position: toast.POSITION.TOP_RIGHT })
        }
    }

    return (
        <div>
            <Header />
            <div className='bg-light py-5'>
                <div className='form-div col-md-6 mx-auto px-3 px-md-5 py-5'>
                    <h4 className='fw-bold'>Work With Us!</h4>
                    <p className='my-4'>We are hiring new talents to join our team.</p>
                    <form action="">
                        <div className='row my-3'>
                            <div className='form-group col-md-6'>
                                <input onChange={(e) => setFirstName(e.target.value)} id="fname" className='inp border py-3 px-4' type="text" placeholder='First Name' />
                            </div>
                            <div className='form-group col-md-6 mt-3 mt-md-0'>
                                <input onChange={(e) => setLastName(e.target.value)} id='lname' className='inp border py-3 px-4' type="text" placeholder='Last Name' />
                            </div>
                        </div>

                        <div className='form-group my-3' id='email'>
                            <input onChange={(e) => setEmail(e.target.value)} className='inp border py-3 px-4' type="text" placeholder='Email' />
                        </div>
                        <div className='form-group my-3'>
                            <input onChange={(e) => setAddress(e.target.value)} id='address' className='inp border py-3 px-4' type="text" placeholder='Address' />
                        </div>
                        <div className='form-group my-3'>
                            <input onChange={(e) => setContact(e.target.value)} id='contact' className='inp border py-3 px-4' type="text" placeholder='Contact' />
                        </div>

                        <div className='my-3 row'>
                            <div className='col-md-6'>
                                <div>
                                    <div className='border rounded p-4 d-flex align-items-center justify-content-center'>
                                        <input accept='image/*' id='img' onChange={(e) => { handleImg(e.target.files[0]) }} type="file" hidden />

                                        {
                                            image ?
                                                <>
                                                    <button onClick={() => { document.getElementById('img').click() }} type='button' className='btn'>
                                                        <img className='img img-fluid rounded' style={{ height: "8ch", width: "8ch", objectFit: "cover" }} src={image?.url} alt="" />
                                                        <small className='text-primary text-decoration-underline d-block'>Select new...</small>
                                                    </button>
                                                </> :
                                                <>
                                                    <button onClick={() => { document.getElementById('img').click() }} type='button' className='btn'>
                                                        <span className='d-block text-center'><i className="fa-solid fa-image text-secondary" style={{ fontSize: "3rem" }}></i></span>
                                                        <small className='d-block'>Upload Photo</small>
                                                    </button>
                                                </>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div>
                                    <label htmlFor="cv">Upload CV</label>
                                    <input id="cv" type="file" />
                                </div>
                            </div>
                        </div>

                        <div className='action-btn py-1 my-5'>
                            <button onClick={handleSubmit} type="button" className='btn d-block mx-auto action-text fw-bold'><span style={{ color: "#05f" }}>Apply Now</span><i className='fa-solid fa-arrow-right'></i></button>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Form