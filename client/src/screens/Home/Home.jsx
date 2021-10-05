import './Home.css'
import Layout from '../../components/Layout/Layout'
import PostCards from '../../components/PostCards/PostCards'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <PostCards />
      </div>
    </Layout>
  )
}