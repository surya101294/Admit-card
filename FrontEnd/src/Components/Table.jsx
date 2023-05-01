import React,{useEffect, useState} from 'react'
import axios from 'axios'
import TableCard from './TableCard';
import styles from "../styles/table.css"
import {useParams} from "react-router-dom"
import Loading from './Loading';
const Table = () => {
    const[data,setData]= useState([])
    const[toggle,setToggle]= useState(false)
    const {id} = useParams()

    let getData = async()=> {
       
        try {
            setToggle(true)
            const res = await axios.get('https://admitcard.vercel.app/admitcard');
       
            setData(res.data)
            setToggle(false) 
        } catch (error) {
            console.log(error);  
            setToggle(false) 
        }
      
      
      }

        useEffect(() => {
          
            getData();
          }, []);
         
          const handleDelete=async(id)=>{
            console.log(id);
            await axios.delete(`https://admitcard.vercel.app/admitcard/delete/${id}`)
            getData()
          }
  return (
    <>
    <table  >
        <thead>
            <th>Name</th>
            <th>Phone</th>
            <th>School</th>
            <th>Class</th>
            <th>Roll</th>
            <th>Address</th>
            <th>View</th>
            <th>Download</th>
            <th>Delete</th>
        </thead>

      
            {toggle? <Loading/> : data.length>0 &&data.map((el)=>{
                return(
                    <tbody>
                        <TableCard key={el.id} {...el} handleDelete={handleDelete} />
                       
                    </tbody>
                )
            })}
            
        
    </table>
      
    </>
  )
}

export default Table
