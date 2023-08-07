import { useState } from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchAllPlayers() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/`
        );

        const result = await response.json();
        setPlayers(result.data.players);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllPlayers();
  }, []);

  return (
    <>
      <h2>PLAYERS</h2>
      <div className="card-players">
        {players.map((player) => {
          return (
            <Card key={player.id}>
              <Link to={`/players/${player.id}`}>
              <Card.Img src={player.imageUrl} />
              </Link> <br />
              {player.name}
            </Card>
          );
        })}
      </div>
    </>
  );
}
