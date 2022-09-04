import React from 'react'
import "../Styles/inputsearch.css"

const InputSearch = () => {
  return (
    <>
    <section>
      <div className='form'>
      <input type="text" placeholder="Titles,Companies, Expertse or Benefits"/>
        <button>Search</button>
      </div>
    </section>
    </>
  )
}

export default InputSearch