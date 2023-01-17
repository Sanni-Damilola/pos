import React from "react";
import styled from "styled-components";

const Service = () => {
  return (
    <Container>
      <Heading>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
        amet ut debitis reprehenderit et! Perspiciatis aut vel nostrum debitis
        delectus ratione! Laborum explicabo modi sapiente sequi distinctio cum
        neque architecto.
      </Heading>
      <Tranactions></Tranactions>
      <Message></Message>
    </Container>
  );
};

export default Service;

const Container = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const Heading = styled.span`
  display: flex;
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
  color: rgb(0, 0, 0, 0.6);
  width: 600px;
  font-size: 17px;

  @media screen and (max-width: 500px) {
    font-size: 14px;
    width: auto;
    padding: 0px 20px 0px 20px;
  }
`;
const Tranactions = styled.div`
  width: 100%;
  height: 400px;
  background-color: red;
  margin-top: 20px;
`;

const Message = styled.div``;
