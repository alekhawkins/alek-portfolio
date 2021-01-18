import React from 'react';
import './Footer.css';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import netflix from '../assets/netflix.png';
import pokemonAPI from '../assets/pokemonAPI.png';
import smash from '../assets/smash.png';
import cssMonster from '../assets/cssMonster.png';
import redBadge from '../assets/redBadge.png';
import overwatch from '../assets/overwatch.png';

const Footer = (props) => {
    return (
        <div 
        style={{fontFamily: 'Raleway'}} className="container">
            <h1 style={{textAlign: 'center', color: 'whitesmoke', paddingBottom: '1em', fontFamily: 'Roboto'}}>Projects</h1>
            <div className="row">
                <div className="col-md-4">
                    <Card style={{ width: '18em' }} >
                        <CardImg top width="100%" src={overwatch} alt="Card image cap" />
                        <CardBody>
                            <CardTitle style={{fontWeight: 'bold', fontSize: '20px'}}>Overwatch Stat Tracker</CardTitle>
                            <CardSubtitle style={{fontWeight: 'bold'}}>React</CardSubtitle>
                            <CardText>A stat tracker for my Overwatch profile using an api to keep track of all my stats.</CardText>
                            <Button href="https://overwatch-stats-alek.herokuapp.com/" class="btn btn-primary">Go!</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18em', marginBottom: '2em' }} >
                        <CardImg top width="100%" src={pokemonAPI} alt="Card image cap" />
                        <CardBody>
                            <CardTitle style={{fontWeight: 'bold', fontSize: '20px'}}>Shiny Pokemon Generator</CardTitle>
                            <CardSubtitle style={{fontWeight: 'bold'}}>Javascript with API</CardSubtitle>
                            <CardText>Using a web based API, you can type in a pokemon and get the default/shiny sprite.</CardText>
                            <br />
                            <Button href="https://ah-pokemonapi.firebaseapp.com/.">Go!</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18em' }} >
                        <CardImg top width="100%" src={smash} alt="Card image cap" />
                        <CardBody>
                            <CardTitle style={{fontWeight: 'bold', fontSize: '20px'}}>Smash Combo Generator</CardTitle>
                            <CardSubtitle style={{fontWeight: 'bold'}}>React</CardSubtitle>
                            <CardText>A multi-page web app where you can create and log into an account and store smash combos to characters.</CardText>
                            <Button href="https://ach-smash-client.herokuapp.com/">Go!</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18em' }} >
                        <CardImg top width="100%" src={cssMonster} alt="Card image cap" />
                        <CardBody>
                            <CardTitle style={{fontWeight: 'bold', fontSize: '20px'}}>Scream Css</CardTitle>
                            <CardSubtitle style={{fontWeight: 'bold'}}>Css</CardSubtitle>
                            <CardText>I made scream in codepen using css to practice styling and shapes.</CardText>
                            <br />
                            <Button href="https://codepen.io/alekhawkins17/pen/OJLoyLw">Go!</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18em' }} >
                        <CardImg top width="100%" src={redBadge} alt="Card image cap" />
                        <CardBody>
                            <CardTitle style={{fontWeight: 'bold', fontSize: '20px'}}>Video Game Reviewer</CardTitle>
                            <CardSubtitle style={{fontWeight: 'bold'}}>AngularJS</CardSubtitle>
                            <CardText>A group project where you can create an account and make reviews of games where others can see.</CardText>
                            <Button href="https://redbadge.herokuapp.com/login" class="btn btn-primary">Go!</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18em' }} >
                        <CardImg top width="100%" src={netflix} alt="Card image cap" />
                        <CardBody>
                            <CardTitle style={{fontWeight: 'bold', fontSize: '20px'}}>Netflix Static Page</CardTitle>
                            <CardSubtitle style={{fontWeight: 'bold'}}>Html/Css</CardSubtitle>
                            <CardText>I created a static web page with no functionality with html and css.</CardText>
                            <br />
                            <Button href="https://alekhawkins.github.io/staticLayoutProject/">Go!</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}


export default Footer;