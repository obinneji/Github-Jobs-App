import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import InputSearch from './Components/InputSearch';
import JobsList from './Components/JobsList';
import LocationField from './Components/LocationField';
import PageNavigation from './Components/PageNavigation';
import {formDataContext} from "./Context/formDataContext";
import {jobTitleContext} from "./Context/JobTitleContext";

function App() {
  const [formData, setFormData] = useState({
    location: "",
    isFulltime: true,
    selectedLocation: ""
  })
  const [jobTitle , setJobTitle] = useState("Front End Developer")
  
  return (
    <div className="App">
      <Header />
      <jobTitleContext.Provider value ={{jobTitle, setJobTitle}}><InputSearch /></jobTitleContext.Provider>
      <div className='container'>
        <formDataContext.Provider value={{formData, setFormData}}><LocationField /></formDataContext.Provider>
        <JobsList />
      </div>
      <PageNavigation />
    </div>
  );
}

export default App;
