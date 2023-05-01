import React from 'react'
import styles from '../styles/nav.css'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div id='main' >
        <Link to={'/'} ><h3>Home</h3></Link>
        
        <Link to={'/list'} ><h3>List</h3></Link>
        
      
    </div>
  )
}

export default Nav
