import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import ConfirmationButons from './ConfirmationButton';
import {Container, Row} from './comps';

class Confirmation extends Component {
  constructor(props) {
    super(props);

    this.getQueryParams = this.getQueryParams.bind(this);
    

    this.state = {
      start: '',
      end: ''
    }

  }

  render() {
    const start = this.state.start;
    if(start == '')
      this.getQueryParams();
    return(
      <Container
      id="example-3"
      fullHeight
      flexCol
      justifyContent="center"
      flex
      >
        
        
        <ConfirmationButons 
          meetingid={this.props.match.params.meetingid} 
          start={this.state.start}
          end={this.state.end} />
        
        
      </Container>
    )
  }

  

  getQueryParams = () => {
    let search = this.props.location.search;
    let params = new URLSearchParams(search);
    this.setState({start : params.get('start'), end: params.get('end')});
  }
  
}



export default Confirmation;