import React, { useState } from 'react';
import Axios from '../config/axios';

const Show = () => {
    const [data, setData] = useState()

    const ShowRequest = async () => {
        const resp = await Axios.get('/getServer')
        setData(resp.data)
    }
    return (
        <div>
                 <h1>Show</h1>
            <button onClick={ShowRequest}>Get Data</button>
            <div className='display-content-section'>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    )
}

export default Show;