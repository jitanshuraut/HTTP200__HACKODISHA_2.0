import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import style from "./styles/home.module.css"
import News from './pages/News';
import Links from './pages/Links';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Data from './pages/Data';
function App() {
  return (
    <>
  
       
     <BrowserRouter>
     <nav>
        <img src="help.png" alt="Logo" className={style.logo}/>
        <div className={style.navMenu}>
            <ul>
                <li><Link to="/" className={style.menu}>Home</Link></li>
                <li><Link to="/news" className={style.menu}>News</Link></li>
                <li><Link to="/link" className={style.menu}>Links</Link></li>

            </ul>
        </div>
    </nav>
 
      <Routes>
      
          <Route path="/" element={<Home/>} />
          
          <Route path="/news" element={<News/>}/>

          <Route path="/link" element={<Links/>} />
          <Route path="/info" element={<Data/>} />
          
          
         
        </Routes>
     

        
    </BrowserRouter>
    </>
  );
}

export default App;
