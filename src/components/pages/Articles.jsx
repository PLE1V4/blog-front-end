import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';
import { Request } from '../../helpers/Request';
import { List } from './List';

export const Articles = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async() => {
        
    const {data, loading} = await Request(Global.url+"articles", "GET");

    if(data.status === "success"){
      setArticles(data.articles);
      setLoading(false);
    }
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
