import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media  (max-width: 768px) {
      ${props}
    }
  `;
};
export const large = (props) => {
  return css`
    @media  (min-width: 1200px) {
      ${props}
    }
  `;
};
export const medium = (props) => {
  return css`
    @media  (min-width: 1024px) and (max-width:1366px) {
      ${props}
    }
  `;
};


