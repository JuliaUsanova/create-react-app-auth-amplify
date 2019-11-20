import React, { Component } from 'react';
import logo from './logo.svg';
import './List.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import ListItem from "./ListItem";
Amplify.configure(aws_exports);




export default class List extends Component {
    render(props) {
        let array = [
            {name: 'alaal', id: 1},
            {name: 'sdfgtg', id: 2},
            {name: 'ytrdfs', id: 3},
            {name: 'trsrwrf', id: 4},
            {name: 'wfregq', id: 5},
        ];
        console.log(JSON.stringify(props));
        return (
            <div className="List">
                <div className="List-body">
                    <div>
                        {array.map(c => <ListItem name={c.id} id={c.name} />)}
                    </div>
                </div>
            </div>
        );
    }
}
