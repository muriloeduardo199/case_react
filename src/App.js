import '../App.css';
import Navbar from './components/Navbar';
import  Footer  from './components/Footer';
import Products from './components/Products';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null)

  return <div className='App'>
      <Navbar />
      {token ? <Products/>: <login token={token} setToken={setToken} />}
      <Footer/>
    
     </div>;
}


export default App;