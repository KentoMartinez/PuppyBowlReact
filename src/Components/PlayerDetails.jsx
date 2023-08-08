import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useState } from "react";


export default function PlayerDetails() {
  const { id } = useParams();
  const [playerDetail, setPlayerDetails] = useState();
  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/${id}`
        );
        const result = await response.json();
        setPlayerDetails(result.data.player);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDetails();
  }, [id]);
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h2>PLAYER</h2>
      <div id="single-card">
       
              {playerDetail && (
                <Card bg="dark" data-bs-theme="dark">
                  <Card.Img className="singlePi" src={playerDetail.imageUrl} />
                  Name: {playerDetail.name} <br />
                  Id: {playerDetail.id} <br />
                  Breed: {playerDetail.breed} <br />
                  Status: {playerDetail.status} <br />
                  Team: {playerDetail.team.name} <br />
                  Team ID: {playerDetail.teamId} <br />
                  {playerDetail.createdAt}
                </Card>
              )}
           
      </div>
      <Button variant="outline-danger" onClick={handleDelete} id="delete-button">
        Delete
      </Button>
      <Button variant="outline-light" href="/teams">
        Back
      </Button>
    </>
  );
}
