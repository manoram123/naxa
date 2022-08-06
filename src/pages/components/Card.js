import React from 'react';
import '../style.css'

const Card = (props) => {

  return (
    <div className='col-md-6 px-4 mb-5'>
      <div className={`text-light serv-card my-4 elem ${props.data.elevated ? "elevated" : ""}`}>
        <div className="p-5 shadow-sm" style={{ background: props.data.color }}>
          <h4 className='fw-bold mt-3'>{props.data.data.title}</h4>
          <p className='m-0 fw-bold'>{props.data.data.subtitle}</p>
          <div className='my-4 d-flex'>
            <div className='w-50'>
              <p className='m-0 fw-bold' style={{color: "#ffdc1c"}}>Client</p>
              <p className='m-0 fw-bold'>{props.data.data.clients}</p>
            </div>
            <div className='w-50'>
              <p className='m-0 fw-bold ms-auto' style={{color: "#ffdc1c"}}>Time Duration</p>
              <p className='m-0 fw-bold'>{props.data.data.start_date} - {props.data.data.end_date}</p>
            </div>
          </div>
        </div>
        <div className='' style={{ height: "45ch", position: "relative", background: props.data.color }}>
          <img className='img img-fluid' style={{ width: "100%", position: "absolute", bottom: "0" }} src={`${props.data.data.photo}`} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Card