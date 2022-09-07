import React from 'react'
import "../Styles/inputsearch.css"
import {useContext, useEffect, useState} from 'react'
import { jobTitleContext } from '../Context/JobTitleContext'
import {formDataContext} from '../Context/formDataContext'

const InputSearch = () => {
  const [isClicked, setIsClicked] =  useState(false)
  const {jobTitle, setJobTitle} = useContext(jobTitleContext);
  const {formData} = useContext(formDataContext)
   useEffect(() => {
    const url = `https://serpapi.com/search.json?engine=google_jobs&q=${jobTitle}&hl=en&location =${formData.location || formData.selectedLocation}&api_key=528c003783236d1bad50d26efaf827a3313408aa6a3a61763f240889b2fd9c93`
     fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
    return () => {

    }
  }, [isClicked])
  const handleSearchButton = () => {
    setIsClicked((prevValue)=>{
      isClicked = !prevValue
    })
  }
  const handleSearch = (event) => {

    const name = event.target
    return (
      setJobTitle(name)
    )
    }
  
  console.log(jobTitle)
  return (
    <>
    <section>
      <div className='form'>
      <input 
      type="text" 
      placeholder="Titles,Companies, Expertse or Benefits"
      onChange={handleSearch}
      />
        <button className='search-button' onClick={handleSearchButton}>Search</button>
      </div>
    </section>
    </>
  )
}

export default InputSearch