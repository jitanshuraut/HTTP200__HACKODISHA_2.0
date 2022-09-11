import React from 'react'
import style from "../styles/list.module.css"

import {Link, useNavigate} from 'react-router-dom';

function List() {

  const navigate = useNavigate();
  return (
    <>
    <div className={style.outer_list}>
<h1 className={style.list_head}>instruction</h1>
<div className={style.list_box_extra}>

    <div className={style.list}>

        <div className={style.box} onClick={()=>{
           navigate('/info',{state:{id:"flood"}});
        }}>
          <img src="flood-scaled.jpg" className={style.list_box} alt="" />

          <div className={style.col}>
            <h3>flood</h3>


          </div>
        </div>
        <div className={style.box} onClick={()=>{
           navigate('/info',{state:{id:"fire"}});
        }}>
          <img src="fire.jpg" className={style.list_box} alt="" />

          <div className={style.col}>
            <h3>fire</h3>


          </div>
        </div>
        <div className={style.box}  onClick={()=>{
           navigate('/info',{state:{id:"earthquake"}});
        }}>
          <img src="earthquake.jpg" className={style.list_box} alt="" />

          <div className={style.col}>
            <h3>earthquake</h3>


          </div>
        </div>
        <div className={style.box} onClick={()=>{
           navigate('/info',{state:{id:"tsunami"}});
        }}>
          <img src="tsunami.png" className={style.list_box} alt="" />

          <div className={style.col}>
            <h3>tsunami</h3>


          </div>
        </div>

        <div className={style.box} onClick={()=>{
           navigate('/info',{state:{id:"Tornado"}});
        }}>
          <img src="tornado.jpg" className={style.list_box} alt="" />

          <div className={style.col}>
            <h3>tornado</h3>


          </div>
        </div>

      </div>
      </div>
      </div>
    </>
  )
}

export default List