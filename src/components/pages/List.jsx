import React from 'react'

export const List = ({articles, setArticles}) => {
  return (
    articles.map(article => {
        return (
          <article key={article._id} className="article-item">
            <div className='mask'>
              <img src={"https://picsum.photos/300?random=" + article._id} />
            </div>
            <div className='data'>
              <h3 className="title">{article.title}</h3>
              <p className="description">{article.content}</p>

              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>

          </article>
        );
      })
  )
}
