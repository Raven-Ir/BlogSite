import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Unothorized from './pages/Unothorized';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Blogs/>}/>
          <Route path="/unothorized" element={<Unothorized/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
