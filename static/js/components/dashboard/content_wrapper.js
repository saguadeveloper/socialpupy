import React, { Component } from 'react'
import DashboardNavBar from './dashboard_navbar'
import DashboardContent from './dashboard_content'
import Footer from  './footer'

class ContentWrapper extends Component{

    render () {
        return (
            <div>
                <div id="content-wrapper" className="d-flex flex-column">
                    <DashboardNavBar/>
                    <DashboardContent/>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default ContentWrapper;