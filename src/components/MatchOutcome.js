import React, { useState } from 'react';
import { Card, Form, Button, ProgressBar } from 'react-bootstrap';

function MatchOutcome() {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [outcome, setOutcome] = useState({ team1Prob: 50, team2Prob: 50 });

  const handlePrediction = (e) => {
    e.preventDefault();
    // Simulate Prediction API
    setOutcome({
      team1Prob: Math.floor(Math.random() * 100),
      team2Prob: Math.floor(Math.random() * 100),
    });
  };

  return (
    <Card id="outcome" className="mt-4">
      <Card.Header>Analyze Match Outcomes</Card.Header>
      <Card.Body>
        <Form onSubmit={handlePrediction}>
          <Form.Group>
            <Form.Label>Team 1</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter team 1" 
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Team 2</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter team 2" 
              value={team2}
              onChange={(e) => setTeam2(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Predict</Button>
        </Form>

        <div className="mt-4">
          <h6>Team 1 Win Probability</h6>
          <ProgressBar now={outcome.team1Prob} label={`${outcome.team1Prob}%`} />
          <h6>Team 2 Win Probability</h6>
          <ProgressBar now={outcome.team2Prob} label={`${outcome.team2Prob}%`} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default MatchOutcome;
