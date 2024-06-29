import React from "react";
import styles from './Button.module.css'

export const Button = ({text})=>{
    console.log(text)
    return(
        <button className={styles.btn}>{text}</button>
    )
}

