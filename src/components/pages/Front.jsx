import styled from "styled-components";

import { FrontHeading } from "../atoms/FrontHeading";

export const Front = () => {
  return (
    <SContainer>
      <FrontHeading>Hello World</FrontHeading>
    </SContainer>
  );
};

const SContainer = styled.div`
  background-color: #fffbbb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("https://source.unsplash.com/g9T-35bqJBA");
  background-repeat: no-repeat;
  background-size: cover;
`;
