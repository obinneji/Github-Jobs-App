import React, { useEffect, useState } from 'react'
import "../Styles/inputsearch.css"
import "../Styles/pagenavigation.css"
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import JobsList from './JobsList';
import LocationField from './LocationField';

const InputSearch = () => {
  const [title,setTitle] = useState("frontend developer");
  const [page, setPage] = useState(2);
  const [data, setData] = useState([])
  const {location,setLocation} = useState("UnitedStates");
  const apiKey = '528c003783236d1bad50d26efaf827a3313408aa6a3a61763f240889b2fd9c93';
  const requestApi = async () => {
    try{
     const res = await fetch(`https://corsproxy.io/?https://serpapi.com/search.json?engine=google_jobs&q=${title}&location=United+States&hl=en&start=${page}&api_key=${apiKey}`,
          {
            method: "GET",
          }
     )
     const resData = await res.json()
     console.log(resData.jobs_results)
     setData(resData.jobs_results)
    } catch (err) {
      console.log(err);
    }
  }
  const NavButtons = () => {
    const increasePage = () => {
      setPage(prevValve =>
        prevValve + 1 )
    }
    const decreasePage = () => {
      setPage(prevValve =>
        prevValve - 1 );
      }
       const lastPage = () => {
      setPage(10)
    }
    const firstPage = () => {
      setPage(1)
    }
    const secondPage = () => {
      setPage(2)
    }
    const thirdPage = () => {
      setPage(3)
    }
    

    return (
      <div className='buttons-container'>
      <footer>
      <div className='buttons-container'>
      <button  className='page-button'onClick={decreasePage}>{<KeyboardArrowLeftOutlinedIcon />}</button>
      <button  className='page-button' onClick={firstPage}>1</button>
      <button className='active page-button' onClick={secondPage}>2</button>
      <button  className='page-button' onClick={thirdPage}>3</button>   
      {/* <span>....</span> */}
      <button  className='page-button' onClick={lastPage}>10</button>
      <button  className='page-button' onClick={increasePage}>{<KeyboardArrowRightOutlinedIcon/>}</button>
      </div>
      </footer>
  </div>
    )
  }
   
  useEffect(() => {
    requestApi();

  }, [page])
  

  return (
    <>
    <section>
      <div className='form'>
      <input 
      type="text" 
      placeholder="Titles,Companies, Expertse or Benefits"
      onChange={(event) => setTitle(event.target.value)}
      />
        <button className='search-button' onClick={requestApi}>Search</button>
      <div>
      </div>
      </div>
    </section>
    {/* <LocationField /> */}
    <JobsList data = {data} />
    <NavButtons />

  
    </>
  )
}

export default InputSearch