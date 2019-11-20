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

export default function Preview(props) {
    let { id } = useParams();

    return (
            <div className="">
                This is simple text {id}
            </div>
        );
}