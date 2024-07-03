import React from 'react'
import PropTypes from 'prop-types'

const Student = ({name,age,isStudent}) => {  
  return (
    <div style={{border:"2px solid black",marginBottom:"20px",borderRadius:"5px"}}>
        <h1>Student Name: {name}</h1>
        <h2>age: {age}</h2>

        <h3>isStudent: {isStudent ? "true":"false"}</h3>

    </div>
  )   
}

Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool
}



export default Student
