import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './styles.css';

function Footer() {
  return (
    <div>
        <Container fluid className="Footer-container">
        <Row className="Footer-row">
          <Col className="Footer-col"></Col>

          {/* ========== Logo ========== */}
          <Col className="Footer-col" lg={4} md={6} sm={12}>
            <Link to="/">
              <Image
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p370x247/67529268_665627333913015_2337246147929702400_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=kSPsdRngwLcAX9UJVsW&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=af476855dd55ba3c2227e2b324cb64cc&oe=5FA54906"
                className="Footer-logo"
                roundedCircle
              />
            </Link>
          </Col>

          {/* ========== Icons ========== */}
          <Col className="Footer-col" lg={4} md={6} sm={12}>
            <div className="Footer-text">
              <h4>Social Media</h4>
              <ul className="Footer-ul">
                <div>
                  <Row className="Footer-icon-row">
                    <li><a href="https://www.facebook.com/DrunkOnGamesChannel" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook Footer-facebook"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube Footer-youtube"></i></a></li>
                    <li><a href="https://www.instagram.com/drunkongameschannel/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram Footer-instagram"></i></a></li>
                    <li><a href="https://twitter.com/DrnkOnGames" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter Footer-twitter"></i></a></li>
                    <li><a href="mailto:DrunkonGamesChannel@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope Footer-envelope"></i></a></li>
                  </Row>
                </div>
              </ul>
            </div>
          </Col>  
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
