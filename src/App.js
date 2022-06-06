import './App.css';
import Banner from './pages/Banner';
// import { Header } from './pages/Header/Header';
import DynamicTable from './components/DynamicTable';
import OldDynamicTable from './components/OldDynamicTable';

function App() {  
  return (
    <div className="App">
      <Banner title='The Encounterer' subtitle='Roll for Initiative' />  
      {/* <Header/> */}

      <DynamicTable />

      {/* <OldDynamicTable /> */}

      <Banner subtitle='Created by Alex Acosta'/>
    </div>
  );
}

export default App;