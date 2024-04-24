import "./App.css";
import {  RouterProvider } from "react-router-dom";
import routers from "./routing/MainRoute";
function App() {
  return (
    <div className="App">
      <RouterProvider router={routers} fallbackElement={"loading..."}/>
    </div>
  );
}

export default App;


