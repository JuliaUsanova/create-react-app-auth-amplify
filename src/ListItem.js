import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

export function ListItem(props) {
    return (
        <div>
            <span>This is text: {this.props.name}</span>, <span>This is id: {this.props.id}</span>
        </div>
    );
}