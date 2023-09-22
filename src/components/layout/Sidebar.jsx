import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Global } from '../../helpers/Global';

export const Sidebar = () => {

  const [look, setlook] = useState("");
  const navigate = useNavigate();

  const lookup = (e) => {
    e.preventDefault();

    let query = e.target.query.value;
    navigate("search/"+query);
    
  }

  return (
    <aside className="lateral">
    <div className="search">
        <h3 className="title">Search:</h3>
        <form onSubmit={lookup}>
            <input type="text" name='query' />
            <input type="submit" id='search' value="Search"/>
        </form>
    </div>
    
</aside>
  )
}
