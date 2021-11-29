import { Box, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import styled from "styled-components";
import { init, sendForm, send } from "emailjs-com";

import { Heading } from "../atoms/Heading";
import { Pragraph } from "../atoms/Pragraph";
import { SubHeading } from "../atoms/SubHeading";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

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
        <Box p="20px" display="flex">
          <Heading>Contact</Heading>
        </Box>
        <Stack spacing={6} py={4} px={10}>
          <Input bg="white" placeholder="お名前" />
          <Textarea bg="white" placeholder="お問い合わせ内容" />
          <PrimaryButton>送信</PrimaryButton>
        </Stack>
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
