import {Page,Text,Document,StyleSheet, PDFDownloadLink } from '@react-pdf/renderer'
import React from 'react'
import {Link as RouterLink} from "react-router-dom"
import styles from "../styles/table.css"
const TableCard = ({_id,name,phone,school,Class,rollNumber,address,handleDelete}) => {
    let file= <Document>
    <Page>
    <Text>name: {name}</Text>
        <Text>Class: {Class}</Text>
        <Text> Phone: {phone}</Text>
        <Text>School: {school}</Text>
        <Text>Roll-No {rollNumber}</Text>
        <Text>Address:  {address}</Text>
    </Page>
</Document>
  return (
    <tr>
    <td>{name}</td>
      <td>{phone}</td>
    <td> {school}</td>
     <td> {Class}</td>
     <td> {rollNumber} </td>
     <td> {address} </td>
     <RouterLink  to={`/list/${_id}`} >
     <td> <button id='det' >View Details</button> </td>
     </RouterLink>

     <td>
     <PDFDownloadLink document={file} fileName= {name} >
         <button id='down' >Download</button>
         </PDFDownloadLink>
          </td>
         
     <td> <button id='del' onClick={()=>handleDelete(_id)} >Delete</button> </td>
    
  </tr>
  )
}

export default TableCard
