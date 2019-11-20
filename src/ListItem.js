import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class ListItem extends Component {
    render() {
        return (
            <div className="List-item">
                smth
            </div>
        );
    }
}

export default withAuthenticator(ListItem, true);
