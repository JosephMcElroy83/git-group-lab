import "./App.css";
import PostCards from "./components/PostCards/PostCards";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import Posts from "./screens/Posts/Posts";
import CreatePost from "./screens/CreatePost/CreatePost";
import DetailPost from "./screens/DetailPost/DetailPost";
import EditPost from "./screens/EditPost/EditPost";

function App() {
  return (
    <>
      <div className="App">Home</div>
      <Switch>
        <Route path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/create-post" component={CreatePost} />
        <Route exact path="/posts/:id/edit" component={EditPost} />
        <Route exact path="/posts/:id" component={DetailPost} />
      </Switch>
      <PostCards />
      <div className="footer"></div>
    </>
  );
}

export default App;
