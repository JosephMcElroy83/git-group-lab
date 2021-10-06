import { useState, useEffect } from 'react'
import './PostCards.css'
import PostCard from '../PostCard/PostCard'
import { getPosts } from '../../services/posts'

const PostCards = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  const CARDS = posts
    .reverse()
    .map((post, index) =>
      index < 8 ? (
        <PostCard
          _id={post._id}
          tite={post.title}
          img='https://ca.slack-edge.com/T0351JZQ0-UL0DJMEQN-cab010c5c99c-72'
          status={post.status}
          author={post.author}
          key={index}
        />
      ) : null
    )

  return (
    <div className="post-cards">
      <div className="latest">LATEST</div>
      <div className="cards">{CARDS}</div>
    </div>
  )
}
export default PostCards