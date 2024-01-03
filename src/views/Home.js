
import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Home from './Home/Home';
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header"
import './app.css'

function Homes() {
  return (
    <>
      <div className="cont"> 
            <Header/>         
            <Home/>
            <Footer/>
      </div>
    </>
  );
}

export default Homes;
