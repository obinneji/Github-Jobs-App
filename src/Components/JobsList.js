import React, { useState } from 'react';
import "../Styles/joblists.css"
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { RotatingLines } from 'react-loader-spinner';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const JobsList = ({ data, loading }) => {
  
  const listItems = data.map((data) => {
    return (
      <li key={data.job_id} >
        <div className="job-detail-container"> 
        <div className='company-img'>
          <img src={data.thumbnail} alt={data.company_name} />
        </div>
        <div className='title-name'>
          <p className='company-name'>{data.company_name}</p>
          <p className='job-title'>{data.title}</p>
          <button className='job-time-frame' >{data.detected_extensions.schedule_type}</button>
        </div>
        <div className='location-time'>
          <div className='location-container'>
            <PublicOutlinedIcon />
            <p className='location'>{data.location}</p>
          </div>
          <div className='time-container'>
            <AccessTimeOutlinedIcon />
            <p className='extention-time'>  {data.detected_extensions.posted_at}</p>
          </div>
          <a>{data.via}</a>
        </div>
        </div>
        <div className='des'>{data.description}</div>
      </li>
    )
  })
  return (
    <div className='jobs-container'>
      {loading && <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />}
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default JobsList