import React, { useState } from 'react';
import { Card, Form, Button, Col, Row, ProgressBar } from 'react-bootstrap';

function PlayerPerformance() {
  const [player, setPlayer] = useState('');
  const [predictions, setPredictions] = useState({
    goals: 2,
    assists: 1,
    passes: 35,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate API Call
    setPredictions({
      goals: Math.floor(Math.random() * 5),
      assists: Math.floor(Math.random() * 5),
      passes: Math.floor(Math.random() * 50),
    });
  };

  return (
    <Card className="mt-4">
      <Card.Header>Predict Player Performances</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSearch}>
          <Form.Group>
            <Form.Label>Search Player</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter player name" 
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
              style={{ backgroundColor: '#555', color: '#f0f0f0' }} // Dark input field
            />
          </Form.Group>
          <Button variant="primary" type="submit">Predict</Button>
        </Form>

        <Row className="mt-4">
          <Col>
            <h6>Goals: {predictions.goals}</h6>
            <ProgressBar now={predictions.goals * 20} label={predictions.goals} />
          </Col>
          <Col>
            <h6>Assists: {predictions.assists}</h6>
            <ProgressBar now={predictions.assists * 20} label={predictions.assists} />
          </Col>
          <Col>
            <h6>Passes: {predictions.passes}</h6>
            <ProgressBar now={predictions.passes} label={predictions.passes} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PlayerPerformance;
