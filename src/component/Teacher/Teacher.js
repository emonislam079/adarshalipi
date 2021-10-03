import React from 'react';
import './Teacher.css'
const Teacher = (props) => {
    const { name, qualification, occupation, experience, instuation } = props.Teacher;
    return (
        <div className="teacher">
            <h1>{name}</h1>
            <h5>{qualification}</h5>
            <h3> Experiance: {experience}</h3>
            <p>{occupation} at {instuation}</p>
        </div>
    );
};

export default Teacher;