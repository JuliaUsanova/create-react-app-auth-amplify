import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

export default class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>This is text: {this.props.name}, This is id: {this.props.id}</span>
        );
    }
}