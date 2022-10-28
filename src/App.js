import './App.css';
import Navbar from './components/Navbar';
import  Footer  from './components/Footer';
import Products from '/home/murilo/case_react/src/components/Footer.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return <div className='App'>
      <Navbar />
      <Products/>
      < Footer/>
    
     </div>;
}


export default App;