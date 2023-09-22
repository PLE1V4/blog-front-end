import React from 'react'
import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Request } from '../../helpers/Request'
import { Global } from '../../helpers/Global'

export const Create = () => {

  const {form, sent, modified} = useForm({});
  const [response,setResponse] = useState("not send");

  const saveArticle = async(e) => {
    e.preventDefault();
    
    let newArticle = form;

    const {data} = await Request(Global.url+"create", "POST", newArticle);

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
    <div className='welcome' onSubmit={saveArticle}>
      <h1>Create New Article</h1>
      <p>Form to create a new article</p>
      
      <strong>{response == "saved" ? "Article saved Succesfully!!" : ""}</strong>
      <strong>{response == "error" ? "Something went wrong..." : ""}</strong>

      <form className='form'>
        <div className='form-group'>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" onChange={modified}/>
        </div>
        <div className='form-group'>
          <label htmlFor="content">Content: </label>
          <textarea type="text" name="content" onChange={modified}/>
        </div>
        <div className='form-group'>
          <label htmlFor="file">Image: </label>
          <input type="file" name="file" id="file" />
        </div>
        <input type='submit' value="save" className='btn btn-success'/>
      </form>

    </div>
  )
}
