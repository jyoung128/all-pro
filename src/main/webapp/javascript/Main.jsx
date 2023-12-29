import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Pricing from "./Pricing.jsx";

import "../css/style.css";

function Layout() {
        return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src="images/AllProLogoRound.png"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
        );
    }

function Main() {
        return (
            <BrowserRouter>
                {" "}
                <Routes>
                    <Route
                        path="/all-pro?/src?/main?/resources?/static?/index.html?"
                        element={<Layout />}
                    >
                        <Route index element={<Home />} />
                        <Route path="Contact" element={<Contact />} />
                        <Route path="Pricing" element={<Pricing />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }

    createRoot(document.getElementById("react-mountpoint")).render(<Main />);