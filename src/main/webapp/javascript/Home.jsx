import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

export default function Home(){
    return (
        <div>
            <section className="introduction">
                <div>
                    <h1>All Pro Electronic Service</h1>
                    <p>Full service consumer and pro audio electronics repair located in Columbus Ohio</p>
                    <ul>
                        <li> Audio Equipment</li>
                        <li> Consumer Electronics</li>
                        <li> Service Calls</li>
                    </ul>
                </div>
                <div className="intro-image">
                    <img src="images/marantz.png" alt="audio receiver"/>
                </div>
            </section>
            <section className="service-section">
                <h2>Service Offerings</h2>
                <div className="services">
                    <div>
                        <img src="images/guitar-amp.png" alt="fender guitar amplifier"/>
                        <details>
                            <summary>Music Gear</summary>
                            <ul>
                                <li>Instrument Amplifiers</li>
                                <li>Microphones</li>
                                <li>Keyboards</li>
                                <li>FX Pedals</li>
                            </ul>
                        </details>
                    </div>

                    <div>
                        <img src="images/tv.webp" alt="flat screen television"/>
                        <details>
                            <summary>Consumer Electronics</summary>
                            <ul>
                                <li>TVs</li>
                                <li>Media Players (DVD, CD, Etc.)</li>
                                <li>Arcade Cabinets</li>
                                <li>Radios</li>
                            </ul>
                        </details>
                    </div>

                    <div>
                        <img src="images/vintage-stereo.png" alt="Vintage Sony amplifier"/>
                        <details>
                            <summary>Vintage Audio</summary>
                            <ul>
                                <li>Audio Receivers</li>
                                <li>Turntables</li>
                                <li>Tape Machines</li>
                                <li>Speakers</li>
                            </ul>
                        </details>
                    </div>

                    <div>
                        <img src="images/mixer.webp" alt="Yamaha mixing board"/>
                        <details>
                            <summary>Live/Studio Audio Gear</summary>
                            <ul>
                                <li>Mixers</li>
                                <li>Power Amps</li>
                                <li>PA Speakers</li>
                                <li>DJ Controllers</li>
                            </ul>
                        </details>
                    </div>
                </div>
                <p>Don't see your repair need listed?  <Link to="/Contact"><button className="btn btn-secondary">Let's get in touch!</button></Link></p>
            </section>
            <footer>
                <div className="footer-brand">
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
        </div>
    )
}