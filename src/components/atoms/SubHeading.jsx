import styled from "styled-components";
import { HeadingBase } from "./HeadingBase";

export const SubHeading = (props) => {
  const { children } = props;
  return <SHeading>{children}</SHeading>;
};

const SHeading = styled(HeadingBase)`
  color: black;
  font-weight: bold;
  font-size: 80px;
`;
