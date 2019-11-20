import React, {Component} from 'react';
import './App.css';
import ReactDOM from "react-dom";
import {withAuthenticator} from 'aws-amplify-react'
import Amplify, {Auth} from 'aws-amplify';
import aws_exports from './aws-exports';
import List from "./List";
// import {useParams} from 'react-router';
import {useParams} from 'react-router-dom';



Amplify.configure(aws_exports);

 const Preview = (props) => {

    let { id } = useParams();

    return (
            <div>
                This is simple text {id}
            </div>
        );
};