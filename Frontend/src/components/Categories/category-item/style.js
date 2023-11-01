import styled from "styled-components";
import { medium, small } from "../../../responsive";

export const Container = styled.div`
  width: 100%;
  margin-left: 5px;
  position: relative;
`;
export const Image = styled.img`
  width: 98%;
  height: 267px;
  border-radius: 2px;
  ${small({ width: "95%" })}
  ${small({ height: "266px" })}

`;
export const Infor = styled.div`
  position: absolute;
  z-index: 1;
  left: 7em;
  top: 100px;
  ${small({ left: "3em" })};
  ${medium({ left: "4em" })};
`;
export const Title = styled.h1`
  font-weight: bolder;
  font-size: 40px;
  font-family: "AvengeanceMightiestAvenger", sans-serif;
`;
