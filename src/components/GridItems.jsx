import React, { Component } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default class GridItems extends Component {
  render() {
    return (
      <div class="container">
        <div>
         
            {this.createsections()}
          
        </div>
        <div class="d-flex justify-content-center p-5">
          <nav>
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
createsections() {
  var sections = ["Group benifits", "Life Insuarance","Travel Insuarance","Wealth Management","Financial Planning","News Update"];
  var secreturn =[];
  for (let j = 0; j < sections.length; j++) {
    secreturn.push(   
         <div ><div class="mt-5 mb-4"><span class="sectionAdjust">{sections[j]}<span class="ml-2">></span></span></div>
      <div
      class="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center uk-grid"
      uk-grid="true"
    > 
      
      {this.createCards(sections[j])}
      </div>
      </div>
    );
  }
  return secreturn;
}
  createCards(section) {
    //taking dummy list
    var list = this.listSourceDummy();    
    //create html
    var cards = [];
    
      for (let i = 0; i < list.length; i++) {
        if (list[i].sectionName == section) {
          cards.push(
            <div>
              <div class="uk-card uk-card-default uk-card-body">
                <img src={list[i].imgSrc} />
                <div class="card-details-outer">
                <div class="card-header-l">               
                <h6 class="card-header-UI" >{list[i].itemHeader}</h6>    
                </div>            
                <div class="card-details-l">
                <p class="card-details-UI">{list[i].itemDescription}</p>
                </div>
                </div>
              </div>
            </div>
          );
        }
      
    }
    return cards;
  }

  listSourceDummy() {
    var list = [
      {
        imgSrc: "/images/image2.png",
        itemHeader: "Group Benefits and Attracting",
        itemDescription: `A primary goal and challenge of many Canadian companies is the attraction and retention of top talent.`,
        sectionName: "Group benifits",
      },
      {
        imgSrc: "/images/image3.png",
        itemHeader: "Readers’ Choice Award Winner For",
        itemDescription: `Joy A. Adams, Founder and CEO of Covenant Wealth Financial Services has a mission:`,
        sectionName: "Group benifits",
      },
      {
        imgSrc: "/images/image4.png",
        itemHeader: "3 Things You Need To Know",
        itemDescription: `Life insurance should really take center stage when it comes to
        financial planning. Yes, we need cash flow`,
        sectionName: "Group benifits",
      },
      {
        imgSrc: "/images/image5.png",
        itemHeader: "3 Things You Need To Know",
        itemDescription: `Life insurance should really take center stage when it comes to
        financial planning. Yes, we need cash flow`,
        sectionName: "Life Insuarance",
      },  {
        imgSrc: "/images/image6.png",
        itemHeader: "3 Things You Need To Know",
        itemDescription: `Life insurance should really take center stage when it comes to
        financial planning. Yes, we need cash flow`,
        sectionName: "Life Insuarance",
      },  {
        imgSrc: "/images/image7.png",
        itemHeader: "3 Things You Need To Know",
        itemDescription: `Life insurance should really take center stage when it comes to
        financial planning. Yes, we need cash flow`,
        sectionName: "Life Insuarance",
      },
      {
        imgSrc: "/images/image8.png",
        itemHeader: "How To Reduce Your Debt",
        itemDescription: ` I recently answered a question on Quora from a 20-year-old who
        wanted to know if it was a good.`,
        sectionName: "Travel Insuarance",
      },
      {
        imgSrc: "/images/image9.png",
        itemHeader: "New Year’s resolutions for",
        itemDescription: `  Vowing to eat better this year? Some of the most common
        nutrition resolutions aren’t easy to keep.`,
        sectionName: "Travel Insuarance",
      },
      {
        imgSrc: "/images/image10.png",
        itemHeader: "Readers’ Choice Award Winner For",
        itemDescription: `Joy A. Adams, Founder and CEO of Covenant Wealth Financial
      Services has a mission.`,
        sectionName: "Travel Insuarance",
      },
      {
        imgSrc: "/images/image11.png",
        itemHeader: "Readers’ Choice Award Winner For",
        itemDescription: `Joy A. Adams, Founder and CEO of Covenant Wealth Financial
      Services has a mission.`,
        sectionName: "Wealth Management",
      },
      {
        imgSrc: "/images/image12.png",
        itemHeader: "Readers’ Choice Award Winner For",
        itemDescription: `Joy A. Adams, Founder and CEO of Covenant Wealth Financial
      Services has a mission.`,
        sectionName: "Wealth Management",
      },
      {
        imgSrc: "/images/image13.png",
        itemHeader: "Readers’ Choice Award Winner For",
        itemDescription: `Joy A. Adams, Founder and CEO of Covenant Wealth Financial
      Services has a mission.`,
        sectionName: "Wealth Management",
      },
      {
        imgSrc: "/images/image14.png",
        itemHeader: "Readers’ Choice Award Winner For",
        itemDescription: `Joy A. Adams, Founder and CEO of Covenant Wealth Financial
      Services has a mission.`,
      sectionName: "Financial Planning",
          },
      {
        imgSrc: "/images/image15.png",
        itemHeader: "Readers’ Choice Award Winner For",
        itemDescription: `Joy A. Adams, Founder and CEO of Covenant Wealth Financial
      Services has a mission.`,
        sectionName: "Financial Planning",
      },
      {
        imgSrc: "/images/image16.png",
        itemHeader: "Readers’ Choice Award Winner For",
        itemDescription: `Joy A. Adams, Founder and CEO of Covenant Wealth Financial
      Services has a mission.`,
        sectionName: "Financial Planning",
      },
      {
        imgSrc: "/images/image17.png",
        itemHeader: "Readers’ Choice Award Winner For",
        itemDescription: `Joy A. Adams, Founder and CEO of Covenant Wealth Financial
      Services has a mission.`,
        sectionName: "News Update",
      },
      {
        imgSrc: "/images/image18.png",
        itemHeader: "Readers’ Choice Award Winner For",
        itemDescription: `Joy A. Adams, Founder and CEO of Covenant Wealth Financial
      Services has a mission.`,
        sectionName: "News Update",
      },
      {
        imgSrc: "/images/image19.png",
        itemHeader: "Readers’ Choice Award Winner For",
        itemDescription: `Joy A. Adams, Founder and CEO of Covenant Wealth Financial
      Services has a mission.`,
        sectionName: "News Update",
      },
    
    ];
    return list;
  }
}
