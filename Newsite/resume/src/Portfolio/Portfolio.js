import React, { Component } from 'react';
import ReactPageScroller from "react-page-scroller";
import { Nav, 
        NavItem, 
        Dropdown, 
        DropdownItem, 
        DropdownToggle, 
        DropdownMenu, 
        NavLink } from 'reactstrap';
import { Pager } from "react-bootstrap";

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
      currentPage: null
    };

  }

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

  getPagesNumbers = () => {
    const pageNumbers = [];
    var pageTitles = ["Intro", "About Me", "Job History", "References", "Past Projects", "Current Projects", "Further Details"];
    var pageNames = ["Intro", "AboutMe", "JobHistory", "References", "PastProjects", "CurProjects", "FurtherDetails"];

    for (let i = 0; i <= 5; i++) {
      pageNumbers.push(
        <NavItem className="navItemDesign">
          <strong><NavLink className="navLinkDesign" href="#" onClick={() => this.handlePageChange(i)}><p  id={i}>{pageTitles[i]}</p></NavLink></strong>
        </NavItem>
      );
    }

    return [...pageNumbers];
  };

  componentDidMount(){
    document.title = "Christopher Littlewood - Portfolio"
  }

  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  }
  
  render() {
    const pagesNumbers = this.getPagesNumbers();

    return (
      // <div>
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
        <Nav pills className="pagination-additional-class" bsSize="large"n>
          {pagesNumbers}
        </Nav>
      </React.Fragment>
        
      // </div>
    );
  }
}

export default Portfolio;
