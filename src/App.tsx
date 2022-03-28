import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddNewCar from './pages/AddNewCar';
import CarList from './pages/CarList';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default function App() : JSX.Element {
  return <div className="flex">
    <BrowserRouter >
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/carlist/add_new_car" element={<AddNewCar />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  </div>
}