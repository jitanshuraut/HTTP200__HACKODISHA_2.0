import React from 'react'
import style from "../styles/footer.module.css"
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <>
      <div className={style.footer}>
        <h4>@HELP, Ltd. All Rights Reserved.</h4>
        <div className={style.extra}>
        <div className={style.button_icon}><a target="blank" href="#" className={style.res_link}> <AiFillGithub /></a> </div>
        <div className={style.button_icon}><a target="blank" href="#" className={style.res_link}> <AiFillTwitterCircle /> </a></div>
        <div className={style.button_icon}><a target="blank" href="#" className={style.res_link}><AiFillLinkedin /></a> </div>

</div>
      </div>

    </>
  )
}

export default Footer