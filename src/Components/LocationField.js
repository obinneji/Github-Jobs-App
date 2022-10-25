import React, { useState }  from 'react'
import "../Styles/locationfield.css"

const LocationField = ({location}) => {
  function getLocation(event){
    location = event.target.value
    // const {name,value,type,checked} = event.target
    // setFormData(prevFormData =>{
    //   return {
    //     ...prevFormData, 
    //     [name] : type === "checkbox" ? checked : value
    //   }
    // })
  }
  return (
    <>
    <aside>
        {/* <div className='radio-container'>
        <input   
        type="checkbox"
        id='timeframe' 
        // checked= {formData.isFulltime}
        // onChange={getLocation}
        name = "isFulltime"
        />
        <label htmlFor='timeframe'>Full-Time</label>
        </div> */}
        <h3>LOCATION</h3>
        <input type="text" 
        className="Input-Location" 
        placeholder="City,State,Zip code and Country" 
        onChange={getLocation} 
        name = "location"
        // value={formData.location}
        />
        <div className='selection-box'>
        <div className='radio-container'>
               <input 
               type="radio"
                id='london'
                name="selectedLocation"
                value="london"
                // onChange={getLocation} 
                // checked = {formData.selectedLocation === "london"}
                />
              <label htmlFor='london'>London</label>
            </div>
           <div className='radio-container'>
               <input type="radio" 
               id='armsterdan'
               name="selectedLocation"
               value="armsterdan"
              //  onChange={getLocation} 
              //  checked = {formData.selectedLocation === "armsterdan"}

               />
              <label htmlFor='armsterdan'>Armsterdan</label>
            </div>
            <div className='radio-container'>
              <input 
              type="radio" 
              id='berlin' 
              name="selectedLocation"
              value="berlin"
              // onChange={getLocation}
              // checked = {formData.selectedLocation === "berlin"}

              />
               <label htmlFor='berlin'>Berlin</label>
            </div>
            <div className='radio-container'>
               <input 
               type="radio" 
               id='new-york'
               name="selectedLocation"
               value="new-york"
              //  onChange={getLocation} 
              //  checked = {formData.selectedLocation === "new-york"}
                />  
               <label htmlFor='new-york'>New York</label> 
            </div>
        </div>
    </aside>
    </>
  )
}

export default LocationField