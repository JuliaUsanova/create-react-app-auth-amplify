import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

export function ListItem(props) {
    return (
        <div>
            <span>This is text: {this.props.name}</span>, <span>This is id: {this.props.id}</span>
        </div>
    );
}