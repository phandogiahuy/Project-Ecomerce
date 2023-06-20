import styled from "styled-components";

import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 40vh;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  ${mobile({ flexDirection: "column" })}
`;
export const Title = styled.h1``;
export const Description = styled.div`
  padding: 15px;
  ${mobile({ textAlign: "center" })}
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1 solid lightgray;
  ${mobile({ width: "80%" })}
`;
export const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 10px;
`;
export const Button = styled.button`
  flex: 1;
`;
