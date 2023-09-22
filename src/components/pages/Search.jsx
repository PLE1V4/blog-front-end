import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';
import { Request } from '../../helpers/Request';
import { List } from './List';
import { useParams } from 'react-router-dom';

export const Search = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    getArticles();
  }, [params]);


  const getArticles = async() => {
        
    const {data} = await Request(Global.url+"search/"+params.query, "GET");

    if(data.status === "success"){
      setArticles(data.articles);
      
    }else{
      setArticles([]);
    }

    setLoading(false);
  }

  return (
    <>
      {loading ? "Loading..." :
        articles.length >= 1 ?
          <List articles={articles} setArticles={setArticles} />
          : (<h1>Nothing here to see...</h1>)
      }
    </>
  )
}
