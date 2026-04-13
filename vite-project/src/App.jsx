import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";

function Home(){
  return(
    <>
    <h1>Wellcome</h1>
  <Link  to="/about">Go to About</Link>
    </>
  
  )
}
function About(){
  return(
    <h2>AISHWRAYA</h2>
  )
}


function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element ={<About />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;