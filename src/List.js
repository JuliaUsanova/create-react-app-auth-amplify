import React, { Component } from 'react';
import logo from './logo.svg';
import './List.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import ListItem from "./ListItem";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Preview from "./Preview";
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
            <Router>
                <div className="List">
                    <ul className="List-body">
                        <li className="List-item">
                            {array.map(c => <Link to={`/${c.id}`}><ListItem name={c.id} id={c.name} /></Link>)}
                        </li>
                    </ul>

                    <Switch>
                        {array.map(c =>  <Route path="/:id"><Preview /></Route>)}
                    </Switch>
                </div>
            </Router>
        );
    }
}
