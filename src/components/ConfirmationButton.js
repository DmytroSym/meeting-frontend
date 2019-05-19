import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card } from "./comps";
import rp from 'request-promise';
import { async } from 'q';

class ConfirmationButtons extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false,
      confirmed: false
    }
  }

  handleClick() {
    this.setState({ isLoading: true }, () => {
      console.log(this.props.meetingid);
      console.log(this.props.start);
      sendRequest(`http://localhost:5000/api/meeting/confirmation/${this.props.meetingid}?start=${this.props.start}&end=${this.props.end}`).then(() => {
        this.setState({ confirmed: true });
      })
    })
  }

  render() {
    const { isLoading, confirmed } = this.state;
    if(confirmed){
      return (
        <React.Fragment>
        <Row alignItems="center" >
        <div>Successfully confirmed, you can close this page</div>
        </Row>
        <Row alignItems="center">
        
        </Row>
        </React.Fragment>
      );
    } else {
      return(
        <React.Fragment>
          <Row alignItems="center" flexCol>
          Press Confirm button to confirm your meeting!
        </Row>
        
        <Row alignItems="center" justifyContent="center" >
          
          <Button
            variant="success"
            disabled={isLoading}
            onClick={!isLoading ? this.handleClick : null}
            >
              {isLoading ? 'Loading...' : 'Confirm'}
            </Button>
           
            
            
            
            
            
          </Row>
          </React.Fragment>
      )
    }
  }

  leavePage() {
    window.open("about:blank", "_self");
    window.close();
  }

}

async function sendRequest(path) {
  let options = {
    method: 'POST',
    uri: path
  }
  return rp(options).then(function(parsedBody){
    console.log(parsedBody);
  }).catch(function(err){
    console.log(err);
  })
  
}

export default ConfirmationButtons;