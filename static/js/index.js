import React from 'react'
import ReactDOM from 'react-dom'
import './../css/app.css'
import '../css/appStyles.scss';
import Dashboard from './components/dashboard/dashboard'

function App(props) {
    let landing_url = ['/','login','about','contact'];

    let getOrigin = () => {
        if(landing_url.indexOf(location.pathname) !== -1){
            return 'landing';
        }
        return 'app';
    };
    if(getOrigin() === 'app') {
        return (
            <div>
                <Dashboard />
                Hello,
            </div>
        );
    }

    return (
        <div>
            Landing App,
        </div>
    );

}

const element = <App />;
ReactDOM.render(
    element,
    document.getElementById('react')
);
