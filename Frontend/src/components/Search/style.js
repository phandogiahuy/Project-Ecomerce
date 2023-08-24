import styled from "styled-components";

import { mobile } from "../../responsive";

export const ContainerSearch = styled.div`
  ${mobile({ marginBottom: "30px", marginRight: 10 })}
`;
export const InforSearch = styled.div`
  display: flex;
  padding: 10px;
  height: 120px;
`;
