import { Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";


function App() {
  return (
    <>
      <nav style={{ marginBottom: "20px"}}>
        <Link to = "/">Home</Link> | <Link to = "/about">About</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
