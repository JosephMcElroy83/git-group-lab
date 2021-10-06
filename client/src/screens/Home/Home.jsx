import './Home.css'
import Layout from '../../components/Layout/Layout'
import PostCards from '../../components/PostCards/PostCards'
import museimp from '../../components/Video/museimp.mp4'
const Home = () => {
  return (
    <>
    <video
      autoPlay
      loop
      muted
      
      style={{
        position: "absolute",
        width: "100%",
        left: "50%",
        top: "50%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1",
      
      }}
      >
        <source src={museimp} type="video/mp4" />
      </video>
      
    <Layout>
      <div className="home">
        <PostCards />
      </div>
      </Layout>
      </>
  )
}

export default Home