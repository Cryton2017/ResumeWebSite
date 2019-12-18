import React, { Component } from 'react';
import ReactPageScroller from "react-page-scroller";
import { Button } from 'reactstrap';
import { Pager } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css';
import './Portfolio.css';
import Intro from './Components/Intro/Intro';
import AboutMe from './Components/AboutMe/AboutMe';
import JobHistory from './Components/JobHistory/JobHistory';
import References from './Components/References/References';
import PastProjects from './Components/PastProjects/PastProjects';
import CurrProjects from './Components/CurProjects/CurProjects';
import FurtherDetails from './Components/FurtherDetails/FurtherDetails';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: null
    };

  }

  handlePageChange = number => {
    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 7; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </Pager.Item>,
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
          <FurtherDetails />
        </ReactPageScroller>
        {/* <Pager className="pagination-additional-class" bsSize="large">
          {pagesNumbers}
        </Pager> */}
      </React.Fragment>
        
      // </div>
    );
  }
}

export default Portfolio;
