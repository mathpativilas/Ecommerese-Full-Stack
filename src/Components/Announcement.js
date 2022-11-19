import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: teal;
  font-size: 17px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shoping On Order Over $50</Container>;
};

export default Announcement;
