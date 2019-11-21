import React from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import './DocPreview.css';
import {useParams} from 'react-router-dom';


Amplify.configure(aws_exports);

const Preview = (props) => {
    let { id } = useParams();
    debugger
    return (
        <div className="Doc-preview">
            <div>{props.documentText}</div>
            <h4>Skills</h4>
            <ul>
                {props.documentSkills.map((skill) => <li>{skill}</li>)}
            </ul>
        </div>
    );
};

export default Preview;