import React from 'react';
import {jobData} from "../Data/MockJobList";
import "../Styles/joblists.css"
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';


const JobsList = () => {
  return (
    <div className='jobs-container'>
      <ul>
        {jobData.map(data=>(
          <div >
             <li key={data.id} className="job-detail-container">
            <div className='company-img'><img src={data.thumbnail} alt="company-logo" /></div>
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
            </div>
          </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default JobsList