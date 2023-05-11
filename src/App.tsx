import React from "react";
import {Home} from "./Home";
import {Cars} from "./Cars";
import {Contacts} from "./Contacts";
import {Login} from "./Login";
import {Bmw} from "./Bmw";
import {Audi} from "./Audi";
import {Mercedes} from "./Mercedes";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <>
    <nav className="page">
        <ul className="navbar" >
            <div className="navbar_cont">
                <li className="navbar_item">
                  <Link className="navbar_links" to="/">Home</Link>
                </li>
                <li className="navbar_item">
                  <Link className="navbar_links" to="/cars">Our Cars</Link>
                </li>
                <li className="navbar_item">
                  <Link className="navbar_links" to="/contacts">Contacts</Link>
                </li>
                <li className="navbar_item">
                  <Link className="navbar_links" to="/login">Log In</Link>
                </li>
            </div>
        </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cars" element={<Cars />}/>
      <Route path="/contacts" element={<Contacts />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/cars/bmw" element={<Bmw />}/>
      <Route path="/cars/audi" element={<Audi />}/>
      <Route path="/cars/mercedes" element={<Mercedes />}/>
    </Routes> 
    </>
  );
}