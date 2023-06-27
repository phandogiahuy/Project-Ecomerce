import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Title = styled.h1``;

export const List = styled.ul`
  list-style-type: none;
  margin-right: 20px;
  padding: 20px;
`;
export const ListItem = styled.li``;
export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
export const Logo = styled.h1``;
export const Desc = styled.div`
  margin: 20px 0px;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${[(props) => props.bg]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  &:hover {
    background-color: gainsboro;
    transform: scale(1.1);
  }
`;
export const Link = styled.a``;
