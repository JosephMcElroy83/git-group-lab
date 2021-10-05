import { useState, useEffect } from 'react'
import './Posts.css'
import Layout from '../../components/Layout/Layout'
import Post from '../../components/Post/Post'
import { getPosts } from '../../services/posts'

const Posts = () => {
  const [posts, setPosts] = useState([])
  // const [searchResult, setSearchResult] = useState([])
  // const [applySort, setApplySort] = useState(false)
  // const [sortType, setSortType] = useState('name-ascending')

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
      // setSearchResult(allPosts)
    }
    fetchPosts()
  }, [])

  // const handleSort = (type) => {
  //   if (type !== '' && type !== undefined) {
  //     setSortType(type)
  //   }
  //   switch (type) {
  //     case 'name-ascending':
  //       setSearchResult(AZ(searchResult))
  //       break
  //     case 'name-descending':
  //       setSearchResult(ZA(searchResult))
  //       break
  //     case 'price-ascending':
  //       setSearchResult(lowestFirst(searchResult))
  //       break
  //     case 'price-descending':
  //       setSearchResult(highestFirst(searchResult))
  //       break
  //     default:
  //       break
  //   }
  // }

  // if (applySort) {
  //   handleSort(sortType)
  //   setApplySort(false)
  // }

  // const handleSearch = (event) => {
  //   const results = products.filter((product) =>
  //     product.name.toLowerCase().includes(event.target.value.toLowerCase())
  //   )
  //   setSearchResult(results)
  //   setApplySort(true)
  // }

  // const handleSubmit = (event) => event.preventDefault()

  return (
    <Layout>
      {/* <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} /> */}
      <div className='posts'>
        {posts.map((post, index) => {
          return (
            <Post
              _id={post._id}
              tite={post.title}
              img={post.img}
              status={post.status}
              author={post.author}
              key={index}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Posts
