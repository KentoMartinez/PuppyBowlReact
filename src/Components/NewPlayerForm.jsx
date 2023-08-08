import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [teamId, setTeamId] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, breed, status, imageUrl, teamId }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>ADD NEW PLAYER</h2>
      {error && <p>{error}</p>}
      <Form onSubmit={handleSubmit} bg="dark" data-bs-theme="dark">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBreed">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUrl">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter Url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicStatus">
          <Form.Label>Status</Form.Label>
          <Form.Select aria-label="Default select example"
            value={status}
            onChange={(e) => setStatus(e.target.value)}>
            <option>Enter Status</option>
            <option type="enum">field</option>
            <option type="enum">bench</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTeamId">
          <Form.Label>Team</Form.Label>
          <Form.Select aria-label="Default select example"
            value={teamId}
            onChange={(e) => setTeamId(e.target.value)}>
            <option>Enter Team Number</option>
            <option type="number">680</option>
            <option type="number">679</option>
          </Form.Select>
        </Form.Group>
        <Button variant="outline-success" onClick={handleSubmit} type="submit">
          Submit
        </Button>
        <Button variant="outline-light" href="/teams">
          Back
        </Button>
      </Form>
    </>
  );
}
export default NewPlayerForm;
