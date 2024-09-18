import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function TeamStrategy() {
  const recommendedPlayers = ['Player A', 'Player B', 'Player C', 'Player D'];

  return (
    <Card className="mt-4">
      <Card.Header>Optimize Team Strategy</Card.Header>
      <Card.Body>
        <h5>Recommended Team Composition</h5>
        <ListGroup>
          {recommendedPlayers.map((player, index) => (
            <ListGroupItem key={index}>{player}</ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default TeamStrategy;
