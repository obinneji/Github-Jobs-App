import './App.css';
import Header from './Components/Header';
import InputSearch from './Components/InputSearch';
import JobsList from './Components/JobsList';
import LocationField from './Components/LocationField';
import PageNavigation from './Components/PageNavigation';



function App() {
  return (
    <div className="App">
      <Header />
      <InputSearch />
      <div className='container'>
        <LocationField />
        <JobsList />
      </div>
      <PageNavigation />
    </div>
  );
}

export default App;
