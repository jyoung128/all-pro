import React, { useState, useEffect } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

import "../css/style.css";

function Layout() {
        return (
        <>
            <header className="header">
                <nav className="navigation">
                    <Link to="/">Home</Link>
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
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }

    createRoot(document.getElementById("react-mountpoint")).render(<Main />);