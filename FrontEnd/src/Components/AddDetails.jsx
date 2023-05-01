import React,{useEffect, useState} from 'react'
import styles from '../styles/form.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const AddDetails = () => {
  const[name,setName]= useState("")
  const[phone,setPhone] = useState("")
  const[school,setSchool] = useState("")
  const [clas, setClas] = useState("")
const [roll, setRoll] = useState("")
const[add,setAdd] = useState("")

const handleSubmit= async(e)=>{
e.preventDefault()
let obj={
  name:name,
  phone:phone,
  school:school,
  Class:clas,
  rollNumber:roll,
  address:add
}
if(name===""||phone===""||school===""||clas===""||roll===""||add===""){
  alert("Fill All The Details")
}else{
  try {
    await axios.post(`https://admitcard.vercel.app/admitcard/add`,obj)
    alert('Data Added SuccessFully')
  } catch (error) {
    console.log(error);
  }
  setName("")
  setPhone("")
  setSchool("")
  setClas("")
  setRoll("")
  setAdd("")

  
}

}
    
  return (
    <div>
        <form onSubmit={handleSubmit} id='form' action=''>
            <label htmlFor="">Name: </label>
            
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <br />
            <label htmlFor="">Phone: </label>
            <input  min="1000000000" max="9999999999" type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <br />
            <label htmlFor="">School: </label>
            <input type="text" value={school} onChange={(e)=>setSchool(e.target.value)} />
            <br />
            <label htmlFor="">Class:   </label>
            <input style={{marginLeft:"13px"}} type="text" value={clas} onChange={(e)=>setClas(e.target.value)} />
            <br />
            <label htmlFor="">Roll No: </label>
            <input type="number" value={roll} onChange={(e)=>setRoll(e.target.value)} />
            <br />
            <label htmlFor="">Address: </label>
            <input type="text" value={add} onChange={(e)=>setAdd(e.target.value)} />
            <br />
            <input id='btn' type="submit" />
        </form>
      <Link to={'/list'}>
      <h3  >See the List</h3>
      </Link>
    </div>
  )
}

export default AddDetails
