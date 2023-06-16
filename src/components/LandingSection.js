import React from "react";
import { Heading, VStack, Image } from "@chakra-ui/react";
import larissa from "../images/larissa.JPG"
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Larissa!";
const bio1 = "A frontend developer";
const bio2 = "that loves to learn";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Image src={larissa} alt="photo of Larissa" size="2x1"/>
        <Heading size="md" >{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
