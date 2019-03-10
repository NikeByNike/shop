import React, { Component } from "react";
import { connect } from "react-redux";

import './about.css';

class About extends Component {

  render() {
    return (
      <>
        <section className="sec1">
          <div className="firstContent">
            <h4><i>Artisaire Presents</i></h4>
            <h1><span>The Wedding Shop</span></h1>
            <h4>Curated Wedding Heirlooms For The Artful Bride</h4>
          </div>
        </section>
        <section className="sec1">
          <h2>Have You Found The One?</h2>
          <h5>No wedding invitation is complete without the perfect wax seal!</h5>
          <h4>Browse our collection of over 100 designer monograms, signature designs and save the date wax seals to find <b>the perfect one</b> for your big day!</h4>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(About);
