import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";

import { Heading } from "../atoms/Heading";
import { Pragraph } from "../atoms/Pragraph";
import { SubHeading } from "../atoms/SubHeading";

export const Contact = () => {
  return (
    <>
      <Flex
        wrap="wrap"
        height="100vh"
        justify="space-around"
        backgroundColor="#fffbbb"
        direction="column"
        align="center"
      >
        <Box p="20px" h="100%" display="flex" alignItems="center">
          <Heading>Contact</Heading>
        </Box>
        <Box>
          <SubHeading>test</SubHeading>
        </Box>
      </Flex>
    </>
  );
};

// const SContainer = styled.div`
//   background-color: #fffbbb;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;
