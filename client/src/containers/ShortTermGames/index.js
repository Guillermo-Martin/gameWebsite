import React, { Component } from 'react';
import KitchenSinkCard from '../../components/KitchenSinkCard';
import AddShortModal from './../AddShortModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './styles.css';

class ShortTermGames extends Component {
  state = {
    shortTermGameData: [],
    authenticated: false,
  }
  
  // API call to the backend
  async componentDidMount() {
    // check to see if the user has been authenticated
    if(localStorage.getItem('token') !== null){
      this.setState({ authenticated : true });
    } 

    try {
      // when "/api/shorttermgames/" is hit, you'll get a response from the database, which is then saved to the "response" variable.
      let response = await axios.get("/api/shorttermgames/");
      // set the "shortTermGameData" state to be the data from the response
      this.setState({ shortTermGameData : response.data });
    } catch (err) {
      console.log(err, "line 21");
    }
  }

  render() {

  // ===== FUNCTIONS =====
  const allGames = this.state.shortTermGameData.map(game => 
    // <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="LegacyGames-card">
    <a href={`/ShortTermGames/${game._id}`} target="_blank" rel="noopener noreferrer" className="LegacyGames-card">
      <KitchenSinkCard 
        src={game.src}  // <--- for the image
        name={game.title}
        description={game.description}
        players={game.players}
        time={game.time}
      />
    </a>
  );

    return (
      <div>
        <Container fluid className="ShortTermGames-container">
          { this.state.authenticated
            ?
            <Row className="ShortTermGames-container-header-row">
              <h1 className="ShortTermGames-container-header">Board Games</h1>
              <div className="ShortTermGames-break"></div>
              <div className="ShortTermGames-modal-div"><AddShortModal /></div>
            </Row> 
            :
            <Row className="ShortTermGames-container-header-row">
              <h1 className="ShortTermGames-container-header">Board Games</h1>
            </Row>
          }
          
          <Row className="ShortTermGames-row">
            {/* ===== Game cards ===== */}
            {allGames}
          </Row>
          
        </Container>
        
        
      </div>
    );
  }
}

export default ShortTermGames;

// ========== NOTES ==========
//  INFORMATION FOR THE KITCHENSINKCARD
  //     <KitchenSinkCard 
        // src={game.src}
        // name={game.name}
        // description={game.description}
        // players={game.players}
        // time={game.time}
        // realRulesLink={game.realRulesLink}
        // drunkRulesLink={game.drunkRulesLink}
  //     /> 
  //   </a>
  // );