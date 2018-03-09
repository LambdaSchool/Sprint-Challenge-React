import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Button,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Col
} from "reactstrap";

import "./CharacterComponents.css";

class CharacterComponent extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <Col sm={4}>
        <Card className="charCards m-3">
          <CardBody>
            <CardTitle>{this.props.char.name}</CardTitle>

            <Collapse isOpen={this.state.collapse}>
              <CardText>Birth Year: {this.props.char.birth_year}</CardText>
              <CardText>Height: {this.props.char.height}</CardText>
              <CardText>Mass: {this.props.char.mass}</CardText>
              <CardText>Hair Color: {this.props.char.hair_color}</CardText>
              <CardText>Skin Color: {this.props.char.skin_color}</CardText>
              <CardText>Eye Color: {this.props.char.eye_color}</CardText>
              <CardText>Gender: {this.props.char.gender}</CardText>
              <CardText>Home World: {this.props.char.homeworld}</CardText>
              <CardText>Films: {this.props.char.films}</CardText>
              <CardText>Species: {this.props.char.species}</CardText>
            </Collapse>
            <Button className="" onClick={this.toggle}>
              Read More
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

CharacterComponent.propTypes = {};

export default CharacterComponent;
