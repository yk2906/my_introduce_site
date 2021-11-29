import { useEffect, useState } from "react";
import axios from "axios";

import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { Graph } from "../molecules/Graph";

import { Heading } from "../atoms/Heading";
import { SubHeading } from "../atoms/SubHeading";

export const About = () => {
  const [languageList, setLanguageList] = useState([]);
  console.log(languageList);

  useEffect(() => {
    axios.get("https://api.github.com/users/yk2906/repos").then((res) => {
      const languageList = res.data.map((res) => res.language);
      const countedLanguageList = generateLanguageCountObj(languageList);
      setLanguageList(countedLanguageList);
    });
  }, []);

  const generateLanguageCountObj = (allLanguageList) => {
    const notNullLanguageList = allLanguageList.filter(
      (language) => language != null
    );
    const uniqueLanguageList = [...new Set(notNullLanguageList)];

    return uniqueLanguageList.map((item) => {
      return {
        language: item,
        count: allLanguageList.filter((language) => language === item).length
      };
    });
  };

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
          <Heading>About</Heading>
        </Box>
        <Box>
          <SubHeading>Skills</SubHeading>
        </Box>
        <Box>
          <SubHeading>Github</SubHeading>
        </Box>
        <Graph list={languageList} />
      </Flex>
    </>
  );
};

// const SContainer = styled.div`
//   background-color: #fffbbb;
//   height: 100vh;
//   display: flex;
//   padding: 20px;
// `;

// const HeadingWrapper = styled.div`
//   margin: auto 0;
//   padding: 20px;
//   background-color: lightgreen;
// `;

// const SubHeadingWrapper = styled.div`
//   padding: 20px;
//   background-color: lightcoral;
// `;
