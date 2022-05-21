import logo from './logo.svg';
import { Routes, Route, Link, BrowserRouter as Router, } from "react-router-dom";
import About from './components/About';


// import './App.css';
import Search from './components/Search';
import Nav from './components/Nav';
import './css/main.css';
import './css/new.css';
import './css/responsive.css'

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Routes>
              <Route exact path="/" element={<Search />}>About</Route>
              <Route path="/about" element={<About />}></Route>

              
          </Routes>
      </div>
    </Router>

  );
}

export default App;
