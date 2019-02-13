import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Tile from "../components/Tile";

class Gallery extends Component {
  state = {
    sites: [],
    name: "",
    url: "",
    img: ""
  };

  componentDidMount() {
    this.loadSites();
  }

  loadSites = () => {
    API.getSites()
      .then(res =>
        this.setState({
          sites: res.data,
          name: "",
          url: "",
          img: ""
        })
      )
      .catch(err => console.log(err));
    console.log(this.state.sites.length);
  };

  render() {
    return (
      <Container fluid>
        {this.state.sites.length ? (
          <Row>
            {this.state.sites.map(site => (
              <Col size="md-4 sm-12" key={site._id}>
                <Tile>
                  <h1>{site.title} Site</h1>
                </Tile>
              </Col>
            ))}
          </Row>
        ) : (
          <h1>No Results to Display</h1>
        )}
      </Container>
    );
  }
}

export default Gallery;
