import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Main.scss';

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { text } = this.props;

    return <main>{text}</main>;
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
