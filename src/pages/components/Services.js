import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../actions/actions';
import Card from '../components/Card';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Services = () => {

  const [loading, setLoading] = useState(true)
  const data = useSelector(state => state.data)
  console.log(data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  useEffect(() => {
    data.data !== undefined ? setLoading(false) : setLoading(true)
  }, [data.data])

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div>
      {
        loading ?
          <>
            <div className='d-flex align-items-center justify-content-center py-5'>
              <div class="spinner-border text-warning" role="status" style={{height: "5ch", width :"5ch", fontSize: "2rem"}}>
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </> :
          <>
            <div className='' style={{ marginTop: '20ch' }}>
              {/* {
                data.data.splice(90, 10).map((val, ind) => {
                  return (
                    <Card key={ind} data={val}></Card>
                  )
                })
              } */}
              <div className='d-flex flex-wrap container mb-5' data-aos="fade-up">
                <Card data={{ data: data.data[90], color: "#166df7", elevated: false }}></Card>
                <Card data={{ data: data.data[91], color: "#a954b8", elevated: true }}></Card>
              </div>
              <div className='d-flex flex-wrap container mb-5' data-aos="fade-up">
                <Card data={{ data: data.data[92], color: "#bdbdbd", elevated: false }}></Card>
                <Card data={{ data: data.data[93], color: "#d44a86", elevated: true }}></Card>
              </div>
              <div className='d-flex flex-wrap container mb-5' data-aos="fade-up">
                <Card data={{ data: data.data[94], color: "#a29dc9", elevated: false }}></Card>
                <Card data={{ data: data.data[95], color: "#ad0e28", elevated: true }}></Card>
              </div>
              <div className='d-flex flex-wrap container mb-5' data-aos="fade-up">
                <Card data={{ data: data.data[96], color: "#40db83", elevated: false }}></Card>
                <Card data={{ data: data.data[97], color: "#ff9c9c", elevated: true }}></Card>
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default Services