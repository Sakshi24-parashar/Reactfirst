import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Education from './component/Education'
import Accomplishment from './component/Accomplishment';
import Certification from './component/Certification';
import Connect from './component/Connect';
import Contact from './component/Contact'

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/Connect' element={<Connect></Connect>}></Route>
        <Route path='/' element={<Navbar></Navbar>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Skills' element={<Skills></Skills>}></Route>
        <Route path='/Projects' element={<Projects></Projects>}></Route>
        <Route path='/Education' element={<Education></Education>}></Route>
        <Route path='/Accomplishment' element={<Accomplishment></Accomplishment>}></Route>
        <Route path='/Certification' element={<Certification></Certification>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
      </Routes>
         
    </div>
  );
}

export default App;
