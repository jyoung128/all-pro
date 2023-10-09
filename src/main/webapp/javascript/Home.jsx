import React, { useState, useEffect } from "react";

import "../css/style.css";

export default function Home(){
    return (
        <div>
            <section className="introduction">
                <div>
                    <h1>All Pro</h1>
                    <p>Full service consumer and pro audio electronics repair located in Columbus Ohio</p>
                    <ul>
                        <li> Audio Equipment</li>
                        <li> Consumer Electronics</li>
                        <li> Service Calls</li>
                    </ul>
                </div>
                <div>
                    <img src="images/marantz.webp" alt="audio receiver"/>
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
                <p>Don't see your repair need listed? Let's get in touch!</p>
            </section>
        </div>
    )
}