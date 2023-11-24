import Profile from "./pages /profile/Profile";
import Home from "./pages /home/Home"
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from "./pages /login/Login";
import Register from "./pages /register/Register";

function App() {
  return( 
    <>
      <Router>
        <Routes>
          <Route index element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>  
        </Routes>
      </Router>
    </>
  );
}

export default App;