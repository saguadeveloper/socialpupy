import React, { Component } from 'react'
import Sidebar from './sidebar'
import ContentWrapper from "./content_wrapper";

class Dashboard extends Component{

    render () {
        return (
            <div id="wrapper">
                <Sidebar/>
                <ContentWrapper/>
            </div>
        );
    }
}

export default Dashboard;