import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import List from "./List";
import { BrowserRouter } from 'react-router-dom'
Amplify.configure(aws_exports);

export default function App() {
    return (
                <List />
    );
}

// export default withAuthenticator(App, true);
