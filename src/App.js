import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import EducationExperience from './Pages/education & experience';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(!darkMode);
    return (
        <BrowserRouter basename="/Portfolio">
            <Routes>
                <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
                <Route path="/about" element={<About darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
                {/* Add more routes here as needed */}
                <Route path="/skills" element={<Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
                <Route path="/projects" element={<Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
                <Route path="/contact" element={<Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} />
                <Route path = '/education-experience' element = {<EducationExperience darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
