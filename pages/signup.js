import React from "react";
import Signup from "../components/Signup";
import styled from "styled-components";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const SignUp = () => {
  return (
    <Columns>
      <Signup key="1" />
      <Signup key="2" />
      <Signup key="3" />
    </Columns>
  );
};

export default SignUp;
