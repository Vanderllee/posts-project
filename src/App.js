/** import Home from "./screens/home/Home"; */
/** import Single from "./screens/single/Single"; */
/*import Write from "./screens/write/Write";*/

import TopBar from "./components/topbar/TopBar";
import Settings from "./screens/settings/Settings";

function App() {
  return (
    <>
      <TopBar />
      <Settings />

      {/** <Write /> */} {/** to writting ours posts */}
      {/** <Single /> */} {/** to show our page content */}
      {/** <Home /> */} {/** home page is to show everything we have on page */}
    </>
  );
}

export default App;
