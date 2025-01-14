import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size='2xl' 
      name ='Patel' 
      src='https://i.pravatar.cc/150?img=7'
      />
      <Text as="h5">{greeting}</Text>
      <Heading as="h1">{bio1}</Heading>
      <Heading as="h1">{bio2}</Heading>

    </VStack>

  </FullScreenSection>
);

export default LandingSection;
