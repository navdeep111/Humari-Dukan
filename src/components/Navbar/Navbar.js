import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";

export default function Navbar({handlesetsearch}) {
    return (
        <>
            <div className="navbar justify-content-evenly bg-dark-subtle position-sticky top-0 border border-dark">
                <Link to="/checkout/info"><h1><i className="bi bi-list"></i></h1></Link>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}><h3>HUMARI DUKAN</h3></Link>
                <div className="d-flex align-items-center">
                    <input onChange={handlesetsearch} className="form-control mx-3" style={{height:"40px"}}/> 
                <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
                    <h1><i className="bi bi-cart3"></i></h1></Link></div>
            </div>
        </>
    )
}