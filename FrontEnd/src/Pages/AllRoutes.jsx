import { Route, Routes } from 'react-router-dom'
import Home from './Home'



import React from 'react'
import List from './List'
import SinglePage from './SinglePage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:id" element={<SinglePage />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
