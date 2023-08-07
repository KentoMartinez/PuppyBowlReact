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
        <h2 className="main-title">TEAMS</h2>
        {teams.map((teams) => {
          return (
            <>
              <Card bg="dark" data-bs-theme="dark" key={teams.id}>
                <h2>Team:</h2>
                {teams.name} <br />
                Id: {teams.id} <br />
                Score: {teams.score} <br />
                <h3>Players:</h3> <br />
                <Container>
                  <Row>
                    {teams.players.map((player) => (
                      <Col md={3} key={player.id}>
                        <Card key={player.id}>
                          <Link to={`/players/${player.id}`}>
                            <Card.Img src={player.imageUrl} />
                          </Link>{" "}
                          <br />
                          {player.name}
                        </Card>
                      </Col>
                    ))}
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
