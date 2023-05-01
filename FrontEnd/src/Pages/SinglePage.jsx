import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import Nav from '../Components/Nav'
import { Page, Text, Document, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer"  //module to download as a PDF

const SinglePage = () => {
  const styles = StyleSheet.create({})
  const { id } = useParams()
  const [data, setData] = useState({})
  
  useEffect(() => {
    axios
      .get(`https://admitcard.vercel.app/admitcard/${id}`)
      .then(({ data }) => {
        setData(data[0])
        console.log("data", data[0]);
      })
      .catch((err) => console.log(err))
  }, [id])

  const { name, Class, phone, school, rollNumber, address } = data

  let file = <Document  >
    <Page style={{ border: "1px solid black" }}>

      <Text>name: {name}</Text>
      <Text>Class: {Class}</Text>
      <Text> Phone: {phone}</Text>
      <Text>School: {school}</Text>
      <Text>Roll-No {rollNumber}</Text>
      <Text>Address:  {address}</Text>
    </Page>
  </Document>

  return (
    <>
      <Nav />

      <div>
        <PDFDownloadLink document={file} fileName={name} >
          <button >Download pdf</button>
        </PDFDownloadLink>

        <p>Name: {name}</p>
        <p>Class: {Class}</p>
        <p>Phone: {phone}</p>
        <p>School: {school}</p>
        <p>Roll-No: {rollNumber}</p>
        <p> Address: {address}</p>
      </div>
    </>
  )
}

export default SinglePage
