import React, { useState } from 'react';
import Axios from '../config/axios';

const Delete = () => {
    const [data, setData] = useState()
    const [dataId, setId] = useState(null)

    const DeleteData = async ({ id }) => {
        const resp = await Axios.delete(`/deleteServer/${id}`)
        setData(resp.data)
    }

    return (
        <div>
     <h1>Delete</h1>
        <input placeholder='Enter Id' value={dataId} onChange={(e) => setId(e.target.value)} />
        <button type='Submit' onClick={DeleteData} disabled={dataId ? false : true } >Delete Data</button>
        <div className='display-content-section'>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    </div>
    )
}

export default Delete