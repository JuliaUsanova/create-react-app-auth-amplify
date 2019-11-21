import React from 'react';
import './ListItem.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import axios from 'axios';

Amplify.configure(aws_exports);

export default function ListItem(props) {
    debugger
    const clickHandler = () => {
        debugger
        axios(props.url)
            .then( (response) => {
                debugger
                return response.text()
            } )
            .then( text => console.log(text) )
    };
    return (
        <div className="List-item-content">
            <span className="bold">Document Id: {props.id}</span>
            <span className="bold">User Id: {props.userId}</span>
            <span className="link" onClick={clickHandler}>{props.name}</span>
        </div>

    );
}