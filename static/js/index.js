import React from 'react'
import ReactDOM from 'react-dom'
import './../css/app.css'
import '../css/appStyles.scss';

function Welcome(props) {
    console.log('testing webpack');
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="world, from react.js" />;
ReactDOM.render(
    element,
    document.getElementById('react')
);
