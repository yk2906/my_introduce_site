import styled from "styled-components";
import { HeadingBase } from "./HeadingBase";

export const Heading = (props) => {
  const { children } = props;
  return <SHeading>{children}</SHeading>;
};

const SHeading = styled(HeadingBase)`
  color: gray;
  font-weight: bold;
  font-size: 130px;
`;
