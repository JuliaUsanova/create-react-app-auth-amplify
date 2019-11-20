import React, { Component } from 'react';
import logo from './logo.svg';
import './List.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import ListItem from "./ListItem";
// import {useParams} from 'react-router';
import {useParams} from 'react-router-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
// import Preview from "./Preview";
Amplify.configure(aws_exports);

//
// function Preview(props) {
//     debugger
//     let { id } = useParams();
//
//     return (
//         <div className="">
//             This is simple text {id}
//         </div>
//     );
// }

const Preview = (props) => {

    let { id } = useParams();

    return (
        <div >
            This is simple text {id}
        </div>
    );
};

export default function List() {
        let array = [
            {name: 'alaal', id: 1},
            {name: 'sdfgtg', id: 2},
            {name: 'ytrdfs', id: 3},
            {name: 'trsrwrf', id: 4},
            {name: 'wfregq', id: 5},
        ];

        return (
            <div>
                <div className="List">
                    <ul className="List-body">
                        {array.map(c => {
                            return (
                                <li className="List-item" key={c.id}>
                                    <Link to={`/${c.id}`}>
                                        <ListItem id={c.id}  />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Switch>
                    <Route path={`/:id`}><Preview /></Route>
                </Switch>
            </div>

        );
}
// export default withAuthenticator(List, true);
