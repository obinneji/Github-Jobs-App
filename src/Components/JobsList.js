import React from 'react';
import "../Styles/joblists.css"
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
// import useFetchJobs from '../hooks/useFetchJobs';


const JobsList = ({ data }) => {
  const listItems = data.map((data) => {
    return (
      <li key={data.job_id} className="job-detail-container">
        <div className='company-img'><img src={data.thumbnail} alt={data.company_name} /></div>
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
          <a href={data.job_apply_link} >Apply here</a>
        </div>
      </li>
    )
  })
  return (
    <div className='jobs-container'>

      <ul>
        {listItems}
      </ul>

    </div>
  )
}

export default JobsList