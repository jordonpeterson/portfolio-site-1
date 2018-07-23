import React, {Component, Fragment} from 'react'
import Project from './Project'
import {Button} from 'mdbreact'

const ProjectContainer = () => {
    return (

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Project/>
                    </div>
                    <div className="col">
                        <Project/>
                    </div>
                    <div className="col">
                        <Project/>
                    </div>
                    <Button>   Button </Button>
                </div>
            </div>

    )
}
export default ProjectContainer