import React from 'react'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import "../Styles/pagenavigation.css"
const PageNavigation = () => {
  return (
    <div className='buttons-container'>
        <footer>
        <div className='buttons-container'>
        <button  className='page-button'>{<KeyboardArrowLeftOutlinedIcon />}</button>
        <button  className='page-button'>1</button>
        <button className='active page-button'>2</button>
        <button  className='page-button'>3</button>   
        {/* <span>....</span> */}
        <button  className='page-button'>10</button>
        <button  className='page-button'>{<KeyboardArrowRightOutlinedIcon/>}</button>
        </div>
        </footer>
    </div>
  )
}

export default PageNavigation