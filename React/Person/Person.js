import React from 'react'
import './styles.css'

function Person(props) {
  return (
    <div>
        <div className="data">
            <div className="label">
                <p>Name</p>
                <p>Age</p>
                <p>Education</p>
                <p>Phone Number</p>
                <p>City</p>
            </div>
            <div>
                <p>{props.name}</p>
                <p>{props.age}</p>
                <p>{props.edu}</p>
                <p>{props.phone}</p>
                <p>{props.city}</p>
            </div>
        </div>
        <hr></hr>
    </div>
  )
}

export default Person
