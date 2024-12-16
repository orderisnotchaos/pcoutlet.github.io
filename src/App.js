
import './App.css';

import Index from './routes/Index/Index';
import Admin from './routes/Admin/Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path = "/" element = {<Index />} />
            <Route exact path = "/admin" element = {<Admin />} />

          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
