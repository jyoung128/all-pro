import React, { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./Home.jsx";
import Contact from "./Contact.jsx";

import "../css/style.css";

function Layout() {
        return (
        <>
            <header className="header">
                <div className="logo">
                
                </div>
                <nav className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/Contact">Contact</Link>
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
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }

    createRoot(document.getElementById("react-mountpoint")).render(<Main />);