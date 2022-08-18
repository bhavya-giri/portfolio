
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavSidebar from './components/NavSidebar';
import Setup from './components/Setup';

function App() {
  return (
    <>
      <NavSidebar/>
      <div className=''>
      <Home/>
      <Setup/>
      </div>
    </>

   
  );
}

export default App;
