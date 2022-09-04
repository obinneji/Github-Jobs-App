import React from 'react'
import "../Styles/locationfield.css"
const LocationField = () => {
  return (
    <>
    <aside>
        <div className='radio-container'>
        <input type="checkbox" />
        <label>Full-Time</label>
        </div>
        <h3>LOCATION</h3>
        <input type="text" className="Input-Location" placeholder="City,State,Zip code and Country" />
        <div className='selection-box'>
        <div className='radio-container'>
               <input type="radio" />
              <label>London</label>
            </div>
           <div className='radio-container'>
               <input type="radio" />
              <label>Armsterdan</label>
            </div>
            <div className='radio-container'>
              <input type="radio" />
               <label>Berlin</label>
            </div>
            <div className='radio-container'>
               <input type="radio" />
               <label>New York</label> 
            </div>
        </div>
    </aside>
    </>
  )
}

export default LocationField