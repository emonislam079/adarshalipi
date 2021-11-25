import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SliceData from '../SliceData/SliceData';

const SliceDatas = () => {
    const [Slices, setSlices] = useState([]);
    useEffect(() => {
        fetch('./SliceData.JSON')
            .then(res => res.json())
            .then(data => setSlices(data))
    }, []);
    return (
        <div className="container">
            <Row xs={1} md={2} className="g-4 container">
                {
                    Slices.map(slice => <SliceData
                        key={slice.id}
                        slice={slice}
                    ></SliceData>)
                }

            </Row>

        </div>
    );
};

export default SliceDatas;