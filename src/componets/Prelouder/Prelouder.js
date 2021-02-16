import React from 'react'
import preloader from "../../img/svg1.svg";
import s from './prelouder.module.css'

let Prelouder = (props) => {
    return (
      <div className={s.center}>
        <img src={preloader} />
      </div>
    );
}


export default Prelouder