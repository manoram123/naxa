import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Maps from './pages/Maps';
import Form from './pages/Form';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/map" element={<Maps />}></Route>
        <Route exact path="/form" element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
