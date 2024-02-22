import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


import "../css/style.css";

export default function Contact(){
    return (
        <>
            <div className="contact-form">
                <div>
                    <h2>How to find us:</h2>
                    <div className="contact-info">
                        <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=6665%20Huntley%20Rd%20Suite%20J%20Columbus+(All%20Pro)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        <div className="contact-details">
                            <p>6665 Huntley Rd<br/>Suite J<br/>Columbus, OH 43229</p>
                            <p>Phone: 614-396-9489</p>
                            <p>Email: allprotronix@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div>
                    <img src="images/AllProLogoRound.png" alt="" />
                </div>
                <div className="footer-list">
                    <h3>Sitemap:</h3>
                    <Link to="/">Home</Link>
                    <Link to="#">About</Link>
                    <Link to="/Pricing">Pricing</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
                <div className="footer-list">
                <h3>Contact:</h3>
                    <p>Phone: <a href="tel:+16143969489">614-396-9489</a></p>
                    <p>Email: <a href="mailto: allprotronix@gmail.com">allprotronix@gmail.com</a></p>
                </div>
                <div className="footer-list">
                    <h3>Address:</h3>
                    <p>6665 Huntley Rd<br/>Suite J<br/>Columbus, OH 43229</p>
                </div>
            </footer>
        </>
    )
}