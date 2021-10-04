import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher'
import './Teachers.css'

const Teachers = () => {
    const [Teachers, setTeachers] = useState([]);

    // Fetch data from fake data... 
    useEffect(() => {
        fetch('./teachersdata.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, []);
    return (
        <div className='mb-5 container'>
            <h1 className="fw-1 fw-bold mb-5 text-primary">Our Teachers</h1>
            <div className='teachers'>
            {
                    Teachers.map(Teac => <Teacher
                        key={Teac.id}
                        Teacher={Teac}>
                    </Teacher>)
                }
            </div>
        </div>
    );
};

export default Teachers;<h1>This is teachers</h1>