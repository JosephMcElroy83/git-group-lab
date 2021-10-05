import './Post.css'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
    <>
    <Link className="post" to={`/posts/${props._id}`}>
      {/* <img className="post-image" src={props.img} alt={props.name} /> */}
      <div className="post-name">{props.name}</div>
    </Link>
    </>
  )
}

export default Post