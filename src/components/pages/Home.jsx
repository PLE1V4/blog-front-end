import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='welcome'>
      <h1>Blog Project (MERN Stack)</h1>
      <p>
        Back-end: MongoDB, express, Node.js<br/>
        Front-end: React
      </p>
      <Link to="/articles" className='button'>See Articles</Link>
    </div>
  )
}
