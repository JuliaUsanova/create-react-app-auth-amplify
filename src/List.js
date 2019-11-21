import React, {useEffect, useState} from 'react';
import './List.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import ListItem from "./ListItem";
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Preview from "./Preview";

Amplify.configure(aws_exports);


/*
userDocs: [
{
userId: "21bdd072-7750-4c64-aa67-5f42cc69000f",
documentId: "3ed56522-0603-4e91-85b7-90c436ea624b",
documentName: "my personal cv.docx",
documentExtension: "docx",
documentUrl: "https://coobappstack-coobusercvdocumentbucket329b41a6-vkyyhisteb9f.s3.amazonaws.com/21bdd072-7750-4c64-aa67-5f42cc69000f/3ed56522-0603-4e91-85b7-90c436ea624b.docx?AWSAccessKeyId=ASIA22A5X2YDJ6ZQSQDG&Signature=vMpDkzYSZFulT%2BDL5Qm8OhipsZ8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIArSXyhUegTZYwkGNPCT1GWDClIq46bKeNlij2jgKHeAAiEAsYXkXliuKZ3cYEljpiTVmdm8Ccg1gdYkEkooCDqWZ0oqgAII6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3NDMwOTE3MjE3MzQiDMBz7dHTV%2BXsv436uyrUAR%2BWlVpaOfNrL1Tm4JcI6S3gcUdkHKXvRCkM8qsz2DAUF%2Frloh8%2Bl9qXHT5tsBl0tQZBMD8gpmCF8KqB10aaVh0%2BxrRgM42mkACOUzjTEDuRiYQEKvU8PsJeJlk%2BrbrTRav%2BuIvKJ1AsnM3eT68uF3eJ02d4PyfnuB58huf7sj%2BaKDHCjHri3eRGnj1Tfky1URvoSGFuHfEhHzYH4ZUKa35bFvCWSwfk1P98d0Vn6Tp0gJ9f8SD23KH6fFpKhQyrY1EPpkizz1ILjxVNr8Y4wjUK368GMITt2O4FOuABfBqIvPpFKzt5INc2oJicu9H1ePY3YVGbvVIt%2B%2BDyZUPLoQJAx9UDX0cxzlR8GiF%2BADQsI8qQ4uHcCnCDQ1lyIB6zc%2FC%2FUZdFUMr6Ar42l41abTkFK8saApXQ9ri%2BcV%2BsngmGcWHXBg2aClfiv4jlCV3pGCT4kxG8BPWorlZhQMPOh873vSh5W7sTI1ceS3ISJNAgCS0IVWmuufKkpyjE1UOH2rVpT01ORdM8s%2BJkYZWv09JZuq7S4kJEDsqc2pXJouEmoBiaS5r2YFLarN9whl7P6B8y6VyWsPsiGv%2F7Sao%3D&Expires=1574323360"
},
{
userId: "21bdd072-7750-4c64-aa67-5f42cc69000f",
documentId: "6272e72b-9210-42f8-9d13-5040e00f006c",
documentName: "nikolauskas_CV.docx",
documentExtension: "docx",
documentUrl: "https://coobappstack-coobusercvdocumentbucket329b41a6-vkyyhisteb9f.s3.amazonaws.com/21bdd072-7750-4c64-aa67-5f42cc69000f/6272e72b-9210-42f8-9d13-5040e00f006c.docx?AWSAccessKeyId=ASIA22A5X2YDJ6ZQSQDG&Signature=jm2CHqlxV9jr8mguZ7mezkbRh3g%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIArSXyhUegTZYwkGNPCT1GWDClIq46bKeNlij2jgKHeAAiEAsYXkXliuKZ3cYEljpiTVmdm8Ccg1gdYkEkooCDqWZ0oqgAII6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3NDMwOTE3MjE3MzQiDMBz7dHTV%2BXsv436uyrUAR%2BWlVpaOfNrL1Tm4JcI6S3gcUdkHKXvRCkM8qsz2DAUF%2Frloh8%2Bl9qXHT5tsBl0tQZBMD8gpmCF8KqB10aaVh0%2BxrRgM42mkACOUzjTEDuRiYQEKvU8PsJeJlk%2BrbrTRav%2BuIvKJ1AsnM3eT68uF3eJ02d4PyfnuB58huf7sj%2BaKDHCjHri3eRGnj1Tfky1URvoSGFuHfEhHzYH4ZUKa35bFvCWSwfk1P98d0Vn6Tp0gJ9f8SD23KH6fFpKhQyrY1EPpkizz1ILjxVNr8Y4wjUK368GMITt2O4FOuABfBqIvPpFKzt5INc2oJicu9H1ePY3YVGbvVIt%2B%2BDyZUPLoQJAx9UDX0cxzlR8GiF%2BADQsI8qQ4uHcCnCDQ1lyIB6zc%2FC%2FUZdFUMr6Ar42l41abTkFK8saApXQ9ri%2BcV%2BsngmGcWHXBg2aClfiv4jlCV3pGCT4kxG8BPWorlZhQMPOh873vSh5W7sTI1ceS3ISJNAgCS0IVWmuufKkpyjE1UOH2rVpT01ORdM8s%2BJkYZWv09JZuq7S4kJEDsqc2pXJouEmoBiaS5r2YFLarN9whl7P6B8y6VyWsPsiGv%2F7Sao%3D&Expires=1574323360"
},
{
userId: "7a2abeb4-f607-4931-88f5-60a066fb1739",
documentId: "c2cb814b-f4e8-4549-a762-8cf72b7a4287",
documentName: "herushki_cv.docx",
documentExtension: "docx",
documentUrl: "https://coobappstack-coobusercvdocumentbucket329b41a6-vkyyhisteb9f.s3.amazonaws.com/7a2abeb4-f607-4931-88f5-60a066fb1739/c2cb814b-f4e8-4549-a762-8cf72b7a4287.docx?AWSAccessKeyId=ASIA22A5X2YDJ6ZQSQDG&Signature=8XtFqUxxlUNmeFYfYyVJRwo2U5c%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIArSXyhUegTZYwkGNPCT1GWDClIq46bKeNlij2jgKHeAAiEAsYXkXliuKZ3cYEljpiTVmdm8Ccg1gdYkEkooCDqWZ0oqgAII6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3NDMwOTE3MjE3MzQiDMBz7dHTV%2BXsv436uyrUAR%2BWlVpaOfNrL1Tm4JcI6S3gcUdkHKXvRCkM8qsz2DAUF%2Frloh8%2Bl9qXHT5tsBl0tQZBMD8gpmCF8KqB10aaVh0%2BxrRgM42mkACOUzjTEDuRiYQEKvU8PsJeJlk%2BrbrTRav%2BuIvKJ1AsnM3eT68uF3eJ02d4PyfnuB58huf7sj%2BaKDHCjHri3eRGnj1Tfky1URvoSGFuHfEhHzYH4ZUKa35bFvCWSwfk1P98d0Vn6Tp0gJ9f8SD23KH6fFpKhQyrY1EPpkizz1ILjxVNr8Y4wjUK368GMITt2O4FOuABfBqIvPpFKzt5INc2oJicu9H1ePY3YVGbvVIt%2B%2BDyZUPLoQJAx9UDX0cxzlR8GiF%2BADQsI8qQ4uHcCnCDQ1lyIB6zc%2FC%2FUZdFUMr6Ar42l41abTkFK8saApXQ9ri%2BcV%2BsngmGcWHXBg2aClfiv4jlCV3pGCT4kxG8BPWorlZhQMPOh873vSh5W7sTI1ceS3ISJNAgCS0IVWmuufKkpyjE1UOH2rVpT01ORdM8s%2BJkYZWv09JZuq7S4kJEDsqc2pXJouEmoBiaS5r2YFLarN9whl7P6B8y6VyWsPsiGv%2F7Sao%3D&Expires=1574323361"
}
]*/

function getData() {
    return axios.get(`https://neos5iulbh.execute-api.us-east-1.amazonaws.com/prod/get-all-documents`);
}

export default function List() {
    const initialUserState = {
        list: [],
        loading: true,
    };
    // let array = [
    //     {name: 'alaal', id: 1},
    //     {name: 'sdfgtg', id: 2},
    //     {name: 'ytrdfs', id: 3},
    //     {name: 'trsrwrf', id: 4},
    //     {name: 'wfregq', id: 5},
    // ];

    // const state = React.useState(initialUserState);
    // debugger
    // const list = state[0].list;
    // const setList = state[1];
    const [list, setList] = React.useState(initialUserState);

    useEffect(() => {

        const getList = async () => {
            let data = await getData();
            debugger
            setList({list: data, loading: false});
        };
        getList();
        debugger
        // console.log(list)
        // Invoke the async function
        // getUser()
    }, []);
    console.log(list.loading);
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
                                        <ListItem id={listItem.documentId}  name={listItem.documentName} url={listItem.documentUrl}/>
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
