import React from 'react'
import { Link } from 'react-router-dom';
import { Global } from '../../helpers/Global';
import { Request } from '../../helpers/Request';

export const List = ({articles, setArticles}) => {

  const deleteArticle = async(id) => {
    let {data} = await Request(Global.url+"article/"+id, "DELETE");
    
    if (data.status === "success"){
      let updatedArticles = articles.filter(article => article._id !== id);
      setArticles(updatedArticles);
    }
  }

  return (
    articles.map(article => {
        return (
          <article key={article._id} className="article-item">
            <div className='mask'>
              {article.img !="default.png" && <img src={Global.url + "image/" + article.img} />}
              {article.img  == "default.png" && <img src={"https://picsum.photos/300?random=" + article._id} />}
            </div>
            <div className='data'>
              <h3 className="title"><Link to={"/article/"+article._id}>{article.title}</Link></h3>
              <p className="description">{article.content}</p>

              <Link to={"/edit/"+article._id} className='edit'> Edit</Link>
              <button className="delete" onClick={() => {
                deleteArticle(article._id);
              }}>Delete</button>
            </div>

          </article>
        );
      })
  )
}
