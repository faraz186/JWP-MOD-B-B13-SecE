import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
    console.log(props)
  return (
    <div className={styles.card}>
        <img className={styles.cardImg} src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg" alt="" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default Card
