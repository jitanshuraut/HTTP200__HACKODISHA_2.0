import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import style from "./styles/home.module.css"
import News from './pages/News';
import Links from './pages/Links';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
  
       
     <BrowserRouter>
     <nav>
        <img src="help.png" alt="Logo" className={style.logo}/>
        <div className={style.navMenu}>
            <ul>
                <li><p href="#" className={style.menu}>Home</p></li>
                <li><p href="#" className={style.menu}>News</p></li>
                <li><p href="#" className={style.menu}>Home</p></li>
                <li><p href="#" className={style.menu}>Links</p></li>
            </ul>
        </div>
    </nav>
 
      <Routes>
      
          <Route path="/" element={<Home/>} />
          
          <Route path="/news" element={<News/>}/>

          <Route path="/link" element={<Links/>} />
          
          
         
        </Routes>
     

        
    </BrowserRouter>
    </>
  );
}

export default App;
