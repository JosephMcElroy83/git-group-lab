import React from 'react'
import { createPost } from '../../services/posts'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Form = (props) => {
  const  history = useHistory()
  const [post, setPost] = useState({
    title: '',
    author: '',
    status: '',
    img: '',
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createPost(post)
    setCreated({ created })
  }

  if (isCreated) {
    history.push('/posts')
    
  }
  return (
    <div className="form-div">
      <form className="form" onSubmit={handleSubmit}>
      <label for="title-input"/>
      <input type="text"
        id="title-input"
          placeholder="Title"
          value={post.title}
          name='title'
          required
          autofocus
        onChange={handleChange}
        />
        <br/>
      <label for="author-input"/>
      <input type="text"
        id="author-input"
          placeholder="Author"
          value={post.author}
          name='author'
          required
          autofocus
        onChange={handleChange}
        />
        <br/>
      <label for="status-input"/>
      <input type="text"
        id="status-input"
          placeholder="Status"
          value={post.status}
          name='status'
          required
          autofocus
        onChange={handleChange}
        />
        <br/>
      <label for="img-input"/>
      <input type="text"
        id="img-input"
          placeholder="Image-URL"
          value={post.img}
          name='img'
          required
          autofocus
        onChange={handleChange}
        />
        <br/>
        <button type='submit' className='submit-button'>
        submit
        </button>

      </form>
    </div>
  )
}
export default Form