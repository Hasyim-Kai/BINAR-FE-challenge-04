import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CarList from './pages/CarList';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import SearchPage from './pages/SearchPage';

export default function App(): JSX.Element {
  return <BrowserRouter >
    <Navbar />
    {/* HERE IS THE MAIN CONTENT */}
    <main>
      <Routes>
        <Route index element={<SearchPage />} />
        <Route path="search-result" element={<Dashboard />} />
        <Route path="car-rent-detail" element={<CarList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter >
}