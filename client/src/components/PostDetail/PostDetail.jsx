import { useState, useEffect } from 'react'
import './PostDetail.css'

import { getPost, deletePost } from '../../services/posts'
import { useParams, Link } from 'react-router-dom'

const PostDetail = () => {

    const [post, setPost] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchPost = async () => {
            const post = await getPost(id)
            setPost(post)
            setLoaded(true)
        }
        fetchPost()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
            <div className="post-detail">
                <img className="post-detail-image" src='https://ca.slack-edge.com/T0351JZQ0-UL0DJMEQN-cab010c5c99c-72' alt={post.title} />
                <div className="detail">
                    <div className="name">{post.title}</div>
                 
                    <div className="description">{post.status}</div>
                    <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/posts/${post._id}/edit`}>Edit</Link></button>
                        <button className="delete-button" onClick={() => deletePost(post._id)}>Delete</button>
                    </div>
                </div>
            </div>
    )
}

export default PostDetail