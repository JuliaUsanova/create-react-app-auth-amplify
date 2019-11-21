import React from 'react';
import './ListItem.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

export default function ListItem(props) {
    return (
        <div className="List-item-content">
            <span className="bold">Document Id: {props.id}</span>
            <span className="bold">User Id: {props.userId}</span>
            <a href={props.url}>{props.name}</a>
        </div>

    );
}