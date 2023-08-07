import { useState } from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/teams`
        );

        const result = await response.json();
        setTeams(result.data.teams);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTeams();
  }, []);

  return (
    <>
      <div className="Teams">
        {teams.map((teams) => {
          return (
            <>
              <h2>TEAMS</h2>
              <Card bg="dark" data-bs-theme="dark">
                Name: {teams.name} <br />
                Id: {teams.id} <br />
                Score: {teams.score} <br />
                {teams.createdAt} <br />
                <h3>Players:</h3>
                <Container>
                  <Row md={2}>
                    <Col >
                      {teams.players.map((player) => (
                        <Card key={player.id}>
                          <Link to={`/players/${player.id}`}>
                            <Card.Img src={player.imageUrl} />
                          </Link>{" "}
                          <br />
                          {player.name}
                        </Card>
                      ))}
                    </Col>
                  </Row>
                </Container>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
}
