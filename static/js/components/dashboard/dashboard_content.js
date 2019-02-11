import React, { Component } from 'react'
import GenerateReport from './generate_report'
import SearchResult from './search_result';

class DashboardContent extends Component{

    render () {
        return (
            <div id="content">
                <div className="container-fluid">
                    {/*<GenerateReport />*/}
                    <SearchResult searchResult={this.props.searchResult} />
                    {/*TODO: Working on dashboard content */}
                </div>

            </div>
        );
    }
}

export default DashboardContent;