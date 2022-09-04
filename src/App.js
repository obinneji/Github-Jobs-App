import './App.css';
import Header from './Components/Header';
import InputSearch from './Components/InputSearch';
import JobsList from './Components/JobsList';
import LocationField from './Components/LocationField';


function App() {
  return (
    <div className="App">
      <Header />
      <InputSearch />
      <div className='container'>
      <LocationField />
      <JobsList />
      </div>
    </div>
  );
}

export default App;
