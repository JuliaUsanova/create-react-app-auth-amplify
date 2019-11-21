import * as React from 'react';
import './List.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import ListItem from "./ListItem";
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Preview from "./Preview";

Amplify.configure(aws_exports);

function getData() {
    return axios.get(`https://neos5iulbh.execute-api.us-east-1.amazonaws.com/prod/get-all-documents`);
}

export function List() {
    const initialUserState = {
        list: [],
        loading: ''
    };
    const [list, setList] = React.useState(initialUserState);
    const [documentText, setDocumentText] = React.useState('');
    const [documentSkills, setDocumentSkills] = React.useState([]);

    React.useEffect(() => {
        const getList = async () => {
            let data = await getData();
            setList({list: data.data.userDocs, loading: false});
        };
        getList();
    }, []);

    const onClickHandler = (event) => {
        let docName = event.target.innerHTML;
        let document = list.list.find((doc) => {
            return doc.documentName === docName;
        });
        setDocumentText(document.text);
        setDocumentSkills(document.skills);
        debugger
    };
    debugger
    return list.loading ? (
        <div>Loading...</div>
    ) : (
            <div>
                <div className="List">
                    <ul className="List-body">
                        {list.list.map(listItem => {
                            return (
                                <li className="List-item" key={listItem.documentId}>
                                    <Link to={`/${listItem.documentId}`}>
                                        <ListItem
                                            id={listItem.documentId}
                                            text={listItem.text}
                                            skills={listItem.skills}
                                            name={listItem.documentName}
                                            url={listItem.documentUrl}
                                            userId={listItem.userId}
                                            onClickHandler={onClickHandler}
                                        />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Switch>
                    <Route path={`/:id`}><Preview documentText={documentText}  documentSkills={documentSkills}/></Route>
                </Switch>
            </div>

        );
}
export default withAuthenticator(List, true);
