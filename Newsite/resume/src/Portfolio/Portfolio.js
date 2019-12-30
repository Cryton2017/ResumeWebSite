import React, { Component } from 'react';
import ReactPageScroller from "react-page-scroller";
import { Nav, 
        NavItem, 
        NavLink } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './Portfolio.css';
import Intro from './Components/Intro/Intro';
import AboutMe from './Components/AboutMe/AboutMe';
import JobHistory from './Components/JobHistory/JobHistory';
import References from './Components/References/References';
import PastProjects from './Components/PastProjects/PastProjects';
import CurrProjects from './Components/CurProjects/CurProjects';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      pageCont: []
    };

  }

  buildPage(){
    const match = window.matchMedia(`(max-width: 767px)`);
    if( match.matches){
      const pageCont = this.MobileNavigation();
      return [...pageCont];
    }else{
      const pageCont = this.DesktopNavigation();
      return [...pageCont];
    }
  }

  DesktopNavigation(){
    const navSection = [];
    const pageNumbers = this.getPagesNumbers();

    navSection.push(
      <React.Fragment>
        <ReactPageScroller
        pageOnChange={this.handlePageChange}
        customPageNumber={this.state.currentPage}>
          <Intro />
          <AboutMe />
          <JobHistory />
          <References />
          <PastProjects />
          <CurrProjects />
        </ReactPageScroller>
        <Nav pills className="nav-section" bsSize="large">
          {pageNumbers}
        </Nav>
      </React.Fragment>
    );

    return [...navSection];
  }

  getPagesNumbers = () => {
    const pageNumbers = [];
    var pageTitles = ["Intro", "About Me", "Job History", "References", "Past Projects", "Current Projects", "Further Details"];

    for (let i = 0; i <= 5; i++) {
      pageNumbers.push(
        <NavItem className="navItemDesign">
          <strong><NavLink className="navLinkDesign" href="#" onClick={() => this.handlePageChange(i)}><p id={i}>{pageTitles[i]}</p></NavLink></strong>
        </NavItem>
      );
    }

    return [...pageNumbers];
  };

  handlePageChange = number => {
    if(number === 0){
      document.getElementById("0").style.borderBottom = '2px solid white';
      document.getElementById("1").style.borderBottom = '0px';
      document.getElementById("2").style.borderBottom = '0px';
      document.getElementById("3").style.borderBottom = '0px';
      document.getElementById("4").style.borderBottom = '0px';
      document.getElementById("5").style.borderBottom = '0px';
    }else if(number === 1){
      document.getElementById("0").style.borderBottom = '0px';
      document.getElementById("1").style.borderBottom = '2px solid white';
      document.getElementById("2").style.borderBottom = '0px';
      document.getElementById("3").style.borderBottom = '0px';
      document.getElementById("4").style.borderBottom = '0px';
      document.getElementById("5").style.borderBottom = '0px';
    }else if(number === 2){
      document.getElementById("0").style.borderBottom = '0px';
      document.getElementById("1").style.borderBottom = '0px';
      document.getElementById("2").style.borderBottom = '2px solid white';
      document.getElementById("3").style.borderBottom = '0px';
      document.getElementById("4").style.borderBottom = '0px';
      document.getElementById("5").style.borderBottom = '0px';
    }else if(number === 3){
      document.getElementById("0").style.borderBottom = '0px';
      document.getElementById("1").style.borderBottom = '0px';
      document.getElementById("2").style.borderBottom = '0px';
      document.getElementById("3").style.borderBottom = '2px solid white';
      document.getElementById("4").style.borderBottom = '0px';
      document.getElementById("5").style.borderBottom = '0px';
    }else if(number === 4){
      document.getElementById("0").style.borderBottom = '0px';
      document.getElementById("1").style.borderBottom = '0px';
      document.getElementById("2").style.borderBottom = '0px';
      document.getElementById("3").style.borderBottom = '0px';
      document.getElementById("4").style.borderBottom = '2px solid white';
      document.getElementById("5").style.borderBottom = '0px';
    }else if(number === 5){
      document.getElementById("0").style.borderBottom = '0px';
      document.getElementById("1").style.borderBottom = '0px';
      document.getElementById("2").style.borderBottom = '0px';
      document.getElementById("3").style.borderBottom = '0px';
      document.getElementById("4").style.borderBottom = '0px';
      document.getElementById("5").style.borderBottom = '2px solid white';
    }

    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

  MobileNavigation(){
    const navSection = [];
    const pageNumbers = this.getPageButtons();

    navSection.push(
      <React.Fragment>
        <ReactPageScroller
          blockScrollUp={true}
          blockScrollDown={true}
          customPageNumber={this.state.currentPage}>
          <Intro />
          <AboutMe />
          <JobHistory />
          <References />
          <PastProjects />
          <CurrProjects />
        </ReactPageScroller>
        <Nav pills className="nav-section" bsSize="large">
          {pageNumbers}
        </Nav>
      </React.Fragment>
    );

    return [...navSection];
  }

  getPageButtons = () => {
    const pageNumbers = [];

    pageNumbers.push(
      <div className="btnCont">
        <NavItem className="navItemDesign">
          <strong><NavLink className="navLinkDesign" href="#" onClick={() => this.changePage("Prev")}><p>Previous</p></NavLink></strong>
        </NavItem>
        <NavItem className="navItemDesign">
          <strong><NavLink className="navLinkDesign" href="#" onClick={() => this.changePage("Next")}><p>Next</p></NavLink></strong>
        </NavItem>
      </div>
    );

    return [...pageNumbers];
  };

  changePage = direction => {
    var pageNum = this.state.currentPage;

    if(direction === "Prev"){
      if(pageNum === null || pageNum === 0){
        alert("On First Page!");
      }else{
        pageNum = pageNum - 1;
        this.handlePageChangeMobile(pageNum)
      }
    }else if(direction === "Next"){
      if(pageNum === 5){
        alert("On Last Page!");
      }else{
        pageNum = pageNum + 1;
        this.handlePageChangeMobile(pageNum)
      }
    }
  }

  handlePageChangeMobile = number => {
    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

  componentDidMount(){
    document.title = "Christopher Littlewood - Portfolio";
  }

  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  }
  
  render() {
    const navigationSection = this.buildPage();

    return (
      <div>
        {navigationSection}
      </div>
        
    );
  }
}

export default Portfolio;
