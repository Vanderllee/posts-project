import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./screens/login/Login"
import Register from "./screens/register/Register"
import Home from "./screens/home/Home"
import Single from "./screens/single/Single"
import Write from "./screens/write/Write"
import Settings from "./screens/settings/Settings"
import TopBar from "./components/topbar/TopBar"



function App() {

    const user = false

  return (
    <Router>
      <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/cadastro">
            { user ? <Home /> : <Register /> }
          </Route>

          <Route path="/write">
           { user ? <Write />  : <Register />  }  
          </Route>

          <Route path="/login">
           { user ? <Home /> : <Login /> } 
          </Route>

          <Route path="/settings">
          { user ? <Settings /> : <Register /> }
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
