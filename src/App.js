
import { RouterProvider } from "react-router-dom";
import "./App.css"
import { Router } from "./component/Router/Router";


function App() {
  
  return (
    
    <div className="App">
       <div className="blur" style={{top:'-18%',right:'0'}}></div>
       <div className="blur" style={{top:'36%',left:'-8rem'}}></div>
       <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;