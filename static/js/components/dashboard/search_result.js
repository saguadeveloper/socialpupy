import React, { Component } from 'react';
import BreadCrumbs from '../general/breadcrumbs'
import Modal from '../general/modal'
import axios from 'axios'

class SearchResult extends Component {

     state = {
         active_view: 0,
         show_modal: false,
         title_post: '',
         post_description: ''
     };

     addNewPost = () => {
        this.setState({show_modal: true});
     };

    processAddNewPost = () => {
        if(this.state.title_post === '' || this.state.post_description === ''){
            console.log('Estas borracho papa');
        } else {
            axios.defaults.xsrfCookieName = 'csrftoken';
            axios.defaults.xsrfHeaderName = 'X-CSRFToken';
            this.state.searching_nav_bar_search = true;
            axios.post('/posts/create', {
                'title_post': this.state.title_post,
                'post_description': this.state.post_description
              })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
        }
        }
    };

    updateTitle = (event) => {
        this.setState({title_post: event.target.value});
    };

    updateDescription = (event) => {
        this.setState({post_description: event.target.value})
    };

    render(){
        if(this.props.searchResult.search_result.length){
            return (
                <div className="container-fluid">
                    <BreadCrumbs breadcrumbs="Dashboard" buttonText='Add Post' buttonAction={this.addNewPost}/>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Results</h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table className="table table-bordered dataTable" id="dataTable" width="100%"
                                                   cellSpacing="0" role="grid" aria-describedby="dataTable_info"
                                                   >
                                                <thead>
                                                <tr role="row">
                                                    <th className="sorting_asc" tabIndex="0" aria-controls="dataTable"
                                                        rowSpan="1" colSpan="1" aria-sort="ascending"
                                                        aria-label="Name: activate to sort column descending"
                                                        >Title
                                                    </th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable"
                                                        rowSpan="1" colSpan="1"
                                                        aria-label="Position: activate to sort column ascending"
                                                        >Description
                                                    </th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable"
                                                        rowSpan="1" colSpan="1"
                                                        aria-label="Office: activate to sort column ascending"
                                                        >Date
                                                    </th>
                                                    <th className="sorting" tabIndex="0" aria-controls="dataTable"
                                                        rowSpan="1" colSpan="1"
                                                        aria-label="Age: activate to sort column ascending"
                                                        >Actions
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                     this.props.searchResult.search_result.map( result => {
                                                         return  <tr role="row" className="odd" key={result.pk}>
                                                                    <td>{result.fields.title}</td>
                                                                    <td>{result.fields.description}</td>
                                                                    <td>{result.fields.created_at ? result.fields.created_at : 'N/A'} </td>
                                                                    <td>
                                                                        <button className="btn btn-sm btn-warning mr-2"> Edit</button>
                                                                        <button className="btn btn-sm btn-danger" > Delete</button>
                                                                    </td>
                                                                </tr>
                                                     })
                                                }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal />
                </div>
            );
        } else {
            return (
                <React.Fragment>
                    <BreadCrumbs breadcrumbs="Dashboard" buttonText='Add Post' buttonAction={this.addNewPost}/>
                    <div className="alert alert-info"> There is no result for this search!!!</div>
                    <Modal show={this.state.show_modal} >
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Post Title</label>
                                    <input type="text" className="form-control" placeholder="Enter Title" value={this.state.title_post} onChange={this.updateTitle}/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your
                                            email with anyone else.
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Description</label>
                                    <textarea cols="20" rows="10" className="form-control"  placeholder="Description" value={this.state.post_description} onChange={this.updateDescription}/>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.processAddNewPost}>Save Post</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </Modal>
                </React.Fragment>

            );
        }
}

export default SearchResult