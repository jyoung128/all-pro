import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

export default function Pricing(){
    return(
        <>
            <div className="pricing-tables">
                <h1>Pricing Guide</h1>
                <table>
                    <tr>
                        <th>Bench Fee</th>
                        <th>Labor</th>
                        <th>Replacement Parts</th>
                        <th>Optional Rush Fee</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>$65.00 USD</td>
                        <td>$65.00 USD per hour</td>
                        <td>Cost of replacement parts (if any)</td>
                        <td>$65.00 USD</td>
                        <td>Bench Fee + Labor + Parts + Rush Fee (if requested)</td>
                    </tr>
                </table>
                <br/>
                <h2>Examples</h2>
                <table>
                    <tr>
                        <th>Bench Fee</th>
                        <th>Labor</th>
                        <th>Replacement Parts</th>
                        <th>Optional Rush Fee</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>$65.00</td>
                        <td>$65.00 * 2 hours</td>
                        <td>$37.81</td>
                        <td>$0</td>
                        <td>$232.81</td>
                    </tr>
                    <tr>
                        <td>$65.00</td>
                        <td>$65.00 * 1 hour</td>
                        <td>$0</td>
                        <td>$65.00</td>
                        <td>$195.00</td>
                    </tr>
                    <tr>
                        <td>$65.00</td>
                        <td>$65.00 * 0 hours</td>
                        <td>$0</td>
                        <td>$0</td>
                        <td>$65.00</td>
                    </tr>
                </table>
                <p>Note: Bench fee still applies if the customer does not wish to continue repairs after the initial inspection of the piece (see price example 3).</p>
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