import React, { Component } from "react";
import "fontsource-roboto";


class Content extends Component {
  render() {
    return (
      <div class="container">
        <div class="row col-sm-8">
          <h1 class="main-head">Financial Management Insight</h1>
          <p class="mainDetails mt-3 mb-5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd
          </p>
        </div>
        <div  class="row"> 
          <div class="col-sm-9"> 
            <img
              src="/images/image1.png"
              alt="image1"
              style={{ width: "893px" }}
            />
          </div>

          <div class="col-sm-3"> 
          <div class="side-box1">
            <h5 class="sidebarHeader">Subscribe to our news Letter</h5>
            <p class="sidebarpara">Get the latest update and news</p>

            <div>
              <form>
                <input
                  type="email"
                  placeholder="Enter email address"
                  class="col-sm-12"
                
                />
                <br />
                <div style={{ paddingTop: "10px" }}>
                  <button type="button" class="btn btn-primary col-sm-12">
                    SignUp
                  </button>
                </div>
              </form>
            </div>
</div>
            <div class="side-box2">
              <h5 class="sidebarHeader">Master your cashflow</h5>
              <p class="sidebarpara">
                A little planning goes a long way. Get tips and guidance on
                creating your ultimate cash flow plan.
              </p>
              <button type="button" class="btn btn-primary">
                Get Your Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
