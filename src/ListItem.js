import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

export default class ListItem extends Component {
    render(props) {
        return (
            <div className="List-item">
                <span>This is text: {props.name}</span><br>
                <span>This is id: {props.id}</span><br>
            </div>
        );
    }
}