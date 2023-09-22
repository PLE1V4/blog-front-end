import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { Request } from '../../helpers/Request'
import { Global } from '../../helpers/Global'

export const Edit = () => {

  const {form, sent, modified} = useForm({});
  const [response,setResponse] = useState("not send");
  const [article, setArticle] = useState({});
  const params =  useParams(); 

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = async() => {
        
    const {data} = await Request(Global.url+"article/"+params.id, "GET");

    if(data.status === "success"){
      setArticle(data.article);
    }

  }


  const editArticle = async(e) => {
    //e.preventDefault();
    
    let newArticle = form;

    const {data} = await Request(Global.url+"article/"+params.id, "PUT", newArticle);

    if(data.status === "success"){
      setResponse("saved");
    }else{
      setResponse("error");
    }

    const fileInput = document.querySelector("#file");
    
    if(data.status === "success" && fileInput.files[0]){
      
      const formData = new FormData();
      formData.append('file',fileInput.files[0]);

      const upload = await Request(Global.url+"upload-image/"+data.article._id, "POST", formData, true);

      if(upload.data.status === "success"){
        setResponse("saved");
      }else{
        setResponse("error");
      }
   
    }    
  }

  return (
    <div className='welcome' onSubmit={editArticle}>
      <h1>Edit Article</h1>
      <p>Form to edit article: {article.title}</p>
      
      <strong>{response == "saved" ? "Article edited Succesfully!!" : ""}</strong>
      <strong>{response == "error" ? "Something went wrong..." : ""}</strong>

      <form className='form'>
        <div className='form-group'>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" onChange={modified} defaultValue={article.title}/>
        </div>
        <div className='form-group'>
          <label htmlFor="content">Content: </label>
          <textarea type="text" name="content" onChange={modified} defaultValue={article.content}/>
        </div>
        <div className='form-group'>          
          <label htmlFor="file">Image: </label>
          <div className='mask'>
          {article.img !="default.png" && <img src={Global.url + "image/" + article.img} />}
          {article.img  == "default.png" && <img src={"https://picsum.photos/300?random=" + article._id} />}
          <input type="file" name="file" id="file" />
          </div>          
        </div>
        <input type='submit' value="save" className='btn btn-success'/>
      </form>

    </div>
  )
}
