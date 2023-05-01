import React from 'react'
import Nav from '../Components/Nav'
import Table from '../Components/Table'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div>
      <Nav />
      <Table />
      <Link to={'/'}>
        <h3  >Add Data to List</h3>
      </Link>

    </div>
  )
}

export default List
