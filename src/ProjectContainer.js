import React,{Component,Fragment} from 'react'
import styled from 'styled-components'
import './App.css'
import Main from './Header'
import MainPicture from './MainPicture'
import ReactPicture from './react-image-jzpeterson.com.jpeg'
import RestPicture from './REST-image.jpeg'
import ScrabblePicture from './Scrabble.jzpeterson.com.jpeg'
import Project from './ProjectLiteral'

const Flexrow = styled.div`

  display: flex;
`

const Flexcolumn = styled.div`
  text-align: center;
  color: white;

  width: ${(props) => props.size / 12 * 100}vw;
`
//An improvement to make is to resize the pictures to better fit the screen.
export default class extends Component{
    render(){
        return(
            <Fragment>
                <Flexrow>
                    <Flexcolumn size={12}>
                        <Main/>

                    </Flexcolumn>
                </Flexrow>
                <Flexrow>
                    <Flexcolumn size={4}>

                    </Flexcolumn>
                    <Flexcolumn size={4}>
                       <MainPicture src=''/>
                    </Flexcolumn>
                    <Flexcolumn size={4}>

                    </Flexcolumn>
                </Flexrow>

                <Flexrow>
                    <Flexcolumn size={4}>
                       <Project href={"https://github.com/jordonpeterson/portfolio-site"} title={"Portfolio Site"} src = {ReactPicture} text={"This site is built with react, flexbox and basic css...which is probably why it looks ugly."}/>

                    </Flexcolumn>
                    <Flexcolumn size={4}>
                        <Project href={"https://github.com/HelioTeam1/scrubble"} title ={"Scrubble"} src = {ScrabblePicture}text="A scrabble game where you can use anything defined in urban dictionary. We are building it with a React frontend, Apollo Client and a GraphQL Server. Currently we are in the process of building game logic with vanilla javascript."/>
                    </Flexcolumn>
                    <Flexcolumn size={4}>
                        <Project href={"https://github.com/jordonpeterson/RestAPIProject"}title={"REST API"} src = {RestPicture} text={"A rest API built with an express server and a react frontend. I intend to create basic CRUD functionality as well as pull from 3rd party API's "}/>
                    </Flexcolumn>
                </Flexrow>
            </Fragment>
        )
    }
}