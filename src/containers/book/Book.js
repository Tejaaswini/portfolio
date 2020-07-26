import React from "react";
import { Fade } from "react-reveal";

import "./Book.css";

export default function Book() {
  return (
    <div className="book-bg">
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="book">
          <div className="book-main">
            <div className="book-image-div">
              <p className="book-title" align="center">Some Flexing ᕕ(¬ ͜ ¬)ᕗ </p>
              <a href="https://www.shroffpublishers.com/books/9789352138852/" target="_blank"><img src={require("../../assets/images/book.jpg")} /></a>
            </div>
            <p className="book-desc">
              Ever gone through hundred and ten resources for blockchain and still
              not able to figure out where to start off. Well this book would lay
              the foundation for most of the concepts that you would require to at
              least get started somewhere and scratch the surface of this hyped
              technology. 
              <br/>
              <br/>
              From the different underlying technicalities to the
              diversity of platforms, from the variety of scenarios where
              Blockchain fits to understanding when it would be an overkill, from
              learning the two most important platforms to getting you started for
              creating your own applications on top of them, from various simple
              humorous references to intriguing exercises, this book aims to not
              only make you feel comfortable with the technology but also
              confident enough to ponder more about it.
            </p>
            <div className="book-text-div">
              <p> Buy Our book, fund our coffee!😋 <br/>(Click on the Book!)</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
