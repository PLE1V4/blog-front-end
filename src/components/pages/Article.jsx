import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Global } from '../../helpers/Global';
import { Request } from '../../helpers/Request';
import { List } from './List';

export const Article = () => {

  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async() => {
        
    const {data} = await Request(Global.url+"article/"+params.id, "GET");

    if(data.status === "success"){
      setArticle(data.article);
    }

    setLoading(false);
    
  }

  return (
    <div className='welcome'>
      {loading ? "Loading..." :
        (
          <>
            <div className='mask'>
              {article.img !="default.png" && <img src={Global.url + "image/" + article.img} />}
              {article.img  == "default.png" && <img src={"https://picsum.photos/300?random=" + article._id} />}
            </div>
            <h1>{article.title}</h1>
            <span>{article.date}</span>
            <p>{article.content}</p>
          </>
        )
}    
    </div>
  )
}
