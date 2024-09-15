import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';  
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
