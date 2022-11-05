import React, { useEffect, useState } from 'react'
import "../Styles/inputsearch.css"
import "../Styles/pagenavigation.css"
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import JobsList from './JobsList';
import LocationField from './LocationField';

const InputSearch = () => {
  // state declarations
  const [title,setTitle] = useState("frontend developer");
  const [page, setPage] = useState(2);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
 // function to fetch  data
  const requestApi = async () => {
    setLoading(true);
    try{
     const res = await fetch(`https://corsproxy.io/?https://serpapi.com/search.json?engine=google_jobs&q=${title}&location=Nigeria&hl=en&start=${page}&api_key=${process.env.REACT_APP_SECRET_NAME}`,
          {
            method: "GET",
          }
     )
     const resData = await res.json()
     console.log(resData.jobs_results)
     setData(resData.jobs_results)
     setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  // pagination component
  const Pagination = () => {
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
      <button  className='page-button' onClick={lastPage}>10</button>
      <button  className='page-button' onClick={increasePage}>{<KeyboardArrowRightOutlinedIcon/>}</button>
      </div>
      </footer>
  </div>
    )
  }
  //  Use Effect for rendering


  useEffect(() => {
    requestApi();
  }, [page])
  

  return (
    <>
    <section>
      <div className='form'>
      <input 
      type="text" 
      placeholder="Titles and Companies"
      onChange={(event) => setTitle(event.target.value)}
      />
        <button className='search-button' onClick={requestApi}>Search</button>
      <div>
      </div>
      </div>
    </section>
    <JobsList data = {data} loading = {loading} />
    <Pagination />
    </>
  )
}

export default InputSearch


