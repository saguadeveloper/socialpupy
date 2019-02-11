import React, {Component} from 'react'

class Modal extends Component{

    render(){
        let show_modal = this.props.show;
        if(show_modal){
            $('#model_de_kgar').modal('show');
        }
        return (
            <div className="modal" tabIndex="-1" role="dialog" id="model_de_kgar">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;