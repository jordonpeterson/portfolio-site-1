import React, {Component, Fragment} from 'react';
import MainPictureContainer from './MainPictureContainer'
import ProjectContainer from './ProjectContainer'

class App extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1>Hello World!</h1>
                    <div className="row">
                        <div className="col-sm-6" >
                            <p>Lorem ipsum...</p>
                        </div>
                        <div className="col-sm-6" >
                            <p>Sed ut perspiciatis...</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
