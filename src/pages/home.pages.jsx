import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Create from '../components/create';
import Delete from '../components/delete';
import Show from '../components/show';
import '../styles/home.styles.css'


const Home = () => {
  const navigate = useNavigate()

  const goToCreate = () => {
    navigate('/create')
  }

  const goToShow = () => {
    navigate('/show')
  }

  const goToDelete = () => {
    navigate('/delete')
  }

  return (
    <div>
      <div className='actions'>
        <button onClick={goToCreate}>Create</button>
        <button onClick={goToShow}>Show</button>
        <button onClick={goToDelete}>Delete</button>
      </div>
    
    <Routes>
      <Route path='create' Component={Create} />
      <Route path='delete' Component={Delete} />
      <Route path='show' Component={Show} />
    </Routes>
    </div>
  )
}

export default Home