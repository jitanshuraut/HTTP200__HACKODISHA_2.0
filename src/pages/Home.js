import React from 'react'
import List from '../components/List'
import style from "../styles/home.module.css"
function Home() {
  return (
    <>
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

    <div className={style.firstSection}>
        <div className={style.form}>
            
            <div className={style.takeInput}>
                <img src="phone-call.png" alt="icon" width="25px" className={style.formIcon}/>
                <input type="text" placeholder="Name" className={style.input}/>
            </div>
            <div className={style.takeInput}>
                <img src="user.png" alt="icon" width="25px" className={style.formIcon}/>
                <input type="text" placeholder="Phone Number" className={style.input}/>
            </div>
            <div className={style.takeInput}>
                <img src="writing.png" alt="icon" width="25px" className={style.formIcon}/>
                <input type="textarea" placeholder="Write a message" className={style.input} rows="3" cols="3"/>
            </div>
            <div className={style.btn5}><button className={style.button-43} role="button">Send SMS</button></div>
        </div>
        <div className={style.formImg}><img src="final.jpg" alt="image" id={style.img50} /></div>
    </div>

<List/>

    </>
  )
}

export default Home