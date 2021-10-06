import { useState, useEffect } from 'react'
import './EditPost.css'
import { useParams, Redirect } from 'react-router-dom'
import  Layout  from '../../components/Layout/Layout'
import { getPost, updatePost } from '../../services/posts'

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    status: '',
    img: '',
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />
  }

  return (
    <Layout user={props.user}>
      <div className='post-edit'>
        <div className='image-container'>
          <img
            className='edit-post-image'
            src='https://ca.slack-edge.com/T0351JZQ0-UL0DJMEQN-cab010c5c99c-72'
            alt={post.title}
          />
          <br/>
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={post.img}
              name='imgURL'
              required
              onChange={handleChange}
            />
            <br/>
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-title'
            placeholder='Title'
            value={post.title}
            name='title'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='input-author'
            placeholder='Author'
            value={post.author}
            name='author'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-description'
            rows={10}
            cols={78}
            placeholder='Status'
            value={post.status}
            name='status'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default PostEdit
