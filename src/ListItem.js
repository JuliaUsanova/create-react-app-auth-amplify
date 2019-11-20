import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

export default function ListItem(props) {
    return (
            <span>This is id: {props.id}</span>
    );
}