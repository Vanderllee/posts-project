import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./screens/login/Login"
import Register from "./screens/register/Register"
import Home from "./screens/home/Home"
import Single from "./screens/single/Single"
import Write from "./screens/write/Write"
import Settings from "./screens/settings/Settings"
import TopBar from "./components/topbar/TopBar"



function App() {
  return (
    <Router>
      <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/cadastro">
            <Register />
          </Route>

          <Route path="/write">
            <Write /> 
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/settings">
            <Settings />
          </Route>

          <Route path="/post/:postId">
            <Single /> 
          </Route>

        </Switch>

        

     
      {/**  */} {/** logar screen */}
      {/**  */} {/** config our posts */}
      {/** */} {/** to show our page content */}
     
    </Router>
  );
}

export default App;
