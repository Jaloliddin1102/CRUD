import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../components/navbar/nav'
import CrudTable from '../components/crud/crud';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<CrudTable/>}/>
          <Route path='/user' element={<>crud</>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
