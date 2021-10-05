import "./App.css";
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
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/add-post" component={CreatePost} />
        <Route exact path="/posts/:id/edit" component={EditPost} />
        <Route exact path="/posts/:id" component={DetailPost} />
      </Switch>

      <div className="footer"></div>
    </>
  );
}

export default App;
