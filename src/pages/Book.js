import React from 'react'
import { useParams } from 'react-router-dom'

export default function Book() {
  const {id} = useParams()

  let bookName = ''

  if ( id === '1' ) {
    bookName = 'Alicia en el país de las maravillas'
  } else if ( id === '2') {
    bookName = 'Dune'
  } else {
    bookName = 'Fahrenheit 451'
  }

  return (
    <h1>{ bookName }</h1>
  )
}
