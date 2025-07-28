import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Layout from './layouts/Layout';

function App() {
  return (
    <Router basename='/my-portfolio'>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="skills" element={<Skills />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
