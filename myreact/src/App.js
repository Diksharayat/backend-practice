import Form from './form';
import Form1 from './form1';
import Register from './register';
import Login1 from './login1';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/form1" element={<Form1/>}/>
        <Route path="/login1" element={<Login1/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
