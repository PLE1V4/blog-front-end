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

    const {data,loading} = await Request(Global.url+"create", "POST", newArticle);

    if(data.status === "success"){
      setResponse("saved");
    }else{
      setResponse("error");
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
          <label htmlFor="file0">Image: </label>
          <input type="file" name="file0" id="file" />
        </div>
        <input type='submit' value="save" className='btn btn-success'/>
      </form>

    </div>
  )
}
