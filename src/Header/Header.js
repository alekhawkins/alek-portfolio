import React, { useState } from 'react';
import './Header.css';
import { Jumbotron, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import bgimage from '../assets/alien-arcade-background-1670977.png';
import mothership from '../assets/mothership.png';
import octopus from '../assets/octopus.png';
import squid from '../assets/squid.png';
import booker from '../assets/booker.jpg';
import moxxi from '../assets/moxxi.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';




const Header = (props) => {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

    return(
    <div>
      <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', height: '105vh'}} fluid>
        <Container fluid>
          <h1 className="Name">Alek Hawkins</h1>
          <p className="Title">Junior Software Engineer</p>
        </Container>
        <div style={{fontFamily: 'Raleway'}} className="Aliens">
          <div className="mothership">
          <Button alt="" style={{ backgroundColor: 'transparent', border: '0'}} onClick={toggle}><img src={mothership} alt="logo" style={{ height: '10em', width: '10em'}}/>About me!</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>About me!</ModalHeader>
        <ModalBody>
            I'm an ex-chef, avid gamer and ferret dad. I went to Eleven Fifty coding boot camp to start a career in web development. I recently moved to Seattle from Indy. I love sushi and boba tea. My favorite game is The Witcher 3.          <br />
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Booker and Moxxi </ModalHeader>
            <ModalBody>I'm sorry you died from cuteness overload.</ModalBody>
            <ModalFooter>
                <img src={booker} alt="#" style={{ width: '8em', height: '9em'}}/>
                <img src={moxxi} alt="#" style={{ width: '8em', height: '9em'}} />
              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggleNested}>Show Me Ferrets</Button>
        </ModalFooter>
      </Modal>
          </div>
        <Button href="https://www.linkedin.com/in/alek-hawkins-507ba6196/" alt="" style={{ backgroundColor: 'transparent', border: '0'}}><img src={octopus} alt="logo" style={{ height: '10em', width: '10em'}}/>LinkedIn</Button>
        <br />
        <Button href="https://github.com/alekhawkins" alt="" style={{ backgroundColor: 'transparent', border: '0'}}><img src={squid} alt="logo" style={{ height: '8em', width: '10em'}}/>GitHub</Button>
        </div>
      </Jumbotron>
    </div>
  );
}


  export default Header;