import './App.css';

import { Routes, Route } from "react-router-dom";
import Navbar from './Base/ui/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path='/'/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
