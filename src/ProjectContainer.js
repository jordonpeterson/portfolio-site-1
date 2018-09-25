import React,{Component,Fragment} from 'react'
import styled from 'styled-components'
import './App.css'
import Main from './Header'
import MainPictureContainer from './MainPictureContainer'
import ReactPicture from './react-image-jzpeterson.com.jpeg'
import RestPicture from './REST-image.jpeg'
import ScrabblePicture from './Scrabble.jzpeterson.com.jpeg'
import JestPicture from './jest-testing-jzpeterson.com.jpeg'
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
                       <MainPictureContainer src=''/>
                    </Flexcolumn>
                    <Flexcolumn size={4}>

                    </Flexcolumn>
                </Flexrow>

                <Flexrow>
                    <Flexcolumn size={4}>
                       <Project href={"https://github.com/jordonpeterson/portfolio-site-1"} title={"Portfolio Site"} src = {ReactPicture} text={"This site is built with react, flexbox and vanilla css. Starting on August 25th 2018 I plan to make at least weekly improvements to the site. "}/>

                    </Flexcolumn>
                    <Flexcolumn size={4}>
                        <Project href={"https://github.com/HelioTeam1/scrubble"} title ={"Scrubble"} src = {ScrabblePicture}text="A scrabble game where you can use anything defined in urban dictionary. We are building it with a React frontend, Apollo Client and a GraphQL Server. Currently we are in the process of building game logic with vanilla javascript."/>
                    </Flexcolumn>
                    <Flexcolumn size={4}>
                        <Project href={"https://github.com/jordonpeterson/RestAPIProject"}title={"REST API"} src = {RestPicture} text={"A rest API built with an express server and a react frontend. I intend to create basic CRUD functionality as well as pull from 3rd party API's. "}/>
                    </Flexcolumn>
                </Flexrow>
                <Flexrow>
                    <Flexcolumn>
                        <Project href={"https://github.com/jordonpeterson/react-jesttesting"} title={"Testing with Jest"} src = {JestPicture} text={"I want to write good unit tests in all of my projects. This project has a variety of functions and the unit tests that I have written for them. The functions.js and functions.test.js are based off of an online tutorial. The functions in codewars.js are my original solutions to codewars katas. I wrote the tests on my own although I often ask for pointers from more experienced developers."}/>
                    </Flexcolumn>

                </Flexrow>
            </Fragment>
        )
    }
}