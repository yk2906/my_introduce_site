import styled from "styled-components";

export const Pragraph = (props) => {
  const { children } = props;
  return <SPragraphFont>{children}</SPragraphFont>;
};

const SPragraphFont = styled.p`
  color: black;
  font-size: 30px;
`;
