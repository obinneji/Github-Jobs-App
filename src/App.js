import './App.css';
import Header from './Components/Header';
import InputSearch from './Components/InputSearch';
import useFetchJobs from './hooks/useFetchJobs';

function App() {
  return (
    <div className="App">
      <Header />
      <InputSearch />
      {/* <JobsList /> */}
    </div>
  );
}

export default App;
