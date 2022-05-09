import React, { useContext } from "react";
import NavbarComponent from "./Navbar";
import Footer from "./Footer";
import { Container, Carousel } from "react-bootstrap";
import { themecontxt } from "../Context/creatContext";
import "../Style/home.css";
function Home() {
  let value = useContext(themecontxt);
  console.log(value);
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className="parant ">
        {/* <Container> */}
        <Carousel >
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={require("../Images/slide_01.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Best Offer</h3>
              <h2>New Arrivals On Sale</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Images/slide_02.jpg")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Flash Deals</h3>
              <h2>Get your best products</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Images/slide_03.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Last Minute</h3>
              <h2>Grab last minute deals</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* </Container> */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
