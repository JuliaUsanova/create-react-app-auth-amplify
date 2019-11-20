import React, {Component} from 'react';
import './App.css';
import {withAuthenticator} from 'aws-amplify-react'
import Amplify, {Auth} from 'aws-amplify';
import aws_exports from './aws-exports';
import List from "./List";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

Amplify.configure(aws_exports);

export default class Preview extends Component {
    render() {
        let { TopicId } = useParams();
        let match = useRouteMatch();
        return (
            <div className="">
                This is simple text {TopicId}
                <p>
                    <Link to="/">Go To List</Link>
                </p>

                <Switch>
                    <Route path="/">
                        <List />
                    </Route>
                </Switch>
            </div>
        );
    }
}