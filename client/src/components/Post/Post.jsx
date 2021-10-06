import './Post.css'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
    <>
    <Link className="post" to={`/posts/${props._id}`}>
      <img className="post-image" src='https://ca.slack-edge.com/T0351JZQ0-UL0DJMEQN-cab010c5c99c-72' alt={props.title} />
      <div className="post-name">{props.title}</div>
      </Link>
    </>
  )
}

export default Post