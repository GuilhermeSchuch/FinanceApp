// CSS
import './App.css';

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from './components/Navbar/Navbar';

// Pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path='/login'
              element={<Login />}
            >
            </Route>

            <Route
              path='/register'
              element={<Register />}
            >
            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
