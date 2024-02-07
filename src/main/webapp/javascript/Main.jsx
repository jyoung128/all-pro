import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';

import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Pricing from "./Pricing.jsx";

import "../css/style.css";

function Layout() {
        return (
        <>
            <header className="header">
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                    <Navbar.Brand>
                        <img src="images/AllProLogoRound.png"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Item>
                                <Nav.Link eventKey="1" as={Link} to="/">
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2" as={Link} to="/Pricing">
                                    Pricing
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3" as={Link} to="/Contact">
                                    Contact
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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