import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return <div className="">
    <BrowserRouter >
      {/* <Sidebar/> */}
      {/* <Navbar/> */}
      <Routes>
        <Route path="/login" element={} />
        <Route path="/dashboard" element={} />
        <Route path="/carlist" element={} />
        <Route path="/carlist/add_new_car" element={} />
        <Route path='*' element={} />
      </Routes>
    </BrowserRouter >
  </div>
}