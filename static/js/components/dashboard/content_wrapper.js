import React, { Component } from 'react'
import DashboardNavBar from './dashboard_navbar'
import DashboardContent from './dashboard_content'
import Footer from  './footer'
import axios from "axios";

class ContentWrapper extends Component{

     state= {
        search_value: '',
        error_class: false,
        searching_nav_bar_search: false,
        search_result: []
     };

    updateSearchValue = (event) => {
        this.setState({search_value: event.target.value});
        if(this.state.search_value.length >= 3){
            this.setState({error_class:false});
        }
    };

    processSearch = () => {
        if(this.state.search_value.length <= 3) {
            this.setState({error_class: true});
        } else {
            axios.defaults.xsrfCookieName = 'csrftoken';
            axios.defaults.xsrfHeaderName = 'X-CSRFToken';
            this.state.searching_nav_bar_search = true;
            axios.post('/posts/search', {
                'search_value': this.state.search_value,
              })
              .then((response) => {
                this.setState({searching_nav_bar_search: false});
                if(response.data.has_error){
                    console.log(response.data.error_message)
                } else {
                    this.setState({search_result: JSON.parse(response.data.result)});
                }
              })
              .catch((error) => {
                this.setState({searching_nav_bar_search: false});
                console.log(error);
              });
        }
    };



    render () {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                <DashboardNavBar
                    searchNavBar={{
                        search_value:this.state.search_value,
                        error_class: this.state.error_class,
                        updateSearchValue: this.updateSearchValue,
                        processSearch: this.processSearch,
                        searching: this.state.searching_nav_bar_search
                    }}
                />
                <DashboardContent searchResult={{
                        search_result: this.state.search_result
                }}/>
                <Footer />
            </div>
        );
    }
}

export default ContentWrapper;