import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";

class Header extends Component {
  render() {
    return (
      <div>
        <nav uk-navbar="true" class="navbackground">
            <div class="row col-sm-12">
            <div class="col-sm-1"></div>
            <div class="col-sm-1"></div>
            <div class="col-sm-4 mt-4">
            <img src="/images/image25.png" alt="image25" />
            </div>
            <div class="col-sm-6">
            <ul class="uk-navbar-nav">
              <li>
                <a href="#">
                  <span class="linkfont">Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="linkfont">About</span>
                </a>
              </li>
              <li>
                <a href="#" class="uk-active ">
                  <span class="linkfont">Insight</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="linkfont">Service</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="linkfont">Events</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="linkfont">Contactus</span>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <SearchIcon />
                </a>
              </li>
            </ul>
            </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default Header;
