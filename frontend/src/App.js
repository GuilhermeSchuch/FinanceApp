// CSS
import './App.css';

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from './pages/Auth/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route
              path='/login'
              element={<Login />}
            ></Route>


          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
