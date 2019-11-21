import React from 'react';
import './ListItem.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import axios from 'axios';

Amplify.configure(aws_exports);

export default function ListItem({ id, userId, name, onClickHandler }) {
    return (
        <div className="List-item-content">
            <span className="bold">Document Id: {id}</span>
            <span className="bold">User Id: {userId}</span>
            <span className="link" onClick={onClickHandler}>{name}</span>
        </div>
    );
}