
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"
function App() {

  return <div>
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </div>
}

function Layout(){
  return <div>
     <Link to={"/"}>Allen</Link>
      |
      <Link to={"/neet/online-coaching-class-11"}>Class11</Link>
      |
      <Link to={"/neet/online-coaching-class-12"}>Class12</Link>
     <Outlet/>
     Footer
  </div>
}
function Landing() {
  return <div>
    Welcome to Allen
  </div>
}

function Class11Program() {
  return <div>
    Prepare for NEET Programs for Class 11th
  </div>
}
function Class12Program() {
  return <div>
    Prepare for NEET Programs for Class 12th
  </div>
}

function ErrorPage() {
  return <div>
    Sorry !! Page doesn't Exist
  </div>
}
export default App
