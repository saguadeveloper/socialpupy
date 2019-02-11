import React, { Component } from 'react'

class SearchNavBar extends Component{

    render() {
        let errors = (this.props.searchNavBar.error_class) ? <span className="small text text-danger" > Invalid Search Value</span> : '';
        let loading = (this.props.searchNavBar.searching) ? <i className="fas fa-spinner fa-spin fa-sm"></i> : <i className="fas fa-search fa-sm"></i>;
        return (
            <form
                    method="POST"
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..." aria-label="Search"
                            aria-describedby="basic-addon2"
                            value={this.props.searchNavBar.search_value}
                            onChange={this.props.searchNavBar.updateSearchValue}
                        />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button" onClick={this.props.searchNavBar.processSearch}>
                                    {loading}
                                </button>
                            </div>
                    </div>
                    {errors}
                </form>
        );
    }
}

export default SearchNavBar;