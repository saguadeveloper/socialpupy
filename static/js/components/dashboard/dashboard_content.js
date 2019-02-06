import React, { Component } from 'react'
import GenerateReport from './generate_report'
class DashboardContent extends Component{

    render () {
        return (
            <div id="content">
                <div className="container-fluid">
                    <GenerateReport ></GenerateReport>
                    {/*TODO: Working on dashboard content */}
                </div>
            </div>
        );
    }
}

export default DashboardContent;