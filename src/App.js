import './App.css';
import { Page } from './components/Page';
import { Admin } from './components/Admin';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
