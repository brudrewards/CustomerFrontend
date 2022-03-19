import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Fade } from 'react-awesome-reveal';
import HomeScreen from './screens/HomeScreen';
import Header from './Header';
import Footer from './Footer';
import SignupScreen from './screens/SignupScreen';
import AboutBrudScreen from './screens/AboutBrudScreen';
import CafePartners from './screens/CafePartners';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><HomeScreen /></>} />
        <Route path="/account/create" element={<SignupScreen />}></Route>
        <Route path="/cafePartners" element={<CafePartners />}></Route>
        <Route path="/aboutbrud" element={<AboutBrudScreen />}>
        
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
