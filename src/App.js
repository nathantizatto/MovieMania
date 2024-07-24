import './App.css';
import { Outlet } from 'react-router-dom';
import Navmain from './components/Navmain';


function App() {

  return (
    <div className='App'>
      <Navmain/>
            
      <Outlet />
    </div>
  );
}

export default App;
