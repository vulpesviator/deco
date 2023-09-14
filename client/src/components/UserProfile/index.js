import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import ImageCarousel from "../ImageCarousel";
import { List, Container, Segment, Header, Button } from "semantic-ui-react";

function UserProfile() {

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      Auth.logout();
    } catch (e) {
      console.log(e);
    }
  };

return (
  <Container >
    <Segment.Group horizontal>
        <Segment horizontal textAlign="center">
          <h1 font-size="50px">Danny Wittig</h1>
          <Segment textAlign="center" s>
          <Button onClick={handleLogout}>Log Out</Button>
        </Segment>
        </Segment>
        
      {/* <Segment textAlign="center">
        <Header>Top Artists</Header>
        <List>
          <List.Item>Vincent Van Gogh</List.Item>
          <List.Item>Pablo Picasso</List.Item>
          <List.Item>Andy Warhol</List.Item>
        </List>
      </Segment> */}
      <Segment textAlign="center">
        <Header>Top Art Styles</Header>
        <List>
          <List.Item>Expressionism</List.Item>
          <List.Item>Minimalism</List.Item>
          <List.Item>Pop Art</List.Item>
        </List>
        
      </Segment>
    </Segment.Group>
    <Segment.Group >
      <Segment textAlign="center">
        <Header>Top Art Pieces</Header>
      </Segment>
      <Segment> 
        <ImageCarousel />
      </Segment>
    </Segment.Group>
    

  </Container>
);
}
  
export default UserProfile;
