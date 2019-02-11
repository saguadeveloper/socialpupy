import React from 'react'

function BreadCrumbs (props){

    return (
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">{ props.breadcrumbs}</h1>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={props.buttonAction}>
                <i className="fas fa-download fa-sm text-white-50" /> { props.buttonText }</a>
        </div>
    );
}

export default BreadCrumbs;