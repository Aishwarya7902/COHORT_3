
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Home} from "./pages/Home"
function App() {
  
  return (
    <div>
       <BrowserRouter>
         <Routes>
           <Route path="/landing" element={<Home/>}></Route>
         </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
