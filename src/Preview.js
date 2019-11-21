import React from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import './DocPreview.css';
import {useParams} from 'react-router-dom';


Amplify.configure(aws_exports);

const Preview = (props) => {
    let { id } = useParams();

    return (
        <div className="Doc-preview">
            This is simple text {id}
        </div>
    );
};

export default Preview;