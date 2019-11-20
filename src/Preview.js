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
    id;
    constructor(props) {
        super(props);
        // let { id } = useParams();
        // this.id = id;
    }
    componentDidMount() {
        debugger
        let { id } = useParams();
        this.id = id;
    }
    static getDerivedStateFromProps() {
        debugger
        let { id } = useParams();

    }
    componentDidUpdate() {
        debugger
        let { id } = useParams();
    }
    render() {
        // let match = useRouteMatch();
        return (
            <div className="">
                This is simple text {this.id}
            </div>
        );
    }
}