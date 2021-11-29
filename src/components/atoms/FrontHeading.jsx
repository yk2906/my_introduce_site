import styled from "styled-components";
import { HeadingBase } from "./HeadingBase";

export const FrontHeading = (props) => {
  const { children } = props;
  return <SFrontHeading>{children}</SFrontHeading>;
};

const SFrontHeading = styled(HeadingBase)`
  color: #fff;
`;
