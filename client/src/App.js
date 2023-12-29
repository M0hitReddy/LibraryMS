// import logo from './logo.svg';
import './styles/Global.css';
import Login from './components/Login';
// import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard/:id" element={<DashBoard />} />

        </Routes>
      </div>
    </Router >
  );
}

export default App;
