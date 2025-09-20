import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';
import UserInfo from './components/pages/NestedRoutes/UserInfo';
import Settings from './components/pages/NestedRoutes/Settings';
import NotFound from './components/pages/NotFound';
import User from './components/pages/User';
import Counter from './features/counter/counter';
import CounterReflection from './features/counter/counterReflection';
import Login from './components/pages/Login';
import ProtectedRoute from './components/protectedRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/:id/:name" element={<ProtectedRoute><User /></ProtectedRoute>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counterReflection" element={<CounterReflection />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="userInfo" element={<UserInfo />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
