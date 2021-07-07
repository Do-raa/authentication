import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid className="p-3">
          <h1 className="display-3">Welcome To Auth App</h1>
          <p className="lead">This is a workshop for authentification .</p>
          <a href="" target="_blank">
            GithubLink
          </a>
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Home;